import {Box, Button, Stack, Typography} from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import RefreshIcon from "@mui/icons-material/Refresh";

type Props = {
    onTryAgain?: () => void;
    tryAgainLabel?: string;
    error?: string;
};

function TableStatusError({
                              error,
                              onTryAgain = () => null,
                              tryAgainLabel = "Tentar Novamente",
                          }: Props) {
    const unauthorizedError = error === "Unauthorized";

    return (
        <Stack
            direction="column"
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            sx={{border: "1px solid", borderColor: "grey.300"}}
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
                {unauthorizedError
                    ? "Você não possui permissão para acessar esta seção"
                    : error}
            </Typography>
            <Button
                variant="outlined"
                color="success"
                size="small"
                onClick={onTryAgain}
                startIcon={<RefreshIcon/>}
            >
                {tryAgainLabel}
            </Button>
        </Stack>
    );
}

export default TableStatusError;
