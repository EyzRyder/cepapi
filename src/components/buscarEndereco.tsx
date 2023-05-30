"use client"
// dependencies
import { useQuery } from "react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Axios from 'axios'

// services
import { EnderencoType, InputCep } from "@/app/service/Types";
import { InputCepSchema } from "@/app/service/validation";
// componentes
import { CepCard } from "./cepCard";
import { Loading } from "./loading";

export default function BuscarEndereco() {
  const { data, isFetching, error, refetch } = useQuery<EnderencoType>('endereco',
    async () => {
      const response = await Axios.get(`https://viacep.com.br/ws/${watch().cep}/json/`)
    return response.data});

  const { register, handleSubmit, watch, formState:{errors, isSubmitting} } = useForm<InputCep>({
    defaultValues: {
      cep:"02258010"
    },
    resolver: zodResolver(InputCepSchema)
  });

  const onSubmit: SubmitHandler<InputCep> = async (data) => {
    // console.log(data.cep)
    // console.log(watch().cep)
    await refetch();
  };

  return (
    <main className=" flex flex-col items-center gap-4">
      {isFetching &&
        <Loading/>
      }
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='rounded-2xl flex px-3 py-2 shadow-lg items-center justify-between bg-white'>
        <label htmlFor="cep">
          Cep:
        </label>
        <input
          id="cep"
          disabled={isFetching || isSubmitting}
          {...register('cep')}
          className='bg-transparent border-transparent outline-transparent'
          type="number"
          // value={cep}
          // onChange={(e) => handleOnChange(e, setCep)}
          />
        <button
          type="submit"
          className=" px-2 py-1 rounded-md bg-emerald-500 text-white"
          >
          Buscar
        </button>
      </form>
      {errors.cep?.message && <div
        className=" text-red-600"
      >
        {errors.cep?.message}
      </div>}
      {data && <CepCard data={data} />}
    </main>
  )
}
