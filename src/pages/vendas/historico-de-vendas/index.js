import React, { Component } from "react";
import TabelaDeProdutos from "../../../components/historico-vendas/index";
import api from '../../API/api';
import '../../Estilo/estilo.css'
import '../../Estilo/styles.css';

class HistoricoVendas extends Component {
  state = {
    hvendas: [],
  }

  async componentDidMount() {
    //const response = await api.get('produtos/?format=json');
    const response = await api.get('http://127.0.0.1:8080/produtos/');
    console.log(response.data);
    this.setState({ hvendas: response.data })

  }

  render() {
    const { hvendas } = this.state;

    return (
      <section className="">
        <TabelaDeProdutos hvendas={hvendas} />
      </section>
    )
  }

}
export default HistoricoVendas;