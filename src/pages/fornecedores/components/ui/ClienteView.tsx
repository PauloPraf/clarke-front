import ScreenContent from "../../../../components/ScreenContent";
import FornecedorTable from "../list/FornecedorTable";
import {HomepageFornecedorTableHeader} from "../list/HomepageFornecedorTableHeader";


function ClienteView() {
    return (
        <>
            <ScreenContent>
                <HomepageFornecedorTableHeader/>
                <FornecedorTable hideActions={true}/>
            </ScreenContent>
        </>
    );
}

export default ClienteView;
