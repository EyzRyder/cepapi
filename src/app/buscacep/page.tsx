import BuscarCep from "@/components/buscarCep";
import Link from "next/link";

export default function Buscacep() {
  return (
    <main className=" relative flex min-h-screen w-full flex-col items-center p-24 bg-zinc-200 gap-4 dark:bg-gradient-to-t dark:from-[#0c5746] dark:to-[#01121a] dark:text-white">
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
