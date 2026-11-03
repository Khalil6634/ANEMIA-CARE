import axiosInstance from "@/libs/AxiosIntaces";
import type { TtdRecord } from "./getTtdLog";
import { useQuery } from "@tanstack/react-query";

// Hook untuk mengambil data riwayat / log TTD
export function useTtdLogs() {
  return useQuery({
    queryKey: ['ttdLogs'],
    queryFn: async () => {
      const response = await axiosInstance.get('/getTTDLog'); // Sesuaikan dengan endpoint backend Anda
      return response.data.data as TtdRecord[];
    },
    enabled: !!localStorage.getItem('token'),
  });
}