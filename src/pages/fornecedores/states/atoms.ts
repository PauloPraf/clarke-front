import {atom} from "recoil";
import {Fornecedor} from "../types/Fornecedor";
import {FornecedorSearchPaginateFilter} from "../types/FornecedorSearchPaginateFilter";

export const listState = atom<Fornecedor[]>({
    key: "fornecedores/listState",
    default: [],
});

export const listStatusState = atom<{
    isLoading: boolean;
    errorMessage?: string;
}>({
    key: "fornecedores/listStatusState",
    default: {
        isLoading: false,
        errorMessage: undefined,
    },
});

export const listFilterState = atom<FornecedorSearchPaginateFilter>({
    key: "fornecedores/listFilterState",
    default: {
        skip: 0,
        take: 100,
        search: undefined,
        minValue: 0,
    },
});

export const itemSelectedState = atom<Fornecedor | undefined>({
    key: "fornecedores/itemSelectedState",
    default: undefined,
});

export const formUpsertIsLoadingState = atom({
    key: "fornecedores/formUpsertIsLoadingState",
    default: false,
});

export const modalUpsertIsOpenState = atom({
    key: "fornecedores/modalUpsertIsOpenState",
    default: false,
});
