import {useSetRecoilState} from "recoil";
import {useSnackbar} from "notistack";
import {formUpsertIsLoadingState, listState, modalUpsertIsOpenState,} from "../states/atoms";
import {Fornecedor} from "../types/Fornecedor";
import {FornecedorFormData} from "../types/FornecedorFormData";
import fornecedoresApi from "../services/fornecedorApi";
import axiosErrorToString from "../../../utils/axiosErrorToString";
import useFornecedorItemSelected from "./useFornecedorItemSelected";

type HookReturn = (fornecedorFormData: FornecedorFormData) => void;

const useUpsertFornecedor = (): HookReturn => {
    const {enqueueSnackbar} = useSnackbar();
    const setList = useSetRecoilState<Fornecedor[]>(listState);
    const setFormUpdateIsLoading = useSetRecoilState(formUpsertIsLoadingState);
    const setModalUpsertIsOpenState = useSetRecoilState(modalUpsertIsOpenState);
    const fornecedor = useFornecedorItemSelected();

    return async (fornecedorFormData: FornecedorFormData) => {
        try {
            setFormUpdateIsLoading(true);
            const newFornecedor = fornecedor
                ? await fornecedoresApi.update(fornecedor.id, {
                    ...fornecedorFormData,
                })
                : await fornecedoresApi.create({
                    ...fornecedorFormData,
                });

            setList((oldList) => {
                return fornecedor
                    ? oldList.map((item) => {
                        if (item.id === newFornecedor.id) {
                            return newFornecedor;
                        }
                        return item;
                    })
                    : [...oldList, newFornecedor];
            });

            setModalUpsertIsOpenState(false);
            enqueueSnackbar(
                `Fornecedor ${fornecedor ? "atualizado" : "criado"} com sucesso!`,
                {
                    variant: "success",
                },
            );
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

export default useUpsertFornecedor;
