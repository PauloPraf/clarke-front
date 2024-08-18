import {ReactNode} from "react";
import {Box, Drawer, IconButton, LinearProgress, Typography,} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FlexLayer from "./FlexLayer";

type GenericModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    sectionLabel?: string;
    isLoading?: boolean;
    modalWidth?: string;
    handleGoToLog?: () => void;
};

export function NewHeaderModal({
                                   isOpen,
                                   onClose,
                                   children,
                                   isLoading,
                                   modalWidth,
                                   sectionLabel,
                               }: GenericModalProps) {
    const handleClose = () => {
        if (!isLoading) onClose();
    };

    return (
        <Drawer
            sx={{
                display: "flex",
                flexDirection: "column",
            }}
            anchor="right"
            open={isOpen}
            onClose={handleClose}
            PaperProps={{sx: {width: modalWidth ?? "600px"}}}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    py: 1.5,
                    backgroundColor: "primary.main",
                }}
            >
                <Typography
                    sx={{
                        textAlign: "center",
                        fontWeight: 700,
                        fontSize: 18,
                        color: "#fff",
                    }}
                >
                    {sectionLabel}
                </Typography>
                <IconButton
                    sx={{
                        position: "absolute",
                        zIndex: "modal",
                        left: 8,
                        top: 5,
                    }}
                    onClick={handleClose}
                >
                    <CloseIcon sx={{color: "#fff"}}/>
                </IconButton>
            </Box>
            {isLoading && <LinearProgress/>}
            <FlexLayer sx={{overflowY: "auto", pt: 3}}>{children}</FlexLayer>
        </Drawer>
    );
}
