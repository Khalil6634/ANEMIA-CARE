import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@/libs/AxiosIntaces';

interface UpdateTtdPayload {
  date: string;
  status: 'SUDAH' | 'BELUM_TERCATAT' | 'TERLEWAT';
  label: string; // misal: "Minum TTD Rabu"
  desc : string;
}

export function useUpdateTtd() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: UpdateTtdPayload) => {
      // Sesuaikan '/ttd/record' dengan endpoint POST/PUT di backend Anda
      const response = await axiosInstance.patch('UpdateTTD', data);
      return response.data;
    },
    onSuccess: () => {
      // KUNCI UTAMA: Menyuruh React Query mengambil ulang data kalender & log
      // agar UI (warna kalender) langsung berubah otomatis tanpa perlu refresh page
      queryClient.invalidateQueries({ queryKey: ['calendarViewData'] });
      queryClient.invalidateQueries({ queryKey: ['ttdLogs'] });
      alert("data berhasil dicatat!!")
    },
    onError: (error) => {
      console.error("Gagal update TTD:", error);
      alert("Gagal mencatat status, periksa koneksi Anda.");
    }
  });
}