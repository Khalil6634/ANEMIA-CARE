import { BookOpen } from "lucide-react";
import { Link } from "react-router";

export default function Edukasi() {
  return (
    <main className="flex-1 px-2 py-15 space-y-3">
      <h1 className="text-2xl font-semibold">Materi & Edukasi</h1>

      <div className="group w-full bg-white border border-rose-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-between cursor-pointer">
        <Link to={"/User/Edukasi/Materi"}>
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-colors">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-sm">
                Apa itu Anemia?
              </h3>
              <p className="text-xs text-slate-500">
                Pelajari apa itu anemia, gejala, dan cara mencegahnya.
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="group w-full bg-white border border-rose-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-between cursor-pointer">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-colors">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-sm">
              Apa itu Anemia?
            </h3>
            <p className="text-xs text-slate-500">
              Pelajari apa itu anemia, gejala, dan cara mencegahnya.
            </p>
          </div>
        </div>
      </div>

      <div className="group w-full bg-white border border-rose-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-between cursor-pointer">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-colors">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-sm">
              Apa itu Anemia?
            </h3>
            <p className="text-xs text-slate-500">
              Pelajari apa itu anemia, gejala, dan cara mencegahnya.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
