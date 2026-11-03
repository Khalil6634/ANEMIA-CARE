import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Outlet } from "react-router";
import { useNavigate } from "react-router";

const PageLayout = () => {
  const navigate = useNavigate();

  const BackPage = () => {
    navigate(-1)
  }

  return (
    <div className="max-sm:h-240 h-auto w-full bg-muted flex flex-col relative overflow-hidden">
      {/* Header / Navbar Atas (Tidak menutupi layar) */}
      <header className="shrink-0 w-full z-40 bg-white fixed">
        <div className="w-full p-4 flex bg-white">
          <Button onClick={BackPage} className="text-lg text-red-500" variant="ghost">
            <ChevronLeft />
            Kembali
          </Button>
        </div>
      </header>

      {/* Konten Utama (Outlet) - Mengisi sisa ruang dan bisa di-scroll dengan mulus */}
      <main className="flex-1 min-h-0 w-full overflow-y-auto p-4">
        <Outlet />

        <div className="h-24 w-full shrink-0" />
      </main>
    </div>
  );
};

export default PageLayout;
