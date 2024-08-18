import {PaginateFilter} from "./PaginateFilter";

export type SearchPaginateFilter = Required<PaginateFilter> & {
    search?: string;
};
