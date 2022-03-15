export interface Substancias{
    id?: number;
    descricao: string;
    potencia: string;
    nfe?: string;
    laboratorio: string;
    loteOrigem: string;
    loteInterno?: string;
    dataFabricacao: Date;
    dataValidade: Date;
}