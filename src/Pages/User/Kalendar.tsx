import { CalendarUI } from "@/components/FixedComponents/Calendar";
import { Button } from "@/components/ui/button";
import { Check, CheckCircle2Icon } from "lucide-react";

export default function KalenderTTD() {
  return (
    <div className="min-h-screen bg-slate-100/70 sm:py-8 sm:px-4 flex justify-center items-start sm:items-center">
      {/* Lebar container disesuaikan: max-w-md untuk mobile, max-w-4xl untuk desktop */}
      <main className="w-full min-h-screen sm:min-h-90 sm:max-w-2xl lg:max-w-4xl mt-10 bg-white sm:rounded-3xl shadow-sm border border-slate-100 p-5 sm:p-6 lg:p-8 space-y-6 relative">
        {/* Layout Grid Responsif: Ke bawah di HP, Berjejer ke samping di Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Kolom Kiri: Kalender & Keterangan (Legend) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Box Pembungkus Kalender */}
            <div className="bg-rose-50/40 rounded-2xl p-3 border border-rose-100/75">
              <CalendarUI />
            </div>

            {/* Keterangan / Legend Status */}
            <div className="flex items-center justify-between px-1 text-[11px] sm:text-xs font-medium text-slate-600">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                  <Check className="w-2.5 h-2.5 stroke-3" />
                </div>
                <span>Sudah minum</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-rose-500" />
                <span>Jadwal minum</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-slate-300" />
                <span>Belum dicatat</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Box Ringkasan Bulan Ini */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-rose-50/60 border border-rose-100 p-5 sm:p-6 rounded-2xl space-y-4 h-full flex flex-col justify-center">
              <h3 className="font-bold text-rose-900 text-sm sm:text-base">
                Ringkasan Bulan Ini
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex justify-between">
                  <span>Jadwal TTD</span>
                  <span className="font-bold text-slate-900">: 8 kali</span>
                </div>
                <div className="flex justify-between">
                  <span>Sudah dicatat</span>
                  <span className="font-bold text-slate-900">: 5 kali</span>
                </div>
                <div className="flex justify-between">
                  <span>Belum dicatat</span>
                  <span className="font-bold text-slate-900">: 3 kali</span>
                </div>
              </div>
            </div>
          <Button className={"bg-green-500 w-full h-10 font-semibold"}>
            <CheckCircle2Icon strokeWidth={3} /> Checklis Hari ini
          </Button>
          <Button variant="secondary" className={"w-full h-10 font-semibold"}>
            <CheckCircle2Icon strokeWidth={3} /> Checklis Hari ini
          </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
