import {Box, Typography} from "@mui/material";
import useFornecedorListFilter from "../../hooks/useFornecedorListFilter";
import {CustomTableDynamicHeader} from "../../../../components/CustomTableDynamicHeader";
import {ControlledNumberInput} from "../../../../components/ControlledMinValuebar";

export function HomepageFornecedorTableHeader() {
    const {setMinValue} = useFornecedorListFilter();

    const handleSearch = (search?: number) => {
        setMinValue(search);
    };

    return (
        <CustomTableDynamicHeader>
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Box sx={{display: "flex", gap: 2, alignItems: "center"}}>
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: "bold",
                            fontSize: "1.10rem",
                        }}
                    >
                        Informe o seu consumo mensal de energia
                    </Typography>
                    <ControlledNumberInput
                        placeholder="Procurar por consumo"
                        initialValue={0}
                        onChange={handleSearch}
                        disabled={false}
                        width="400px"
                    />
                </Box>
            </Box>
        </CustomTableDynamicHeader>
    );
}
