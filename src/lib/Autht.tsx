import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/libs/AxiosIntaces";

interface LoginPayload {
  nis: string;
  password: string;
}


export function useLoginMutation() {
  return useMutation({
    mutationFn: async (data: LoginPayload) => {
      const response = await axiosInstance.post("login", data);
      return response.data; // Mengembalikan token dan data user dari backend
    },
  });
}
