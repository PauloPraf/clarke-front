export type Fornecedor = {
    id: string;
    nome: string;
    logo: string;
    estadoOrigem: string;
    custoPorKwh: number;
    limiteMinimoKwh: number;
    totalClientes: number;
    avaliacaoMedia: number;
};
