import { z } from "zod";

export const contatoSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, "O nome deve ter pelo menos 2 caracteres.")
    .max(100, "O nome deve ter no máximo 100 caracteres."),

  email: z
    .string()
    .trim()
    .email("Informe um e-mail válido.")
    .max(254, "O e-mail é muito longo."),

  mensagem: z
    .string()
    .trim()
    .min(5, "A mensagem deve ter pelo menos 5 caracteres.")
    .max(2000, "A mensagem deve ter no máximo 2000 caracteres."),
});

export type Contato = z.infer<typeof contatoSchema>;