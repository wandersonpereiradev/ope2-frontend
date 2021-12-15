import React, { Component } from "react";
import TabelaDeProdutos from "../../components/tabela-servicos/index";
import api from '../API/api';
import '../Estilo/estilo.css'
import '../Estilo/styles.css';

class ListarProdutos extends Component {
  state = {
    servicos: [],
  }

  async componentDidMount() {
    //const response = await api.get('produtos/?format=json');
    const response = await api.get('https://ope2-backend.herokuapp.com/sistema/servicos/');
    console.log(response.data);
    this.setState({ servicos: response.data })

  }

  render() {
    const { servicos } = this.state;

    return (
      <section className="">
        <TabelaDeProdutos produtos={servicos} />
      </section>
    )
  }

}
export default ListarProdutos;