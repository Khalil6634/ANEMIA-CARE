import {
  User,
  BookOpen,
  Calendar as CalendarIcon,
  Home,
  Edit3,
} from "lucide-react";

export default function Profile() {
  const username = localStorage.getItem("username");
  const nis = localStorage.getItem("nis");
  return (
    <div className="min-h-dvh bg-slate-100/70 flex flex-col justify-between font-sans relative">
      <div className="h-12"></div>

      {/* Main Body / Profile Card Container */}
      <main className="flex-1 max-w-2xl w-full mx-auto p-4 sm:p-6 lg:p-8 pb-28 sm:pb-12">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 sm:p-8 space-y-6">
          {/* Judul Kartu */}
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
            Profil Saya
          </h2>

          {/* Foto Avatar & Nama Singkat */}
          <div className="flex flex-col items-center justify-center space-y-3 pt-2">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-rose-50 border-4 border-rose-100 overflow-hidden flex items-center justify-center shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80"
                alt="Avatar Pengguna"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-slate-900">{username}</h3>
              <p className="text-xs text-slate-500">Siswa / Pelajar</p>
            </div>
          </div>

          {/* Daftar Informasi Detail Profil */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between py-3 border-b border-slate-100 text-sm">
              <span className="text-slate-500 font-medium">Nama</span>
              <span className="font-semibold text-slate-800">{username}</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-slate-100 text-sm">
              <span className="text-slate-500 font-medium">NIS</span>
              <span className="font-semibold text-slate-800">{nis}</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-slate-100 text-sm">
              <span className="text-slate-500 font-medium">Sekolah</span>
              <span className="font-semibold text-slate-800">SMAN 1 Kota</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-slate-100 text-sm">
              <span className="text-slate-500 font-medium">Kelas</span>
              <span className="font-semibold text-slate-800">XI IPA 2</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-slate-100 text-sm">
              <span className="text-slate-500 font-medium">Tanggal Lahir</span>
              <span className="font-semibold text-slate-800">15 Mei 2009</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-slate-100 text-sm">
              <span className="text-slate-500 font-medium">Nomor HP</span>
              <span className="font-semibold text-slate-800">0812********</span>
            </div>
          </div>

          {/* Tombol Aksi Edit Profil */}
          <div className="pt-4">
            <button className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3.5 px-4 rounded-2xl shadow-md shadow-rose-200 transition-all flex items-center justify-center gap-2 cursor-pointer">
              <Edit3 className="w-4 h-4" />
              <span>Edit Profil</span>
            </button>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation (Hanya tampil di layar HP) */}
      <nav className="sm:hidden absolute bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-6 py-3 flex justify-around items-center z-20 shadow-lg">
        <a
          href="#"
          className="flex flex-col items-center gap-1 text-slate-400 hover:text-rose-600 transition-colors"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px]">Beranda</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center gap-1 text-slate-400 hover:text-rose-600 transition-colors"
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px]">Edukasi</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center gap-1 text-slate-400 hover:text-rose-600 transition-colors"
        >
          <CalendarIcon className="w-5 h-5" />
          <span className="text-[10px]">Kalender</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-rose-600">
          <User className="w-5 h-5 fill-rose-100" />
          <span className="text-[10px] font-semibold">Profil</span>
        </a>
      </nav>

    </div>
  );
}
