import {useRecoilState, useRecoilValue} from "recoil";
import {formUpsertIsLoadingState, modalUpsertIsOpenState,} from "../../states/atoms";
import {UpsertFornecedorForm} from "../form/UpsertFornecedorForm";
import {NewHeaderModal} from "../../../../components/NewHeaderModal";
import ScreenContent from "../../../../components/ScreenContent";
import AsyncFormContainer from "../../../../components/AsyncFormContainer";
import FornecedorTable from "../list/FornecedorTable";
import {FornecedorTableHeader} from "../list/FornecedorTableHeader";

function FornecedorView() {
    const [modalCreateIsOpen, setModalCreateIsOpen] = useRecoilState(
        modalUpsertIsOpenState,
    );

    const formCreateIsLoading = useRecoilValue(formUpsertIsLoadingState);

    const handleCloseFormModal = () => {
        setModalCreateIsOpen(false);
    };

    return (
        <>
            <ScreenContent>
                <FornecedorTableHeader/>
                <FornecedorTable/>
            </ScreenContent>
            <NewHeaderModal
                isOpen={modalCreateIsOpen}
                onClose={handleCloseFormModal}
                isLoading={formCreateIsLoading}
                sectionLabel="REGISTRAR FORNECEDOR"
            >
                <AsyncFormContainer>
                    <UpsertFornecedorForm/>
                </AsyncFormContainer>
            </NewHeaderModal>
        </>
    );
}

export default FornecedorView;
