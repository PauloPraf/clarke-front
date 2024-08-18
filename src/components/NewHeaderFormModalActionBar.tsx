import React from "react";
import {Stack} from "@mui/material";
import {alpha} from "@mui/material/styles";

type Props = {
    children: React.ReactNode;
};

function NewHeaderFormModalActionBar({children}: Props) {
    return (
        <Stack
            direction="row"
            width="100%"
            alignItems="flex-end"
            justifyContent="flex-end"
            py={3}
            pr={3}
            mt={-3}
            spacing={2}
            zIndex="drawer"
            sx={{
                backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.8),
            }}
        >
            {children}
        </Stack>
    );
}

export default NewHeaderFormModalActionBar;
