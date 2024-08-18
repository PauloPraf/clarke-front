import {Fornecedor} from "../types/Fornecedor";
import httpClient from "../../../lib/httpClient";
import {SearchPaginateFilter} from "../../../types/SearchPaginateFilter";
import {FornecedorFormData} from "../types/FornecedorFormData";

async function findOne(id: string): Promise<Fornecedor> {
    const client = httpClient();

    const response = await client.get<Fornecedor>(`/fornecedores/${id}`);

    return response.data;
}

async function findWithFilter(
    filter: SearchPaginateFilter,
): Promise<Fornecedor[]> {
    const client = httpClient();

    const response = await client.get<Fornecedor[]>("/fornecedores/filter", {
        params: filter,
    });

    return response.data;
}

async function create(
    createFornecedorFormData: FornecedorFormData,
): Promise<Fornecedor> {
    const client = httpClient();

    const response = await client.post<Fornecedor>(
        "/fornecedores",
        createFornecedorFormData,
    );

    return response.data;
}

async function update(
    id: string,
    updateFornecedorFormData: FornecedorFormData,
): Promise<Fornecedor> {
    const client = httpClient();

    const response = await client.patch<Fornecedor>(
        `/fornecedores/${id}`,
        updateFornecedorFormData,
    );

    return response.data;
}

async function remove(id: string): Promise<void> {
    const client = httpClient();

    await client.delete<void>(`/fornecedores/${id}`);
}

const fornecedoresApi = {
    findOne,
    findWithFilter,
    create,
    update,
    remove,
};

export default fornecedoresApi;
