import {ReactNode} from "react";
import {SnackbarProvider, useSnackbar} from "notistack";
import {IconButton, styled} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

const StyledSnackbarProvider = styled(SnackbarProvider)`
    &.SnackbarItem-variantSuccess {
        background-color: ${({theme}) => theme.palette.success.main};
    }

    &.SnackbarItem-variantError {
        background-color: ${({theme}) => theme.palette.error.main};
    }

    &.SnackbarItem-variantWarning {
        background-color: ${({theme}) => theme.palette.warning.main};
    }

    &.SnackbarItem-variantInfo {
        background-color: ${({theme}) => theme.palette.info.main};
    }
`;

function SnackbarCloseButton() {
    const {closeSnackbar} = useSnackbar();

    return (
        <IconButton onClick={() => closeSnackbar()} sx={{color: "#fff"}}>
            <CloseIcon/>
        </IconButton>
    );
}

type Props = {
    children: ReactNode;
};

export function NotistackSnackbarProvider({children}: Props) {
    return (
        <StyledSnackbarProvider action={() => <SnackbarCloseButton/>}>
            {children}
        </StyledSnackbarProvider>
    );
}
