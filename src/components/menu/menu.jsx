import React from "react";
import './menu.css';

function Menu() {
    return (
        <div>
            <nav class="menu">
                <ul class="perfil"><i class="bi bi-person-circle icone"></i>
                    <li>Bem Vindo: Alex</li>
                    <hr class="hr" />
                </ul>
                <ul>
                    <li><a class="fonteli" href="/cliente-cadastrar"><i class="bi bi-file-person"></i> Clientes</a></li>
                    <li><a class="fonteli" href="/listar-produtos"><i class="bi bi-calendar-plus"></i> Produtos</a></li>
                    <li><a class="fonteli" href="/listar-servicos"><i class="bi bi-calendar-plus"></i> Servicos</a></li>
                    <li><a class="fonteli" href="/cadastro-vendas"><i class="bi bi-cart-check"></i> Vendas</a></li>
                    <li><a class="fonteli" href="/cadastro-compras"><i class="bi bi-cart-check"></i> Compras</a></li>
                </ul>
            </nav>
        </div>
    )
};
export default Menu;