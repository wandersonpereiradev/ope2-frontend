import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SignIn from "./pages/login/Index";

import ListarProdutos from './pages/produtos/index'
import ListarServicos from './pages/servicos/index'

function Routes() {
    return (
        <BrowserRouter>
            <switch>
                <Route path="/listar-produtos" exact component={ListarProdutos} />
                <Route path="/listar-servicos" exact component={ListarServicos} />
                <Route path="/" exact component={SignIn} />
            </switch>
        </BrowserRouter>
    )

};
export default Routes;

