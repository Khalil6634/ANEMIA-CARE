import { Home, BookOpen, Calendar,  User } from "lucide-react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";

export const Tabs = () => {
  const Location = useLocation();
  const navigate = useNavigate();

  console.log(Location.pathname);

  return (
    <nav className="bottom-0 fixed left-0 right-0 bg-white border-t border-slate-100 px-6 py-3 flex justify-around items-center z-20">
          
          <button onClick={() => navigate("/User")} className={`flex flex-col items-center gap-1  ${Location.pathname == "/User" ? "text-rose-600" : ""}`}>
            <Home className="w-5 h-5 fill-rose-100" />
            <span className="text-[10px] font-semibold">Beranda</span>
          </button>

          <button onClick={() => navigate("/User/Edukasi")} className={`flex flex-col items-center gap-1  ${Location.pathname == "/User/Edukasi" ? "text-rose-600" : ""}`}>
            <BookOpen className="w-5 h-5" />
            <span className="text-[10px]">Edukasi</span>
          </button>

          <button onClick={() => navigate("/User/Kalendar")} className={`flex flex-col items-center gap-1  ${Location.pathname == "/User/Kalendar" ? "text-rose-600" : ""}`}>
            <Calendar className="w-5 h-5" />
            <span className="text-[10px]">Kalender</span>
          </button>

          <button onClick={() => navigate("/User/Profile")} className={`flex flex-col items-center gap-1  ${Location.pathname == "/User/Profile" ? "text-rose-600" : ""}`}>
            <User className="w-5 h-5" />
            <span className="text-[10px]">Profil</span>
          </button>

        </nav>
  );
};
