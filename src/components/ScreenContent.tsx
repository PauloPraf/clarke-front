import {ReactNode} from "react";
import {Container, Stack} from "@mui/material";

type Props = {
    children: ReactNode;
};

function ScreenContent({children}: Props) {
    return (
        <Container
            maxWidth="xl"
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                marginBottom: 1,
            }}
        >
            <Stack mt={4}/>
            {children}
        </Container>
    );
}

export default ScreenContent;
