import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SignIn from "./pages/login/Index";

import MenuDeProdutos from './pages/produtos/index'
import CadastrarProdutos from './pages/produtos/cadastrarprodutos/index'
import ListarProdutos from './pages/produtos/listarprodutos/index'
import ListarServicos from './pages/servicos/index'
import TelaVendas from './pages/vendas/index'
import CadastroCompras from './pages/compras/index'
import ColorTextFields from './pages/clientes/clientecadastrar/index'


function Routes() {
    return (
        <BrowserRouter>
            <switch>
                <Route path="/menu-produtos" exact component={MenuDeProdutos} />
                <Route path="/cadastro-produto" exact component={CadastrarProdutos} />
                <Route path="/cliente-cadastrar" exact component={ColorTextFields} />
                <Route path="/listar-produtos" exact component={ListarProdutos} />
                <Route path="/listar-servicos" exact component={ListarServicos} />
                <Route path="/cadastro-compras" exact component={CadastroCompras} />
                <Route path="/cadastro-vendas" exact component={TelaVendas} />

                <Route path="/" exact component={SignIn} />
            </switch>
        </BrowserRouter>
    )

};
export default Routes;

