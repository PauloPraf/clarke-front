// src/routes/index.tsx
import {Route, Routes} from "react-router-dom";
import FornecedoresPage from "../pages/fornecedores/FornecedoresPage";
import ClientesPage from "../pages/ClientePage";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<ClientesPage/>}/>
            <Route path="/fornecedores" element={<FornecedoresPage/>}/>
        </Routes>
    );
}

export default AppRoutes;
