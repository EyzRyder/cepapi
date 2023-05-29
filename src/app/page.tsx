import BuscarEndereco from "@/components/buscarEndereco";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" relative flex min-h-screen flex-col items-center p-24 bg-zinc-200 gap-4">
      <h1 className='text-4xl font-semibold'>CEPAPI</h1>
      <h3>Busca endereço com Cep</h3>
      <p>
        <span>Não lembra seu cep, </span>
        <Link href="\buscacep" className="text-emerald-400 underline">descubra aqui</Link>
      </p>
      <BuscarEndereco />
    </main>
  )
}
