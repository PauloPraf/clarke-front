import {useCallback, useMemo} from "react";
import {useConfirm} from "material-ui-confirm";
import {useSetRecoilState} from "recoil";
import {GridColDef, GridRowParams} from "@mui/x-data-grid";
import {Box, IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useFornecedoresList from "../../hooks/useFornecedoresList";
import useRemoveFornecedor from "../../hooks/useRemoveFornecedor";
import {itemSelectedState, modalUpsertIsOpenState} from "../../states/atoms";
import {Fornecedor} from "../../types/Fornecedor";
import FlexLayer from "../../../../components/FlexLayer";
import TableStatus from "../../../../components/TableStatus/TableStatus";
import {CustomDataGrid} from "../../../../components/CustomDataGrid";

type FornecedorTableProps = {
    hideActions?: boolean;
};

function FornecedorTable({hideActions = false}: FornecedorTableProps) {
    const {fornecedores, isLoading, errorMessage, listRefresh} =
        useFornecedoresList();

    const removeFornecedor = useRemoveFornecedor();
    const setModalIsOpen = useSetRecoilState(modalUpsertIsOpenState);
    const setItemSelected = useSetRecoilState(itemSelectedState);
    const confirm = useConfirm();

    const handleRemove = useCallback(
        async (fornecedor: Fornecedor) => {
            try {
                await confirm({
                    title: "Confirmação de exclusão",
                    content: `Deseja excluir o fornecedor ${fornecedor.nome}?`,
                    confirmationText: "Deletar",
                    confirmationButtonProps: {
                        color: "error",
                        variant: "contained",
                        sx: {
                            mb: 2,
                            mr: 2,
                        },
                    },
                    cancellationText: "Cancelar",
                    cancellationButtonProps: {
                        variant: "outlined",
                        sx: {
                            mb: 2,
                            mr: 1,
                        },
                    },
                });
                removeFornecedor(fornecedor);
                listRefresh();
            } catch (e) {
                console.error(e);
            }
        },
        [confirm, removeFornecedor, listRefresh],
    );

    const handleEdit = useCallback(
        (fornecedor: Fornecedor) => {
            setItemSelected(fornecedor);
            setModalIsOpen(true);
        },
        [setItemSelected, setModalIsOpen],
    );

    const columns = useMemo<GridColDef[]>(
        () => [
            {
                field: "logo",
                headerName: "",
                width: 50,
                renderCell: ({row}) => {
                    const imageUrl = row.logo;

                    return (
                        <>
                            {row.logo && (
                                <img
                                    crossOrigin="anonymous"
                                    src={imageUrl}
                                    alt={row.nome}
                                    style={{
                                        width: 30,
                                        aspectRatio: "1/1",
                                        objectFit: "contain",
                                    }}
                                />
                            )}
                        </>
                    );
                },
            },
            {
                field: "nome",
                headerName: "Nome",
                flex: 1,
                minWidth: 160,
            },
            {
                field: "estadoOrigem",
                headerName: "Estado",
                flex: 1,
                minWidth: 160,
            },
            {
                field: "custoPorKwh",
                headerName: "Custo por Kwh",
                flex: 1,
                minWidth: 160,
                renderCell: ({row}) => {
                    return `R$ ${row.custoPorKwh}`;
                },
            },
            {
                field: "limiteMinimoKwh",
                headerName: "Limite Minimo Kwh",
                flex: 1,
                minWidth: 160,
            },
            {
                field: "totalClientes",
                headerName: "Total Clientes",
                flex: 1,
                minWidth: 160,
            },
            {
                field: "avaliacaoMedia",
                headerName: "Avaliação Média",
                flex: 1,
                minWidth: 160,
            },
            {
                field: "actions",
                type: "actions",
                headerAlign: "center",
                align: "center",
                minWidth: 120,
                getActions: ({row}: GridRowParams<Fornecedor>) => [
                    <IconButton onClick={() => handleEdit(row)} size="small">
                        <EditIcon sx={{color: "primary.main"}}/>
                    </IconButton>,
                    <IconButton onClick={() => handleRemove(row)} size="small">
                        <DeleteIcon sx={{color: "error.main"}}/>
                    </IconButton>,
                ],
            },
        ],
        [handleRemove, handleEdit],
    );

    return (
        <>
            <TableStatus
                isLoading={isLoading}
                error={errorMessage}
                onTryAgain={listRefresh}
            >
                <FlexLayer>
                    <CustomDataGrid
                        sx={{
                            borderTop: "none",
                            mt: "0.45rem",
                            bgcolor: "background.paper",
                        }}
                        autoHeight
                        columns={hideActions ? columns.slice(0, -1) : columns}
                        rows={fornecedores}
                    />
                    <Box pb={2}/>
                </FlexLayer>
            </TableStatus>
        </>
    );
}

export default FornecedorTable;
