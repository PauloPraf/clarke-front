import {ReactNode} from "react";
import {Box} from "@mui/material";

type Props = {
    children: ReactNode;
};

export function CustomTableStaticHeader({children}: Props) {
    return (
        <Box
            sx={{
                py: 2,
                px: 3,
                display: "flex",
                justifyContent: "center",
                border: "none",
                bgcolor: "background.paper",
                zIndex: 1,
            }}
        >
            {children}
        </Box>
    );
}
