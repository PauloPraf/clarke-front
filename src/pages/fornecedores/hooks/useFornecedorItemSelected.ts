import {useRecoilValue} from "recoil";
import {Fornecedor} from "../types/Fornecedor";
import {itemSelectedState} from "../states/atoms";

const useFornecedorItemSelected = (): Fornecedor | undefined => {
    return useRecoilValue(itemSelectedState);
};

export default useFornecedorItemSelected;
