import React, { useState } from "react";
import {
  User,
  Lock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";
import { useLoginMutation } from "@/lib/Autht"; // Sesuaikan path import hook Anda
import { Link, useNavigate } from "react-router";

export function LoginPage() {
  const [formData, setFormData] = useState({
    nis: "",
    password: "",
  });

  const [alert, setAlert] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const navigate = useNavigate();

  // Panggil React Query Mutation hook untuk login
  const { mutate: loginUser, isPending } = useLoginMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAlert(null);

    loginUser(formData, {
      onSuccess: (result) => {
        // Simpan token JWT ke localStorage jika disediakan oleh backend
        if (result.token) {
          localStorage.setItem("token", result.token);
          localStorage.setItem("username", result.data.name);
          localStorage.setItem("nis", result.data.nis);
          console.log("data", result.data);
        }

        if (result.data) {
          localStorage.setItem("username", result.data.name);
          localStorage.setItem("nis", result.data.nis);
          console.log("data", result.data);
        }

        setAlert({
          type: "success",
          text: "Login berhasil! Mengalihkan ke dashboard...",
        });

        // Alihkan halaman setelah berhasil (sesuaikan dengan router Anda, misal react-router)
        navigate("/User/");
      },
      onError: (error: any) => {
        // Tangkap pesan error dari response backend
        const errorMessage =
          error.response?.data?.message ||
          "NIS atau password salah. Silakan coba lagi.";
        setAlert({ type: "error", text: errorMessage });
      },
    });
  };

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-12 bg-white overflow-x-hidden">
      {/* Kolom Kiri: Sisi Informasi & Branding (Full Tinggi & Proporsional di Desktop) */}
      <div className="hidden lg:flex lg:col-span-5 bg-linear-to-br from-rose-600 via-pink-600 to-rose-700 p-10 xl:p-16 text-white flex-col justify-between relative overflow-hidden">
        {/* Efek Lingkaran Abstrak */}
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-black/10 blur-2xl pointer-events-none" />

        <div className="space-y-6 relative z-10 max-w-md">
          <div className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <HeartPulse className="w-4 h-4 text-rose-200" />
            <span>Anemia Care System</span>
          </div>
          <h1 className="text-3xl xl:text-4xl font-extrabold tracking-tight leading-tight">
            Selamat Datang Kembali di Anemia Care.
          </h1>
          <p className="text-sm xl:text-base text-rose-100 leading-relaxed">
            Masuk untuk memantau jadwal konsumsi Tablet Tambah Darah (TTD)
            mingguan dan menjaga kesehatan tubuh Anda.
          </p>
        </div>

        <div className="space-y-4 relative z-10 pt-8 border-t border-rose-500/50 max-w-md">
          <div className="flex items-center gap-3 text-sm text-rose-100">
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 text-white" />
            </div>
            <span>Catat status minum TTD dengan cepat dan mudah</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-rose-100">
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-white" />
            </div>
            <span>Data riwayat kesehatan aman dan terintegrasi</span>
          </div>
        </div>
      </div>

      {/* Kolom Kanan: Formulir Login */}
      <div className="lg:col-span-7 p-6 sm:p-10 lg:p-16 xl:p-20 flex flex-col justify-center items-center">
        <div className="w-full max-w-xl space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Masuk Akun 👋
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Masukkan Email atau NIS dan password Anda untuk melanjutkan ke dashboard.
            </p>
          </div>

          {/* Notifikasi Alert */}
          {alert && (
            <div
              className={`p-3.5 rounded-xl text-xs sm:text-sm flex items-center gap-2.5 border ${alert.type === "success" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-rose-50 text-rose-700 border-rose-200"}`}
            >
              {alert.type === "success" ? (
                <CheckCircle2 className="w-4 h-4 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 shrink-0" />
              )}
              <span>{alert.text}</span>
            </div>
          )}

          {/* Form Input */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* NIS */}
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-semibold text-slate-700">
                NIS (Nomor Induk Siswa) / Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="nis"
                  placeholder="Contoh: 10293847"
                  value={formData.nis}
                  onChange={handleChange}
                  required
                  className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 pl-10 focus:outline-none focus:border-rose-500 transition-colors"
                />
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-semibold text-slate-700">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Masukkan password Anda"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 pl-10 focus:outline-none focus:border-rose-500 transition-colors"
                />
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            {/* Tombol Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isPending}
                className="w-full py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold shadow-md shadow-rose-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>
                  {isPending ? "Memproses Masuk..." : "Masuk Sekarang"}
                </span>
                {!isPending && <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </form>

          {/* Footer Tautan Daftar */}
          <div className="text-center pt-2">
            <p className="text-xs sm:text-sm text-slate-500">
              Belum punya akun?{" "}
              <Link
                to={"/Signup/"}
                className="font-bold text-rose-600 hover:underline"
              >
                Daftar di sini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
