import {DataGrid, DataGridProps} from "@mui/x-data-grid";
import {ptBR} from "@mui/x-data-grid/locales";

export function CustomDataGrid(props: DataGridProps) {
    return (
        <DataGrid
            sx={{bgcolor: "background.paper"}}
            disableColumnFilter
            disableColumnMenu
            {...props}
            disableColumnSelector
            rowHeight={45}
            localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        />
    );
}
