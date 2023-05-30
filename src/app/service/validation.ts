import * as z from "zod";

export const InputCepSchema = z.object({
  cep: z
    .string()
    .max(8, { message: "8 characters são necessários" })
    .min(8, { message: "8 characters são necessários" }),
});
export const InputEnderencoSchema = z.object({
  uf: z
    .string()
    .max(2, { message: "Apenas 2 dígitos são necessários" }),
  cidade: z.string(),
  enderenco: z.string(),
});