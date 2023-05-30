export interface EnderencoType {
  bairro: string,
  cep: string,
  complemento: string,
  ddd: string,
  gia: string,
  ibge: string,
  localidade: string,
  logradouro: string,
  siafi: string,
  uf: string
}
export type InputCep = {
  cep: string
}
export type InputEnderenco = {
  uf: string
  cidade: string
  enderenco: string
}