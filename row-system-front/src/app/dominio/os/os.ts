import { Colecao } from "../colecao/colecao";

export class Os{
  id: number;
  tpmodelo: string;
  nomemodelo: string;
  matrizref: string;
  enfesto: string;
  dataInicial: Date;
  dataFinal: Date;
  status: string;
  tecido: string;
  laguratecido: string;
  composicaotecido: string;
  colecao: Colecao;
}

export enum StatusEnum {
  ANDAMENTO,
  FINALIZADO
}
export enum EnfestoEnum {
  UNICO,
  DUPLO
}