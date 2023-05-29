import BuscarCep from "@/components/buscarCep";
import Link from "next/link";

export default function Buscacep() {
  return (
    <main className=" relative flex min-h-screen flex-col items-center p-24 bg-zinc-200 gap-4">
      <h1 className='text-4xl font-semibold'>CEPAPI</h1>
      <h3>Busca Cep com Endereço</h3>
      <p>
        <span>Não lembra seu endereço, </span>
        <Link href="\" className="text-emerald-400 underline">descubra aqui</Link>
      </p>
      <BuscarCep />
    </main>
  )
}
