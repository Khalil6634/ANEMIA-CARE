import { Separator } from "../ui/separator";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { testScrollContent } from "@/Content/TestScrollContent";
import React from "react";
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import { id } from "date-fns/locale";
import { format } from "date-fns";

interface dataScroll {
  date: string;
  status: string;
  label: string;
  desc: string | null;
}

interface props {
  datas: dataScroll[]
}

// createdAt
// : 
// "2026-11-03T21:23:57.919Z"
// date
// : 
// "2026-11-04T00:00:00.000Z"
// desc
// : 
// "sudah minum obat anemia"
// id
// : 
// "d5e4e492-f8e7-4827-8edf-833a3f081519"
// label
// : 
// "Sudah Diminum"
// status
// : 
// "SUDAH"
// updatedAt
// : 
// "2026-11-03T21:23:57.919Z"
// userId
// : 
// "30958c92-1213-40ee-95fd-6a02cd5823bf"

const ScrollAreaUI = (data:props) => {

  return (
    <ScrollArea className="w-full h-70 rounded-2xl border border-rose-100 bg-white p-2 shadow-sm">
      <div className="p-2 space-y-1">
        {data.datas.map((value, i) => {
          let badgeStyle = "bg-slate-100 text-slate-600 border-slate-200";
          let IconComponent = AlertCircle;

          if (value.status === "SUDAH") {
            badgeStyle = "bg-emerald-50 text-emerald-700 border-emerald-200";
            IconComponent = CheckCircle2;
          } else if (value.status === "BELUM_TERCATAT") {
            badgeStyle = "bg-rose-50 text-rose-700 border-rose-200";
            IconComponent = AlertCircle;
          } else if (value.status === "TERLEWAT") {
            badgeStyle = "bg-amber-50 text-amber-700 border-amber-200";
            IconComponent = XCircle;
          }

          return (
            <React.Fragment key={i}>
              <div className="p-3 rounded-xl hover:bg-slate-50/80 transition-all flex items-start gap-3">
                {/* Ikon Status */}
                <div
                  className={`mt-0.5 p-2 rounded-xl border shrink-0 ${badgeStyle}`}
                >
                  <IconComponent className="w-4 h-4" />
                </div>

                {/* Informasi Teks */}
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs font-bold text-slate-900 truncate">
                      {value.label}
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border shrink-0 ${badgeStyle}`}
                    >
                      {value.status}
                    </span>
                  </div>

                  <div className="text-xs font-medium text-rose-600">
                    {format(value.date.toString(), "EEEE, d MMMM yyyy", { locale: id })}
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </div>

              {i < testScrollContent.length - 1 && (
                <Separator className="my-1.5 bg-slate-100" />
              )}
            </React.Fragment>
          );
        })}
      </div>
      <ScrollBar />
    </ScrollArea>
  );
};

export default ScrollAreaUI;
