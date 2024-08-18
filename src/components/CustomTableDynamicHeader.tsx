import {ReactNode} from "react";
import {Box} from "@mui/material";

type Props = {
    children: ReactNode;
};

export function CustomTableDynamicHeader({children}: Props) {
    return (
        <Box
            sx={{
                py: 2,
                px: 3,
                border: "1px solid #e0e0e0",
                borderRadius: 1,
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0,
                mb: "-0.6rem",
                zIndex: 1,
                backgroundColor: "background.paper",
            }}
        >
            {children}
        </Box>
    );
}
