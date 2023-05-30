"use client"
//dependecies
import Axios from 'axios'
import { useQuery } from "react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//services
import { EnderencoType, InputEnderenco } from "@/app/service/Types";
//components
import { CepCard } from "./cepCard";
import { Loading } from "./loading";
import { InputEnderencoSchema } from '@/app/service/validation';

export default function BuscarCep() {
  const { data: ceps, isFetching, error, refetch } = useQuery<EnderencoType[]>('ceps',
    async () => {
      const response = await Axios.get(`https://viacep.com.br/ws/${watch().uf}/${watch().cidade}/${watch().enderenco}/json/`)
      return response.data
    });

  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<InputEnderenco>({
    defaultValues: {
      uf: "SP",
      cidade: "São Paulo",
      enderenco: "Rua Bassi"
    },
    resolver: zodResolver(InputEnderencoSchema)
  });
  const onSubmit: SubmitHandler<InputEnderenco> = async (data) => {
    // console.log(data)
    // console.log(watch())
    await refetch();
  };
  return (
    <main className=" flex flex-col items-center gap-4 ">
      {
        isFetching && <Loading/>
      }
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='rounded-2xl px-3 py-2 flex flex-col gap-4'
      >
        <span className="rounded-2xl px-3 py-2 shadow-lg bg-white">
          <label htmlFor="uf">Estado: </label>
          <input
            id='uf'
            {...register("uf")}
            className='bg-transparent border-transparent outline-transparent'
            type="text"
            />
        </span>
        {errors.uf?.message && <div
          className=" text-red-600"
        >
          {errors.uf?.message}
        </div>}
        <span className="rounded-2xl px-3 py-2 shadow-lg bg-white">
          <label htmlFor="cidade">Cidade: </label>

          <input
          id="cidade"
            {...register("cidade")}
            className='bg-transparent border-transparent outline-transparent'
            type="text"
          />
        </span>
        <span className="rounded-2xl px-3 py-2 shadow-lg bg-white">
          <label htmlFor="enderenco">Enderenço: </label>

          <input
            id="enderenco"
            {...register("enderenco")}
            className='bg-transparent border-transparent outline-transparent'
            type="text"
          />
        </span>
        <button type="submit" className="px-2 py-1 rounded-md bg-emerald-500 text-white">
          Buscar
        </button>
      </form>
      {ceps && ceps.map(data => (<CepCard key={data.cep} data={data} />))}
    </main>
  )
}
