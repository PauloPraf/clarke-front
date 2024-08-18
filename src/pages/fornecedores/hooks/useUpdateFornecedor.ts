import {useSetRecoilState} from "recoil";
import {useSnackbar} from "notistack";
import {formUpsertIsLoadingState, listState, modalUpsertIsOpenState,} from "../states/atoms";
import {Fornecedor} from "../types/Fornecedor";
import {FornecedorFormData} from "../types/FornecedorFormData";
import fornecedoresApi from "../services/fornecedorApi";
import axiosErrorToString from "../../../utils/axiosErrorToString";
import useFornecedorItemSelected from "./useFornecedorItemSelected";

type HookReturn = (fornecedorFormData: FornecedorFormData) => void;

const useCreateAssembleia = (): HookReturn => {
    const {enqueueSnackbar} = useSnackbar();
    const setList = useSetRecoilState<Fornecedor[]>(listState);
    const setFormUpdateIsLoading = useSetRecoilState(formUpsertIsLoadingState);
    const setModalUpsertIsOpenState = useSetRecoilState(modalUpsertIsOpenState);
    const fornecedor = useFornecedorItemSelected();

    return async (fornecedorFormData: FornecedorFormData) => {
        try {
            setFormUpdateIsLoading(true);
            const updatedFornecedor = await fornecedoresApi.update(
                fornecedor?.id ?? "",
                {
                    ...fornecedorFormData,
                },
            );

            setList((oldList) => {
                return oldList.map((item) => {
                    if (item.id === updatedFornecedor.id) {
                        return updatedFornecedor;
                    }

                    return item;
                });
            });

            setModalUpsertIsOpenState(false);
            enqueueSnackbar("Fornecedor atualizado com sucesso!", {
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
            setFormUpdateIsLoading(false);
        }
    };
};

export default useCreateAssembleia;
