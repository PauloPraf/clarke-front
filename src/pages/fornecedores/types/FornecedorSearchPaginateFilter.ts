import {PaginateFilter} from "../../../types/PaginateFilter";

export type FornecedorSearchPaginateFilter = Required<PaginateFilter> & {
    search?: string;
    minValue?: number;
};
