import React from "react";
import {CircularProgress, Stack, Typography} from "@mui/material";

function TableStatusLoading() {
    return (
        <Stack
            direction="column"
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
            spacing={2}
        >
            <CircularProgress color="error"/>
            <Typography fontWeight="500" variant="h6">
                Carregando...
            </Typography>
        </Stack>
    );
}

export default TableStatusLoading;
