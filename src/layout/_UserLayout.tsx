import Navbar from "@/components/FixedComponents/Navbar";
import { Tabs } from "@/components/FixedComponents/Tabs";
import { Outlet } from "react-router";

export default function UserLayout() {
  return (
    <div className="max-sm:h-240 h-auto w-full bg-muted flex flex-col relative overflow-hidden">
      
      {/* Header / Navbar Atas (Tidak menutupi layar) */}
      <header className="shrink-0 w-full z-40 bg-white fixed">
        <Navbar />
      </header>

      {/* Konten Utama (Outlet) - Mengisi sisa ruang dan bisa di-scroll dengan mulus */}
      <main className="flex-1 min-h-0 w-full overflow-y-auto p-4">
        <Outlet />
        
        {/* Spacer bawah agar elemen terbawah tidak tertutup oleh Tabs */}
        <div className="h-24 w-full shrink-0" />
      </main>

      {/* Tabs / Navigasi Bawah */}
      <nav className="shrink-0 w-full z-40 bg-white">
        <Tabs />
      </nav>

    </div>
  );
}