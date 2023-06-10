import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().max(50, {message: "O nome pode ter no máximo 50 caracteres"}).min(1, {message: "Digite seu nome"}),
    email: z.string().email({message: "Digite seu email"}).max(127, {message: "O email pode ter no máximo 50 caracteres"}),
    password: z.string().max(255, {message: "A senha pode ter no máximo 255 caracteres"}).min(8, {message: "A senha precisa ter pelo menos 8 caracteres"}),
    confirmPassword: z.string().optional(),
    phone: z.string().min(11, {message: "O telefone precisa ter 11 caracteres"}).max(11, {message: "O telefone precisa ter 11 caracteres"})
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas não coincidem"
});