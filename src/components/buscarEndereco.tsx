"use client"
import { FormEvent, useState } from "react"
import { useQuery } from "react-query";
import Axios from 'axios'
import { EnderecoType } from "@/types/apiTypes";
import { CepCard } from "./cepCard";
import { Loading } from "./loading";
export default function BuscarEndereco() {
  const [cep, setCep] = useState("00000000");

  const { data, isFetching, error, refetch } = useQuery<EnderecoType>('endereco',
    async () => {
      const response = await Axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    return response.data});

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>, fnc: Function) {
    fnc(e.target.value)
  }
  return (
    <main className=" flex flex-col items-center gap-4">
      {isFetching &&
        <Loading/>
      }
      <form
        onSubmit={async (e: FormEvent) => {
          e.preventDefault();
          await refetch();
        }}
        className='rounded-2xl flex px-3 py-2 shadow-lg items-center justify-between bg-white'>
        <label>Cep: </label>
        <input
          className='bg-transparent border-transparent outline-transparent'
          type="number"
          value={cep}
          onChange={(e) => handleOnChange(e, setCep)}
        />
        <button
          type="submit"
          className=" px-2 py-1 rounded-md bg-emerald-500"
        >
          Buscar
        </button>
      </form>
      {data && <CepCard data={data} />}
    </main>
  )
}
