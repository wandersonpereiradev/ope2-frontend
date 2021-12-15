import React, { Component } from "react";
import TabelaDeProdutos from "../../../components/clientes-consultar/index";
import api from '../../API/api';
import '../../Estilo/estilo.css'
import '../../Estilo/styles.css';

class ListarClientes extends Component {
  state = {
    produtos: [],
  }

  async componentDidMount() {
    //const response = await api.get('produtos/?format=json');
    const response = await api.get('https://ope2-backend.herokuapp.com/sistema/clientes/');
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
export default ListarClientes;