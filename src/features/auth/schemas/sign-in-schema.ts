import { z } from "zod";

export const signinSchema = z.object({
  email: z.email("E-mail inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export type SignInData = z.infer<typeof signinSchema>;
