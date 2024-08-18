import React from "react";
import {Box, BoxProps, SxProps, Theme} from "@mui/material";

type Props = {
    children: React.ReactNode;
    sx?: SxProps<Theme>;
} & BoxProps;

function FlexLayer({children, sx}: Props) {
    return (
        <Box sx={{flexGrow: 1, position: "relative"}}>
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    position: "absolute",
                    ...sx,
                }}
            >
                {children}
            </Box>
        </Box>
    );
}

export default FlexLayer;
