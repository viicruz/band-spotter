//* Libraries Imports
import z from "zod";

const statesEnum = z.enum(
  [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ],
  {
    invalid_type_error: "Estado inválido",
    required_error: "Estado é obrigatório",
  }
);

export type States = z.infer<typeof statesEnum>;

const nameSchema = z
  .string({
    invalid_type_error: "Nome inválido",
    required_error: "Nome é obrigatório",
  })
  .min(3, {
    message: "Nome muito curto",
  })
  .max(100, {
    message: "Nome muito longo",
  });

const casheSchema = z.coerce
  .number({
    invalid_type_error: "Valor inválido",
    required_error: "Valor é obrigatório",
  })
  .min(100, {
    message: "O valor mínimo é R$ 100,00",
  })
  .max(1000000, {
    message: "O valor máximo é R$ 1.000.000,00",
  });

const dateSchema = z
  .string()
  .refine(
    (data) => {
      const formmatedDate = data.split('/');
      const tmp = formmatedDate[0];
      formmatedDate[0] = formmatedDate[1];
      formmatedDate[1] = tmp;

      console.log(formmatedDate)
      const date = new Date(`${formmatedDate[0]}/${formmatedDate[1]}/${formmatedDate[2]}`);
      const today = new Date();
      console.log(date.getDay(), date.getMonth(), date.getFullYear());
      return date > today;
    },
    { message: "A data do evento deve ser futura" }
  )

const cepSchema = z
  .string({
    invalid_type_error: "CEP inválido",
    required_error: "CEP é obrigatório",
  })
  .min(9, {
    message: "CEP muito curto",
  })
  .max(9, {
    message: "CEP muito longo",
  })
  .regex(/^\d{5}-\d{3}$/, {
    message: "CEP inválido",
  })

const numberSchema = z
  .string({
    invalid_type_error: "Número inválido",
    required_error: "Número é obrigatório",
  })
  .min(1, {
    message: "Número muito curto",
  })
  .max(4, {
    message: "Número muito longo",
  })
  .regex(/^\d+$/, {
    message: "Número inválido",
  })
  .transform((data) => {
    const removeNonDigits = data.replace(/\D/g, "");
    const removeExtraDigits = removeNonDigits.slice(0, 4);
    return removeExtraDigits;
  });

const streetSchema = z
  .string({
    invalid_type_error: "Rua inválida",
    required_error: "Rua é obrigatória",
  })
  .min(3, {
    message: "Rua muito curta",
  })
  .max(100, {
    message: "Rua muito longa",
  });

const neighborhoodSchema = z
  .string({
    invalid_type_error: "Bairro inválido",
    required_error: "Bairro é obrigatório",
  })
  .min(3, {
    message: "Bairro muito curto",
  })
  .max(100, {
    message: "Bairro muito longo",
  });

const citySchema = z
  .string({
    invalid_type_error: "Cidade inválida",
    required_error: "Cidade é obrigatória",
  })
  .min(3, {
    message: "Cidade muito curta",
  })
  .max(100, {
    message: "Cidade muito longa",
  });

export const contractArtistSchema = z.object({
  name: nameSchema,
  cashe: casheSchema,
  date: dateSchema,
  cep: cepSchema,
  number: numberSchema,
  street: streetSchema,
  neighborhood: neighborhoodSchema,
  city: citySchema,
  state: statesEnum,
  artistId: z.string()
});

export type FormData = z.infer<typeof contractArtistSchema>;
