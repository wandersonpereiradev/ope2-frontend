import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ListarProdutos from './pages/produtos/index'
import ListarServicos from './pages/servicos/index'

function Routes() {
    return (
        <BrowserRouter>
            <switch>
                <Route path="/listar-produtos" exact component={ListarProdutos} />
                <Route path="/listar-servicos" exact component={ListarServicos} />
            </switch>
        </BrowserRouter>
    )

};
export default Routes;

