import z from "zod";

export const SignupSchema = z.object({
  name: z.string().min(6, "Username minimal harus 2 karakter!!"),
  email: z.string().email("Format email tidak valid (contoh: user@gmail.com)"),
  password: z.string().min(6, "Password minimal harus 6 karakter"),
  nis: z.string().min(4, "Username minimal harus 2 karakter!!"),
  class: z.string().min(4, "Username minimal harus 2 karakter!!"),
  phone: z.string().min(4, "Username minimal harus 2 karakter!!"),
});

export type SignupInput = z.infer<typeof SignupSchema>;