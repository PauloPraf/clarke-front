import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useMemo} from "react";
import {useForm} from "react-hook-form";
import {useRecoilValue} from "recoil";
import {Box, Button, Stack} from "@mui/material";
import {FornecedorFormData} from "../../types/FornecedorFormData";
import {formUpsertIsLoadingState, itemSelectedState,} from "../../states/atoms";
import {Fornecedor} from "../../types/Fornecedor";
import {TextFieldRHF} from "../../../../components/TextFieldRHF";
import NumberFieldRHF from "../../../../components/NumberFieldRHF";
import useUpsertFornecedor from "../../hooks/useUpsertFornecedor";

function getFormDefaultValues(
    fornecedor: Fornecedor | undefined,
): FornecedorFormData {
    return {
        nome: fornecedor?.nome ?? "",
        logo: fornecedor?.logo ?? "",
        estadoOrigem: fornecedor?.estadoOrigem ?? "",
        custoPorKwh: fornecedor?.custoPorKwh ?? 0,
        limiteMinimoKwh: fornecedor?.limiteMinimoKwh ?? 0,
        totalClientes: fornecedor?.totalClientes ?? 0,
        avaliacaoMedia: fornecedor?.avaliacaoMedia ?? 0,
    };
}

function getFormValidationSchema(): Yup.AnyObjectSchema {
    return Yup.object({
        nome: Yup.string().required("Nome é obrigatório"),
        logo: Yup.string().required("Logo é obrigatório"),
        estadoOrigem: Yup.string().required("Estado de origem é obrigatório"),
        custoPorKwh: Yup.number().required("Custo por kWh é obrigatório"),
        limiteMinimoKwh: Yup.number().required(
            "Limite mínimo de kWh é obrigatório",
        ),
        totalClientes: Yup.number().required("Total de clientes é obrigatório"),
        avaliacaoMedia: Yup.number().required("Avaliação média é obrigatória"),
    });
}

export function UpsertFornecedorForm() {
    const fornecedor = useRecoilValue(itemSelectedState);
    const formCreateIsLoading = useRecoilValue(formUpsertIsLoadingState);
    const createFonecedor = useUpsertFornecedor();

    const defaultValues = useMemo<FornecedorFormData>(
        () => getFormDefaultValues(fornecedor),
        [],
    );

    const validationSchema = useMemo(() => getFormValidationSchema(), []);

    const {control, handleSubmit} = useForm<FornecedorFormData>({
        defaultValues,
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (upsertFornecedorFormData: FornecedorFormData) => {
        createFonecedor(upsertFornecedorFormData);
    };

    return (
        <Stack
            component="form"
            direction="column"
            width="100%"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            autoComplete="off"
            sx={{display: "flex", justifyContent: "space-between", height: "100%"}}
        >
            <Box sx={{display: "flex", flexDirection: "column", px: 3}}>
                <TextFieldRHF
                    name="nome"
                    label="Nome"
                    control={control}
                    margin="dense"
                    required
                    disabled={formCreateIsLoading}
                />
                <TextFieldRHF
                    name="logo"
                    label="Logo"
                    control={control}
                    margin="dense"
                    required
                    disabled={formCreateIsLoading}
                />
                <TextFieldRHF
                    name="estadoOrigem"
                    label="Estado de Origem"
                    control={control}
                    margin="dense"
                    required
                    disabled={formCreateIsLoading}
                />
                <NumberFieldRHF
                    name="custoPorKwh"
                    label="Custo por kWh"
                    control={control}
                    margin="dense"
                    required
                    disabled={formCreateIsLoading}
                />
                <NumberFieldRHF
                    name="limiteMinimoKwh"
                    label="Limite mínimo de kWh"
                    control={control}
                    margin="dense"
                    required
                    disabled={formCreateIsLoading}
                />
                <NumberFieldRHF
                    name="totalClientes"
                    label="Total de Clientes"
                    control={control}
                    margin="dense"
                    required
                    disabled={formCreateIsLoading}
                />
                <NumberFieldRHF
                    name="avaliacaoMedia"
                    label="Avaliação Média"
                    control={control}
                    margin="dense"
                    required
                    disabled={formCreateIsLoading}
                />
            </Box>
            <Box sx={{width: "100%", px: 3, pb: 3}}>
                <Button
                    variant="contained"
                    type="submit"
                    color="success"
                    size="large"
                    disabled={formCreateIsLoading}
                    sx={{width: "100%"}}
                >
                    Salvar
                </Button>
            </Box>
        </Stack>
    );
}
