import { Users, CheckCircle2, AlertCircle, Calendar, Search, Filter } from 'lucide-react';

export function AdminBeranda() {
  const stats = [
    {
      title: "Total Siswa Terdaftar",
      value: "142",
      description: "Seluruh kelas aktif",
      icon: Users,
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      title: "Sudah Minum TTD",
      value: "118",
      description: "83% tingkat kepatuhan Rabu ini",
      icon: CheckCircle2,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      title: "Belum / Terlewat",
      value: "24",
      description: "Memerlukan tindak lanjut UKS",
      icon: AlertCircle,
      color: "bg-rose-50 text-rose-600 border-rose-100",
    },
  ];

  const recentLogs = [
    { name: "Siti Aminah", class: "XI IPA 1", time: "09:30 WIB", status: "sudah" },
    { name: "Ahmad Fauzi", class: "XI IPS 2", time: "10:15 WIB", status: "sudah" },
    { name: "Dewi Lestari", class: "X MIPA 3", time: "-", status: "pending" },
    { name: "Budi Santoso", class: "XII IPA 2", time: "08:45 WIB", status: "sudah" },
    { name: "Rina Melati", class: "X IPS 1", time: "10:50 WIB", status: "sudah" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
      
      {/* Header Banner Admin yang Elegan (Lebar Penuh) */}
      <div className="bg-linear-to-r from-rose-600 via-pink-600 to-rose-700 rounded-2xl p-6 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-rose-50 mb-1">
            <span>Panel Kontrol UKS</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Dashboard Administrator 👋</h1>
          <p className="text-xs sm:text-sm text-rose-100">
            Sistem Monitoring Kepatuhan Tablet Tambah Darah (TTD) Siswa Berbasis Web
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium border border-white/20 flex items-center gap-2 shrink-0 shadow-sm">
          <Calendar className="w-4 h-4 text-rose-200" />
          <span>Rabu, 28 Oktober 2026</span>
        </div>
      </div>

      {/* Grid Kartu Statistik (3 Kolom Sejajar di Desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-semibold text-slate-500">{stat.title}</span>
                <div className={`p-2.5 rounded-xl border ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{stat.value}</h2>
                <p className="text-xs text-slate-400 mt-1">{stat.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Layout Terstruktur: 2 Kolom di Desktop (Tabel Utama di Kiri, Widget Info di Kanan) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Kolom Kiri: Daftar Aktivitas Siswa (Lebar 2 Kolom) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <h3 className="font-bold text-slate-800 text-base">Aktivitas Siswa Rabu Ini</h3>
              <p className="text-xs text-slate-400">Pencatatan real-time kepatuhan minum TTD</p>
            </div>
            
            {/* Fitur Pencarian & Filter ala Dashboard Profesional */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-48">
                <input 
                  type="text" 
                  placeholder="Cari siswa..." 
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 pl-8 focus:outline-none focus:border-rose-500"
                />
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
              </div>
              <button className="text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 px-3 py-2 rounded-xl transition-colors flex items-center gap-1 shrink-0 cursor-pointer">
                <Filter className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Filter</span>
              </button>
            </div>
          </div>

          {/* List Aktivitas Siswa */}
          <div className="space-y-3">
            {recentLogs.map((log, index) => (
              <div 
                key={index} 
                className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/40 hover:bg-slate-50 transition-all flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-rose-100 text-rose-700 font-bold text-xs flex items-center justify-center shrink-0">
                    {log.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">{log.name}</h4>
                    <p className="text-[11px] text-slate-500">{log.class} • Waktu: <span className="font-medium text-slate-700">{log.time}</span></p>
                  </div>
                </div>

                <div>
                  {log.status === "sudah" ? (
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5 shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Sudah Minum</span>
                    </span>
                  ) : (
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200 flex items-center gap-1.5 shrink-0">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Belum Tercatat</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Kanan: Sidebar Widget (Informasi & Rekap Kelas) */}
        <div className="space-y-6">
          
          {/* Card Informasi Program */}
          <div className="bg-linear-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 shadow-md space-y-4">
            <h3 className="font-bold text-sm text-rose-400 uppercase tracking-wider">Informasi Program</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Program pemberian Tablet Tambah Darah (TTD) dilaksanakan secara rutin setiap hari Rabu untuk mencegah anemia pada remaja putri sekolah.
            </p>
            <div className="pt-2 border-t border-slate-700 flex justify-between items-center text-xs text-slate-400">
              <span>Target Kepatuhan:</span>
              <span className="font-bold text-emerald-400">≥ 90%</span>
            </div>
          </div>

          {/* Card Rekap Kelas */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-xs space-y-4">
            <h3 className="font-bold text-slate-800 text-sm">Rekap Berdasarkan Kelas</h3>
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between items-center p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="font-medium text-slate-700">Kelas XI IPA 1</span>
                <span className="font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">95% Hadir</span>
              </div>
              <div className="flex justify-between items-center p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="font-medium text-slate-700">Kelas XI IPS 2</span>
                <span className="font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">88% Hadir</span>
              </div>
              <div className="flex justify-between items-center p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="font-medium text-slate-700">Kelas X MIPA 3</span>
                <span className="font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">70% Hadir</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}