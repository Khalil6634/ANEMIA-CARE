import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/libs/AxiosIntaces'; // Sesuaikan dengan path axios Anda

// Definisikan bentuk (tipe) data balikan dari database
export interface TtdRecord {
  id: string;
  userId: string;
  date: string;
  status: 'SUDAH' | 'BELUM_TERCATAT' | 'TERLEWAT';
  label: string;
  desc: string | null;
  createdAt: string;
  updatedAt: string;
}

export function useTtdLogs() {
  return useQuery({
    queryKey: ['ttdLogs'], // Kunci unik cache untuk React Query
    queryFn: async () => {
      // Pastikan path endpoint sesuai dengan router di backend Anda
      const response = await axiosInstance.get('getTTDLog');
      
      // Backend kita sebelumnya mengembalikan response: { success, message, data: [...] }
      // Jadi kita hanya me-return bagian "data"-nya saja
      return response.data.data as TtdRecord[]; 
    },
    // Opsional: Opsi ini memastikan data hanya difetch jika token ada
    enabled: !!localStorage.getItem('token'), 
  });
}