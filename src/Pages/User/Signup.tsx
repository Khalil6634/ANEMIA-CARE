import React, { useState } from "react";
import {
  User,
  School,
  Phone,
  Calendar,
  Lock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  HeartPulse,
  ShieldCheck,
  Mail,
} from "lucide-react";
import { useSignupMutation, type SignupPayload } from "@/lib/Signup";
import { Link, useNavigate } from "react-router";
import { AlertAll } from "@/components/FixedComponents/Alert";

export function SignupPage() {
  const [formData, setFormData] = useState<SignupPayload>({
    name: "",
    nis: "",
    school: "",
    class: "",
    dob: "",
    phone: "",
    password: "",
    email: "",
  });

  const [alert, setAlert] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const navigate = useNavigate();

  // Panggil React Query Mutation hook
  const {
    mutate: signupUser,
    isPending,
    isSuccess,
    isError,
  } = useSignupMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAlert(null);

    // Eksekusi mutasi React Query
    signupUser(formData, {
      onSuccess: (result) => {
        setAlert({
          type: "success",
          text: result.message || "Registrasi akun berhasil! Silakan masuk.",
        });
        setFormData({
          name: "",
          nis: "",
          school: "",
          class: "",
          dob: "",
          phone: "",
          password: "",
          email: "",
        });
      },
      onError: (error: any) => {
        // Menangkap pesan error dari response backend Axios
        const errorMessage =
          error.response?.data?.message ||
          "Gagal terhubung ke server. Periksa koneksi Anda.";
        setAlert({ type: "error", text: errorMessage });
      },
    });
  };

  if (isSuccess) {
    navigate("/Login");
  }

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-12 bg-white overflow-x-hidden">
      <div className="absolute z-15 p-4">
        {isSuccess ? (
          <AlertAll activityStatus={true} />
        ) : isError ? (
          <AlertAll activityStatus={false} />
        ) : (
          ""
        )}
      </div>
      {/* Kolom Kiri: Branding */}
      <div className="hidden lg:flex lg:col-span-5 bg-linear-to-br from-rose-600 via-pink-600 to-rose-700 p-10 xl:p-16 text-white flex-col justify-between relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-black/10 blur-2xl pointer-events-none" />

        <div className="space-y-6 relative z-10 max-w-md">
          <div className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <HeartPulse className="w-4 h-4 text-rose-200" />
            <span>Anemia Care System</span>
          </div>
          <h1 className="text-3xl xl:text-4xl font-extrabold tracking-tight leading-tight">
            Bergabung Bersama Kami Cegah Anemia Sejak Dini.
          </h1>
          <p className="text-sm xl:text-base text-rose-100 leading-relaxed">
            Platform digital pemantauan kepatuhan konsumsi Tablet Tambah Darah
            (TTD) khusus pelajar.
          </p>
        </div>

        <div className="space-y-4 relative z-10 pt-8 border-t border-rose-500/50 max-w-md">
          <div className="flex items-center gap-3 text-sm text-rose-100">
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 text-white" />
            </div>
            <span>Pantau jadwal minum TTD mingguan secara real-time</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-rose-100">
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-white" />
            </div>
            <span>Akses materi edukasi kesehatan terpercaya</span>
          </div>
        </div>
      </div>

      {/* Kolom Kanan: Formulir */}
      <div className="lg:col-span-7 p-6 sm:p-10 lg:p-16 xl:p-20 flex flex-col justify-center items-center">
        <div className="w-full max-w-xl space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Daftar Akun Baru ✨
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Lengkapi data diri Anda dengan benar untuk mulai menggunakan
              aplikasi.
            </p>
          </div>

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

          <form onSubmit={handlerSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-semibold text-slate-700">
                Nama Lengkap
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Contoh: Siti Aminah"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 pl-10 focus:outline-none focus:border-rose-500 transition-colors"
                />
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-semibold text-slate-700">
                  NIS
                </label>
                <input
                  type="text"
                  name="nis"
                  placeholder="10293847"
                  value={formData.nis}
                  onChange={handleChange}
                  required
                  className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 focus:outline-none focus:border-rose-500"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-semibold text-slate-700">
                  Kelas
                </label>
                <input
                  type="text"
                  name="class"
                  placeholder="XI IPA 1"
                  value={formData.class}
                  onChange={handleChange}
                  required
                  className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 focus:outline-none focus:border-rose-500"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-semibold text-slate-700">
                Asal Sekolah
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="school"
                  placeholder="SMP Muhammadiyah 19 Sawangan"
                  value={formData.school}
                  onChange={handleChange}
                  required
                  className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 pl-10 focus:outline-none focus:border-rose-500"
                />
                <School className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-semibold text-slate-700">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Contoh@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 pl-10 focus:outline-none focus:border-rose-500"
                />
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-semibold text-slate-700">
                  No. WhatsApp (Opsional)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="phone"
                    placeholder="081234567890"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 pl-10 focus:outline-none focus:border-rose-500"
                  />
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-semibold text-slate-700">
                  Tanggal Lahir
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 pl-10 focus:outline-none focus:border-rose-500"
                  />
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-semibold text-slate-700">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Min. 6 karakter"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 pl-10 focus:outline-none focus:border-rose-500"
                />
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isPending}
                className="w-full py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold shadow-md shadow-rose-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>
                  {isPending ? "Memproses Pendaftaran..." : "Daftar Sekarang"}
                </span>
                {!isPending && <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </form>

          <div className="text-center pt-2">
            <p className="text-xs sm:text-sm text-slate-500">
              Sudah punya akun?{" "}
              <Link
                to={"/Login"}
                className="font-bold text-rose-600 hover:underline"
              >
                Masuk di sini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


