import { Substancias } from "./substancias.model";

export interface Product{
    id?: number;
    codigoReferencia: string;
    nome: string;
    descricao: string;
    fabricante: string;
    substancias: Array<Substancias>;
}