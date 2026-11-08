import { HeartPulse } from "lucide-react";
import { User } from "lucide-react";
import { EllipsisVertical } from "lucide-react";

const Navbar = () => {
  const username = localStorage.getItem("username");


  return (
    <header className="bg-white border-b border-rose-100 sticky top-0 z-50 shadow-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white shadow-sm">
            <HeartPulse className="w-5 h-5" />
          </div>
          <span className="font-bold text-rose-600 text-lg tracking-wider">
            ANEMIA CARE
          </span>
        </div>

        {/* User Profile Pill (Header) */}
        <div className="flex items-center gap-2 bg-rose-50/60 px-3 py-1.5 rounded-full border border-rose-100">
          <div className="w-7 h-7 rounded-full bg-rose-200 flex items-center justify-center text-rose-700 font-bold text-xs">
            <User />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-slate-800">
            {username}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
