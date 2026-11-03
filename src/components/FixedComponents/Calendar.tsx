import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Check, CheckCircle2Icon } from "lucide-react";
import { id } from "date-fns/locale";
import { Button } from "../ui/button";
import { format } from "date-fns";
import { useUpdateTtd } from "@/hooks/updateTTDLog";
import { useTtdLogs } from "@/hooks/getTtdLog";

export function CalendarUI() {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 9, 22));
  const today = new Date();
  const day = format(today, "EEEE", { locale: id });
  const { mutate: markAsTaken, isPending } = useUpdateTtd();

  const { data: logs } = useTtdLogs();

  const takenDates =
    logs
      ?.filter((log) => log.status === "SUDAH")
      .map((log) => {
        // log.date dari database (misal: "2026-11-04")
        const d = new Date(log.date);

        // 🛡️ Ambil murni komponen tahun, bulan, dan tanggal UTC-nya tanpa terpengaruh jam lokal
        return new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
      }) || [];

  // 2. Fungsi saat tanggal di kalender diklik
  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;
    setDate(date);

    // Ambil murni string tanggal lokal (YYYY-MM-DD)
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`; // Pastikan hasilnya "2026-11-04"

    const isAlreadyChecked = logs?.some(
      (log) =>
        log.date.split("T")[0] === formattedDate && log.status === "SUDAH",
    );

    if (isAlreadyChecked) {
      alert(
        "💊 Anda sudah mencatat minum TTD di hari ini! Baru bisa checklist lagi minggu depan (Rabu depan).",
      );
      return;
    }

    markAsTaken({
      date: formattedDate,
      status: "SUDAH",
      label: "Sudah Diminum",
      desc: "sudah minum obat anemia",
    });
  };

  const Now = new Date();
  const Year = Now.getFullYear();
  const Month = Now.getMonth();

  const sudahMinumDates = takenDates;

  function getWednesdaysInMonth(year: number, month: number) {
    const wednesdays: Date[] = [];
    const date = new Date(year, month, 1);

    while (date.getDay() !== 3) {
      date.setDate(date.getDate() + 1);
    }

    while (date.getMonth() === month) {
      wednesdays.push(new Date(date));
      date.setDate(date.getDate() + 7);
    }

    return wednesdays;
  }

  const jadwalMinumDates = getWednesdaysInMonth(Year, Month);

  return (
    <div className="w-full space-y-4">
      {/* Box Utama Kalender */}
      <div className="bg-rose-50/40 rounded-2xl p-4 border border-rose-100/75 shadow-xs overflow-hidden">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          locale={id}
          className="w-full font-sans flex justify-center"
          classNames={{
            month: "space-y-3 relative",
            caption_label: "text-base font-bold text-slate-800",

            nav: "space-x-1 flex items-center",
            button_previous: "absolute z-10 left-2 top-2",
            button_next: "absolute z-10 right-2 top-2",

            day: "h-8 w-8 sm:h-9 sm:w-9 p-0 font-medium text-slate-700 hover:bg-slate-200/60 rounded-full flex items-center justify-center transition-colors text-xs sm:text-sm mx-auto",
          }}
          components={{
            Day: ({ day, ...htmlProps }: any) => {
              const currentDate: Date = day?.date || day;
              if (!currentDate || !(currentDate instanceof Date)) return <div {...htmlProps} />;

              const year = currentDate.getFullYear();
              const month = currentDate.getMonth();
              const dateNum = currentDate.getDate();

              const isSudahMinum = sudahMinumDates.some(
                (d) =>
                  d.getFullYear() === year &&
                  d.getMonth() === month &&
                  d.getDate() === dateNum,
              );
              const isJadwal = jadwalMinumDates.some(
                (d) =>
                  d.getFullYear() === year &&
                  d.getMonth() === month &&
                  d.getDate() === dateNum,
              );

              if (isSudahMinum) {
                return (
                  <div className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center mx-auto">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-xs">
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-3" />
                    </div>
                  </div>
                );
              }

              if (isJadwal) {
                return (
                  <div className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center mx-auto">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md shadow-rose-200">
                      {dateNum}
                    </div>
                  </div>
                );
              }

              return (
                <button
                  {...htmlProps}
                  type="button"
                  className="h-8 w-8 sm:h-10 sm:w-10 p-0 font-medium text-slate-700 hover:bg-slate-200/60 rounded-full flex items-center justify-center transition-colors text-xs sm:text-sm mx-auto"
                >
                  {dateNum}
                </button>
              );
            },
          }}
        />
        <Button
          onClick={() => handleDateSelect(new Date())}
          className={"bg-green-500 w-full h-10 font-semibold"}
          disabled={day !== "Rabu"}
        >
          {isPending ? (
            "Mencatat..."
          ) : (
            <>
              <CheckCircle2Icon />
              Checklis Hari Ini
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
