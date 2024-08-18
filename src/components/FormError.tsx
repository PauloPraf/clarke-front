import React from "react";
import {Box, Stack, Typography} from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";

type Props = {
    error: string;
};

function FormError({error}: Props) {
    return (
        <Stack
            direction="column"
            width="100%"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            py={3}
        >
            <Box
                width={80}
                height={80}
                bgcolor="grey.200"
                borderRadius="100%"
                sx={{display: "flex", alignItems: "center", justifyContent: "center"}}
            >
                <WarningIcon color="warning" fontSize="large"/>
            </Box>
            <Typography fontWeight="500" variant="h6">
                Ocorreu um erro!
            </Typography>
            <Typography variant="body1" pb={2}>
                {error}
            </Typography>
        </Stack>
    );
}

export default FormError;
