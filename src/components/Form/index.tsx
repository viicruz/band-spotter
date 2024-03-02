"use client";

//* Libraries Imports
import type { ChangeEvent } from "react";
import { User, Money, Calendar, MapPin } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useEffect } from "react";

//* Local Imports
import { InfoInput } from "../InfoInput";
import { FormButton } from "../FormButton";
import { contractArtistSchema, type FormData, type States } from "@/schemas/contractArtist";
import { getCep } from "@/services/viaCep";


async function postContractArtist(data: FormData) {
  const response = await fetch("/api/create-assign", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return response;
}

export function Form() {
  const params = useParams<{ artistId: string }>()
  const form = useForm<FormData>({
    resolver: zodResolver(contractArtistSchema),
  });


  function handleSubmit(data: FormData) {
    postContractArtist(data);
  }

  const handleCep = async (cep: string) => {
    try {
      const data = await getCep(cep);
      form.setValue('street', data.logradouro);
      form.setValue('neighborhood', data.bairro);
      form.setValue('city', data.localidade);
      form.setValue('state', data.uf as States);
      form.clearErrors('cep');
    } catch (error) {
      form.setError('cep', {
        type: 'manual',
        message: 'Cep inválido',
      });
      form.setValue('street', '');
      form.setValue('neighborhood', '');
      form.setValue('city', '');
      form.setValue('state', '' as States);
    }
  }

  useEffect(() => {
    form.setValue('artistId', params.artistId)
  }, [])

  return (
    <form
      className='flex flex-col items-center gap-6'
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <h2 className='pb-3 text-3xl font-bold text-black'>
        Contrate este artista
      </h2>


      <div className='flex flex-col items-start w-full gap-6'>
        <div className='flex flex-col w-full gap-2 '>

          <InfoInput
            icon={User}
            id="name"
            label="Nome do contratante"
            type="text"
            placeholder="Nome"
            error={form.formState?.errors?.name?.message?.toString()}
            {...form.register("name", { required: true, minLength: 3, maxLength: 100 })}
          />

          <InfoInput
            icon={Money}
            id="cashe"
            label="Valor do cache (R$)"
            placeholder="200"
            //we dont use float, just integers
            type="number"
            //remove float numbers
            step="1"
            error={form.formState?.errors?.cashe?.message?.toString()}
            {...form.register("cashe", {
              required: true,
              min: 1,
              max: 10000,
              onChange: (e: ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value;
                const removeNonDigits = value.replace(/\D/g, "");
                const removeExtraDigits = removeNonDigits.slice(0, 6);
                form.setValue("cashe", Number(removeExtraDigits));
              }
            })}
          />

          <InfoInput
            icon={Calendar}
            id="date"
            label="Data do evento"
            placeholder="dd/mm/aaaa"
            error={form.formState?.errors?.date?.message?.toString()}
            {...form.register("date", {
              required: true,
              onChange: (e: ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value;
                const removeNonDigits = value.replace(/\D/g, "");
                const masked = removeNonDigits.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
                const removeExtraDigits = masked.slice(0, 10);
                form.setValue("date", removeExtraDigits);
              }
            })}
          />

        </div>

        <div className='flex flex-col w-full py-2'>
          <div className='flex flex-row gap-2'>

            <InfoInput
              icon={MapPin}
              id="cep"
              label="Cep"
              placeholder="00000-000"
              error={form.formState?.errors?.cep?.message?.toString()}
              {...form.register("cep", {
                required: true,
                onChange: (e: ChangeEvent<HTMLInputElement>) => {
                  const value = e.target.value;
                  const removeNonDigits = value.replace(/\D/g, "");
                  const masked = removeNonDigits.replace(/(\d{5})(\d{3})/, "$1-$2");
                  const removeExtraDigits = masked.slice(0, 9);
                  if (removeExtraDigits.length === 9)
                    handleCep(removeExtraDigits.replace('-', ''));
                  form.setValue("cep", removeExtraDigits);
                }
              })}
            />


            <InfoInput
              icon={MapPin}
              id="number"
              label="Número"
              type="number"
              placeholder="123"
              error={form.formState?.errors?.number?.message?.toString()}
              {...form.register("number", {
                required: true,
                min: 1,
                max: 10000,
                onChange: (e: ChangeEvent<HTMLInputElement>) => {
                  const value = e.target.value;
                  const removeNonDigits = value.replace(/\D/g, "");
                  const removeExtraDigits = removeNonDigits.slice(0, 4);
                  form.setValue("number", removeExtraDigits);
                }
              })}
            />
          </div>


          <InfoInput
            icon={MapPin}
            id="street"
            label="Rua/Logradouro"
            disabled
            placeholder="Rua"
            error={form.formState?.errors?.street?.message?.toString()}
            {...form.register("street")}
          />


          <InfoInput
            icon={MapPin}
            id="neighborhood"
            label="Bairro"
            disabled
            placeholder="Bairro"
            error={form.formState?.errors?.neighborhood?.message?.toString()}
            {...form.register("neighborhood")}
          />

          <div className='flex flex-row gap-2'>

            <InfoInput
              icon={MapPin}
              id="city"
              label="Cidade"
              disabled
              placeholder="Cidade"
              error={form.formState?.errors?.city?.message?.toString()}
              {...form.register("city")}
            />

            <InfoInput
              icon={MapPin}
              id="state"
              label="Estado"
              disabled
              placeholder="Estado"
              error={form.formState?.errors?.state?.message?.toString()}
              {...form.register("state")}
            />
          </div>

        </div>

      </div>
      <FormButton />
    </form>
  );
}