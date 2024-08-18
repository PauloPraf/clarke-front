import {useSetRecoilState} from "recoil";
import {useSnackbar} from "notistack";
import {formUpsertIsLoadingState, listState, modalUpsertIsOpenState,} from "../states/atoms";
import {Fornecedor} from "../types/Fornecedor";
import {FornecedorFormData} from "../types/FornecedorFormData";
import fornecedoresApi from "../services/fornecedorApi";
import axiosErrorToString from "../../../utils/axiosErrorToString";

type HookReturn = (fornecedorFormData: FornecedorFormData) => void;

const useCreateFornecedor = (): HookReturn => {
    const {enqueueSnackbar} = useSnackbar();
    const setList = useSetRecoilState<Fornecedor[]>(listState);
    const setFormCreateIsLoading = useSetRecoilState(formUpsertIsLoadingState);
    const setModalCreateIsOpen = useSetRecoilState(modalUpsertIsOpenState);

    return async (fornecedorFormData: FornecedorFormData) => {
        try {
            setFormCreateIsLoading(true);
            const newFornecedor = await fornecedoresApi.create({
                ...fornecedorFormData,
            });

            setList((oldList) => {
                return [...oldList, newFornecedor];
            });

            setModalCreateIsOpen(false);
            enqueueSnackbar("Fornecedor criado com sucesso!", {
                variant: "success",
            });
        } catch (e) {
            enqueueSnackbar(
                axiosErrorToString(e, "Erro ao processar sua requisição"),
                {
                    variant: "error",
                },
            );
        } finally {
            setFormCreateIsLoading(false);
        }
    };
};

export default useCreateFornecedor;
