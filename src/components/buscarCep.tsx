"use client"
import { FormEvent, useState } from "react"
import { useQuery } from "react-query";
import Axios from 'axios'
import { EnderecoType } from "@/types/apiTypes";
import { CepCard } from "./cepCard";
import { Loading } from "./loading";
export default function BuscarCep() {
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [rua, setRua] = useState("");

  const { data: ceps, isFetching, error, refetch } = useQuery<EnderecoType[]>('cep',
    async () => {
      const response = await Axios.get(`https://viacep.com.br/ws/${estado}/${cidade}/${rua}/json/`)
      return response.data
    });

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>, fnc: Function) {
    fnc(e.target.value)
  }
  return (
    <main className=" flex flex-col items-center gap-4 ">
      {
        isFetching && <Loading/>
      }
      <form
        onSubmit={async (e: FormEvent) => {
        e.preventDefault();
        await refetch();
      }}
        className='rounded-2xl px-3 py-2 flex flex-col gap-4'
      >
        <span className="rounded-2xl px-3 py-2 shadow-lg bg-white">
          <label>Estado: </label>
          <input
            className='bg-transparent border-transparent outline-transparent'
            type="text"
            value={estado}
            onChange={(e) => handleOnChange(e, setEstado)}
          />
        </span>
        <span className="rounded-2xl px-3 py-2 shadow-lg bg-white">
          <label>Cidade: </label>

          <input
            className='bg-transparent border-transparent outline-transparent'
            type="text"
            value={cidade}
            onChange={(e) => handleOnChange(e, setCidade)}
          />
        </span>
        <span className="rounded-2xl px-3 py-2 shadow-lg bg-white">
          <label>Rua: </label>

          <input
            className='bg-transparent border-transparent outline-transparent'
            type="text"
            value={rua}
            onChange={(e) => handleOnChange(e, setRua)}
          />
        </span>
        <button type="submit" className="px-2 py-1 rounded-md bg-emerald-500">
          Buscar
        </button>
      </form>
      {ceps && ceps.map(data => (<CepCard key={data.cep} data={data} />))}
    </main>
  )
}
