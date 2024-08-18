import {useSetRecoilState} from "recoil";
import {useSnackbar} from "notistack";
import {Fornecedor} from "../types/Fornecedor";
import {listState, listStatusState} from "../states/atoms";
import fornecedoresApi from "../services/fornecedorApi";
import axiosErrorToString from "../../../utils/axiosErrorToString";

type HookReturn = (fornecedor: Fornecedor) => void;

const useRemoveFornecedor = (): HookReturn => {
    const {enqueueSnackbar} = useSnackbar();
    const setList = useSetRecoilState<Fornecedor[]>(listState);
    const setListStatus = useSetRecoilState(listStatusState);

    return async (fornecedor: Fornecedor) => {
        try {
            setListStatus((oldListStatus) => ({
                ...oldListStatus,
                isLoading: true,
            }));

            await fornecedoresApi.remove(fornecedor.id);

            setList((oldList) => {
                return oldList.filter((item) => item.id !== fornecedor.id);
            });

            enqueueSnackbar("Fornecedor excluido com sucesso!", {
                variant: "success",
            });
        } catch (e) {
            enqueueSnackbar(axiosErrorToString(e, "Erro desconhecido"), {
                variant: "error",
            });
        } finally {
            setListStatus((oldListStatus) => ({
                ...oldListStatus,
                isLoading: false,
            }));
        }
    };
};

export default useRemoveFornecedor;
