import AppRoutes from "./routes";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import {ConfirmProvider} from "material-ui-confirm";
import {RecoilRoot} from "recoil";
import {NotistackSnackbarProvider} from "./utils/NotistackSnackbarProvider";
import defaultTheme from "./data/defaultTheme";
import ResponsiveAppBar from "./components/NavBar";

function App() {
  return (
      <React.Fragment>
        <RecoilRoot>
          <NotistackSnackbarProvider>
            <ConfirmProvider>
              <CssBaseline/>
              <ThemeProvider theme={defaultTheme}>
                <BrowserRouter>
                  <div className="App">
                    <ResponsiveAppBar/>
                    <div style={{paddingTop: "60px"}}>
                      <AppRoutes/>
                    </div>
                  </div>
                </BrowserRouter>
              </ThemeProvider>
            </ConfirmProvider>
          </NotistackSnackbarProvider>
        </RecoilRoot>
      </React.Fragment>
  );
}

export default App;
