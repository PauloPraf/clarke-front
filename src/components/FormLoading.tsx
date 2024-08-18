import React from "react";
import {CircularProgress, Stack} from "@mui/material";

function FormLoading() {
    return (
        <Stack
            direction="column"
            width="100%"
            alignItems="center"
            justifyContent="center"
            p={3}
        >
            <CircularProgress sx={{my: 16}}/>
        </Stack>
    );
}

export default FormLoading;
