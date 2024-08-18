import {Box} from "@mui/material";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {itemSelectedState, listFilterState, modalUpsertIsOpenState,} from "../../states/atoms";
import useFornecedorListFilter from "../../hooks/useFornecedorListFilter";
import ButtonAdd from "../../../../components/ButtonAdd";
import {ControlledSearchbar} from "../../../../components/ControlledSearchbar";
import {CustomTableDynamicHeader} from "../../../../components/CustomTableDynamicHeader";

export function FornecedorTableHeader() {
    const {onSearch} = useFornecedorListFilter();
    const listFilter = useRecoilValue(listFilterState);
    const setModalCreateIsOpen = useSetRecoilState(modalUpsertIsOpenState);
    const setItemSelected = useSetRecoilState(itemSelectedState);

    const handleClickAdd = () => {
        setItemSelected(undefined);
        setModalCreateIsOpen(true);
    };

    const handleSearch = (search?: string) => {
        onSearch(search);
    };

    return (
        <CustomTableDynamicHeader>
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Box sx={{display: "flex", gap: 2}}>
                    <ControlledSearchbar
                        placeholder="Procurar por nome ou estado do fornecedor"
                        initialValue={listFilter.search}
                        onSearch={handleSearch}
                        disabled={false}
                        width="400px"
                    />
                </Box>
                <ButtonAdd onClick={handleClickAdd}>Registrar Fornecedor</ButtonAdd>
            </Box>
        </CustomTableDynamicHeader>
    );
}
