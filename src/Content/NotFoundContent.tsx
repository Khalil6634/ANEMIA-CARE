import { SearchAlertIcon } from "lucide-react";

const NotFoundContent = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <SearchAlertIcon />
      <p>Konten tidak tersedia</p>
    </div>
  );
};

export default NotFoundContent;
