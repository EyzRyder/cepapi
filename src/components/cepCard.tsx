import { EnderencoType } from "@/app/service/Types"

interface Props {
  data: EnderencoType,
}
export const CepCard = ({ data }: Props) => {
  return (
    <article
      className="
      min-h-[200px] w-fit
      bg-white px-3 py-2 rounded-md shadow inline-block
      transition-all snap-center
      hover:scale-95 hover:shadow-emerald-300
      dark:shadow-white dark:shadow-sm dark:bg-[#01121a]">
      <h2 className="text-2xl">
        <span>Cep: </span>
        <span>{data.cep}</span>
      </h2>
      <p>
        <span>Estado: </span>
        <span>{data.uf}</span>
      </p>
      <p>
        <span>Cidade: </span>
        <span>{data.localidade}</span>
      </p>
      <p>
        <span>Bairro: </span>
        <span>{data.bairro}</span>
      </p>
      <p>
        <span>Endereço: </span>
        <span>{data.logradouro}</span>
      </p>
      <p>
        <span>Complemento: </span>
        <span>{data.complemento}</span>
      </p>
      <p>
        <span>DDD: </span>
        <span>{data.ddd}</span>
      </p>
      {/* <p>
          <span>GIA: </span>
          <span>{data.gia}</span>
        </p>
        <p>
          <span>IBGE: </span>
          <span>{data.ibge}</span>
        </p> */}
      {/* <p>
          <span>siafi: </span>
          <span>{data.siafi}</span>
        </p> */}
    </article>

  )
}
