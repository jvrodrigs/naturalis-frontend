export interface Clients {
  id?: number;
  nome: string;
  telefone: string;
  endereco: Endereco;
  ativo: boolean;
}

export interface Endereco {
  logradouro: string;
  numero: string;
  bairro: string;
  complemento?: string | null;
  cep: string;
  cidade: string;
  estado: string;
}
