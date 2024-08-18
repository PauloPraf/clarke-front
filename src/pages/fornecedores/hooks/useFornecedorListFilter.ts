import {useRecoilState} from "recoil";
import {listFilterState} from "../states/atoms";
import {FornecedorSearchPaginateFilter} from "../types/FornecedorSearchPaginateFilter";

type HookReturn = {
    page: number;
    pageSize: number;
    setPage: (page: number) => void;
    setPageSize: (pageSize: number) => void;
    onSearch: (search?: string) => void;
    setMinValue: (value?: number) => void;
};

const useFornecedorListFilter = (): HookReturn => {
    const [listFilter, setListFilter] =
        useRecoilState<FornecedorSearchPaginateFilter>(listFilterState);

    const setPage = (newPage: number) => {
        setListFilter((oldFilter) => ({
            ...oldFilter,
            skip: newPage * oldFilter.take,
        }));
    };

    const setPageSize = (newPageSize: number) => {
        setListFilter((oldFilter) => ({
            ...oldFilter,
            take: newPageSize,
        }));
    };

    const onSearch = (search?: string) => {
        setListFilter((oldFilter) => ({
            ...oldFilter,
            skip: 0,
            search,
        }));
    };

    const setMinValue = (value?: number) => {
        setListFilter((oldFilter) => ({
            ...oldFilter,
            minValue: value,
        }));
    };

    const pageSize = listFilter.take;
    const page = Math.floor(listFilter.skip / pageSize);

    return {
        onSearch,
        setPageSize,
        setMinValue,
        setPage,
        page,
        pageSize,
    };
};

export default useFornecedorListFilter;
