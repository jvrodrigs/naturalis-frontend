export type nomeStatus = 'EM SEPARAÇÃO' | 'ESPERANDO ENTREGADOR' | 'EM ROTA' | 'ENTREGUE' | 'CANCELADO'

export interface Status{
    id?: number;
    nome: nomeStatus;
}