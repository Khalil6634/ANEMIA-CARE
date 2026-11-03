import axiosInstance from "@/libs/AxiosIntaces";

export interface User {
  id: string;
  name: string;
  nis: string;
  school: string;
  class: string;
  dob: Date | string; // Bisa berupa objek Date atau string ISO dari database/API
  phone?: string | null;
  password?: string;  // Opsional, biasanya disembunyikan saat dikirim ke frontend
}

import { useMutation } from '@tanstack/react-query';

// Tipe data payload signup
interface SignupPayload {
  name: string;
  nis: string;
  school: string;
  class: string;
  dob: string;
  phone?: string;
  password: string;
}

export function useSignupMutation() {
  return useMutation({
    mutationFn: async (data: SignupPayload) => {
      const response = await axiosInstance.post('Signup', data);
      return response.data; // Mengembalikan data dari response backend
    },
  });
}