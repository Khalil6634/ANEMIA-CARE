import { HeartPulse, ChevronRight } from "lucide-react";
import ScrollAreaUI from "@/components/FixedComponents/ScrollAreaUI";
import { useNavigate } from "react-router";
import { mainPageContent } from "@/Content/MainPageContent";
import { useTtdLogs } from "@/hooks/getTtdLog";
import { useEffect } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router";

export const Main = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const { data: logs, isLoading, isError } = useTtdLogs();
  const [] = useSearchParams();

  useEffect(() => {
    return () => {};
  }, []);
  console.log(logs);

  return (
    <main className="flex-1 px-4 sm:px-6 pt-8 max-sm:mt-0 space-y-6 overflow-y-auto">
      {/* Spacer atas */}

      <div className="h-2"></div>

      {/* Banner Utama */}
      <div className="relative  bg-linear-to-br from-rose-500 to-pink-600 rounded-2xl p-5 text-white overflow-hidden shadow-lg shadow-rose-200">
        {/* Dekorasi background lingkaran lembut */}
        <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between">
          <div className="space-y-1.5 max-w-[65%]">
            <h2 className="text-xl font-bold tracking-tight">
              Hai, {username}
            </h2>
            <p className="text-xs text-rose-100 font-medium">
              Jadwal TTD minggu ini:{" "}
              <span className="underline decoration-white/60 font-semibold">
                Belum dicatat
              </span>
            </p>

            {/* Tombol Aksi Cepat */}
            <button className="inline-flex items-center gap-1 text-xs font-semibold bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-xl transition-all mt-2 text-white border border-white/20">
              <span>Lihat Kalender TTD</span>
              <span className="text-sm">→</span>
            </button>
          </div>

          {/* Ilustrasi ikon / grafis */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-inner shrink-0">
            <HeartPulse className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-pulse" />
          </div>
        </div>
      </div>

      {/* Grid Layout: 1 kolom di HP (turun ke bawah), 2 kolom di layar besar (lg) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Kolom Kiri: Edukasi & Navigasi */}
        <section className="space-y-3 w-full">
          <div className="w-full flex justify-between items-center">
            <h1 className="text-xl font-semibold text-slate-800">
              Edukasi & Navigasi
            </h1>
          </div>

          {/* Card 1: Kenali Anemia */}

          {mainPageContent.map((c, i) => (
            <div
              className="group w-full bg-white border border-rose-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-between cursor-pointer"
              key={i}
            >
              <div
                className="flex items-center gap-3.5 pr-2"
                onClick={() => navigate(c.Link)}
              >
                <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-colors shrink-0">
                  <c.Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm">
                    {c.Title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {c.Description}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-rose-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
            </div>
          ))}
        </section>

        {/* Kolom Kanan: Statistik & Ringkasan */}
        <section className="space-y-4 w-full z-10">
          <div className="w-full flex justify-between items-center">
            <h1 className="text-xl font-semibold text-slate-800">
              Statistik & Ringkasan
            </h1>
            <Button variant="ghost" className={"text-rose-500"}>
              <SlidersHorizontal size={15} />
            </Button>
          </div>
          {/* Hapus h-44 jika membuat area scroll terpotong di dalamnya, atau biarkan flex-1 */}
          <div className="w-full">
            {isLoading ? (
              <div className="flex items-center bg-white h-70 justify-center p-8 text-sm text-slate-500">
                Memuat riwayat minum TTD...
              </div>
            ) : isError || logs.data.length <= 0 ? (
              <div className="flex items-center justify-center p-8 text-sm text-slate-500">
                <p>Kamu belum ada catatan apapun :(</p>
              </div>
            ) : (
              <ScrollAreaUI datas={logs.data} />
            )}
          </div>
        </section>
      </div>

      {/* SPACER BAWAH: Memberikan ruang kosong ekstra agar konten paling bawah bisa digulir keluar dari balik navbar */}
      <div className=" w-full shrink-0" />
    </main>
  );
};
