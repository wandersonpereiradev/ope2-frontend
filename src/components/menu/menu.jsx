import React from "react";
import './menu.css';


function Menu() {
    if (sessionStorage["user"] != 'validado') {
        window.location.href = "/";
        console.log("Erro")
    }
    if (sessionStorage["pass"] != 'validado') {
        window.location.href = "/";
        console.log("Erro")
    }
    else {

        console.log('Usuario ', sessionStorage["user"])
        console.log('senha ', sessionStorage["pass"])
        return (
            <div>

                <nav class="menu">
                    <ul class="perfil"><i class="bi bi-person-circle icone"></i>
                        <li>Bem Vindo</li>
                        <hr class="hr" />
                    </ul>
                    <ul>
                        {/* <li><a class="fonteli" href="/cliente-cadastrar"><i class="bi bi-bar-chart-line"></i> Dashboard</a></li> */}

                        <div class="dropdown">
                            <li><a class="fonteli" ><i class="bi bi-file-person"></i> Clientes</a></li>
                            <li><a class="fonteli vendas" href="/listar-clientes"><i class="bi bi-file-person"></i> Listar Clientes</a></li>
                            <li><a class="fonteli vendas" href="/cliente-cadastrar"><i class="bi bi-file-person"></i> Cadastrar Clientes</a></li>
                        </div>
                        <li><a class="fonteli" href="/menu-produtos"><i class="bi bi-calendar-plus"></i> Produtos</a></li>
                        <div class="dropdown">
                            <li><a class="fonteli" href="/listar-servicos"><i class="bi bi-calendar-plus"></i> Servicos</a></li>
                            <li><a class="fonteli vendas" href="/cadastro-servico"><i class="bi bi-calendar-plus"></i> Cadastrar Servicos</a></li>
                        </div>

                        <div class="dropdown">
                            <a class="fonteli"><i class="bi bi-cart-check"></i> Vendas</a>
                            <li class="vendas"><a class="fonteli vendas" href="/cadastro-vendas"><i class="bi bi-cart-check"></i> Cadastrar Venda</a></li>
                            <li class="vendas"><a class="fonteli vendas" href="/historico-vendas"><i class="bi bi-cart-check"></i> Historico Vendas</a></li>
                        </div>
                        {/* <li><a class="fonteli" href="/cadastro-compras"><i class="bi bi-cart-check"></i> Compras</a></li>  */}
                    </ul>
                </nav>
            </div>
        )
    };
}
export default Menu;