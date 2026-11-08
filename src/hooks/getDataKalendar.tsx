import axiosInstance from "@/libs/AxiosIntaces";
import { useQuery } from "@tanstack/react-query";
import type { TtdLogResponse } from "./getTtdLog";


// Hook untuk mengambil data riwayat / log TTD
export function useTtdCalendarLogs() {
  return useQuery({
    queryKey: ['ttdLogs'],
    queryFn: async () => {
      const response = await axiosInstance.get<TtdLogResponse>('getTTDKalendar'); // Sesuaikan dengan endpoint backend Anda
      return response.data.data;
    },
    enabled: !!localStorage.getItem('token'),
  });
}