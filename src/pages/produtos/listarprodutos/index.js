import React, { Component } from "react";
import TabelaDeProdutos from "../../../components/tabela-produtos-Nova/index";
import api from '../../API/api';
import '../../Estilo/estilo.css'
import '../../Estilo/styles.css';

class ListarProdutos extends Component {
  state = {
    produtos: [],
  }

  async componentDidMount() {
    //const response = await api.get('produtos/?format=json');
    const response = await api.get('http://127.0.0.1:8080/sistema/produtos/');
    console.log(response.data);
    this.setState({ produtos: response.data })

  }

  render() {
    const { produtos } = this.state;

    return (
      <section className="">
        <TabelaDeProdutos produtos={produtos} />
      </section>
    )
  }

}
export default ListarProdutos;