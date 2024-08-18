import {useRecoilState, useRecoilValue} from "recoil";
import {useCallback, useEffect} from "react";
import {Fornecedor} from "../types/Fornecedor";
import {listFilterState, listState, listStatusState,} from "../states/atoms";
import axiosErrorToString from "../../../utils/axiosErrorToString";
import fornecedoresApi from "../services/fornecedorApi";

type HookReturn = {
    fornecedores: Fornecedor[];
    fornecedoresTotal: number;
    isLoading: boolean;
    errorMessage?: string;
    listRefresh: () => void;
};

const useFornecedoresList = (): HookReturn => {
    const [list, setList] = useRecoilState<Fornecedor[]>(listState);
    const listFilter = useRecoilValue(listFilterState);
    const [listStatus, setListStatus] = useRecoilState(listStatusState);

    const fetchFornecedores = useCallback(async () => {
        try {
            setListStatus({
                errorMessage: undefined,
                isLoading: true,
            });

            const filteredFornecedores =
                await fornecedoresApi.findWithFilter(listFilter);

            setList(filteredFornecedores);
            console.log(list);
        } catch (e) {
            setListStatus((oldListStatus) => ({
                ...oldListStatus,
                errorMessage: axiosErrorToString(e),
            }));
        } finally {
            setListStatus((oldListStatus) => ({
                ...oldListStatus,
                isLoading: false,
            }));
        }
    }, [listFilter, setList, setListStatus]);

    useEffect(() => {
        fetchFornecedores();
    }, [fetchFornecedores]);

    return {
        fornecedores: list,
        fornecedoresTotal: list.length,
        errorMessage: listStatus.errorMessage,
        isLoading: listStatus.isLoading,
        listRefresh: fetchFornecedores,
    };
};

export default useFornecedoresList;
