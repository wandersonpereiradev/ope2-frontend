import React, { Component } from "react";
import TabelaDeProdutos from "../../../components/historico-vendas/index";
import api from '../../API/api';
import '../../Estilo/estilo.css'
import '../../Estilo/styles.css';

class HistoricoVendas extends Component {
    state = {
        hvendas: [],
        soma: [],
    }

    async componentDidMount() {
        //const response = await api.get('produtos/?format=json');
        const response = await api.get('https://ope2-backend.herokuapp.com/sistema/vendas');
        console.log(response.data);
        this.setState({ hvendas: response.data })
        this.setState({ soma: response.data })

    }

    render() {
        const { hvendas } = this.state;
        const { soma } = this.state;
        var somavalor = 0
        var somaitens = 0

        return (
            <section className="">
                <div class="ocultar">
                    {soma.map((produto) => (
                        somavalor = somavalor + parseInt(produto.preco_unitario),
                        somaitens = somaitens + parseInt(produto.quantidade)

                    ))}{console.log("somou", somavalor)}
                </div>
                <TabelaDeProdutos hvendas={hvendas} soma={somavalor}/>
                <div class="divitens">
                <div class="divitem">
                <p class="somavendas">Total em Vendas</p>
                <h1><a class="somavendas">R${somavalor}</a></h1>
                </div>
                <div class="divitem">
                <p class="somavendas">Total de Itens  .</p>
                <h1><a class="somavendas">{somaitens}</a></h1>
                </div>
                </div>
                

            </section>
        )
    }

}
export default HistoricoVendas;