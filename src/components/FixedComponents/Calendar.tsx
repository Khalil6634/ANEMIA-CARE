import { useState } from "react";
import { Calendar } from "@/components/ui/calendar"; 
import { Check } from "lucide-react";
import { id } from "date-fns/locale";

export function CalendarUI() {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 9, 22));

  const sudahMinumDates = [
    new Date(2026, 9, 6),
    new Date(2026, 9, 8),
    new Date(2026, 9, 13),
    new Date(2026, 9, 15),
    new Date(2026, 9, 20),
  ];

  const jadwalMinumDates = [
    new Date(2026, 9, 22), 
  ];

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
              if (!currentDate || !(currentDate instanceof Date)) return null;

              const year = currentDate.getFullYear();
              const month = currentDate.getMonth();
              const dateNum = currentDate.getDate();

              const isSudahMinum = sudahMinumDates.some(
                (d) => d.getFullYear() === year && d.getMonth() === month && d.getDate() === dateNum
              );
              const isJadwal = jadwalMinumDates.some(
                (d) => d.getFullYear() === year && d.getMonth() === month && d.getDate() === dateNum
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
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-rose-600 flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md shadow-rose-200">
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
      </div>

    </div>
  );
}