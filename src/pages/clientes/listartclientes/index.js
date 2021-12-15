import React, { Component } from "react";
import TabelaDeclientes from "../../../components/clientes-consultar/index";
import api from '../../API/api';
import '../../Estilo/estilo.css'
import '../../Estilo/styles.css';

class ListarClientes extends Component {
  state = {
    clientes: [],
  }

  async componentDidMount() {
    //const response = await api.get('clientes/?format=json');
    const response = await api.get('https://ope2-backend.herokuapp.com/sistema/clientes/');
    console.log(response.data);
    this.setState({ clientes: response.data })

  }

  render() {
    const { clientes } = this.state;

    return (
      <section className="">
        <TabelaDeclientes clientes={clientes} />
      </section>
    )
  }

}
export default ListarClientes;