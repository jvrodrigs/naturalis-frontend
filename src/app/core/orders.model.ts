import { Clients } from "./clients.model";
import { Product } from "./product.model";
import { Status } from "./status.model";

export interface Orders{
    id?: number;
    client: Clients;
    produto: Product;
    idAutor: String;
    nomeAutor: string;
    status: Status;
    idResp: string;
    nomeResp: string;
    descricao: string;
    total: string;
    dataCriacao: Date;
}

export interface RequestOrders {
    content: Orders[],
    pageable: Record<string, unknown>,
    totalItems: number;
    currentPage: number;
    totalPages: number;
}
