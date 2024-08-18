import {createTheme} from "@mui/material";

declare module "@mui/material/styles" {
}

export default createTheme({
    typography: {
        fontSize: 13,
        fontFamily: "'Montserrat', sans-serif;",
    },
    palette: {
        primary: {
            main: "#00df7c",
        },
        secondary: {
            main: "rgba(0,223,124,0.59)",
        },
        error: {
            main: "#d62237",
        },
        background: {
            default: "#fafafa",
            paper: "#fff",
        },
    },
});
