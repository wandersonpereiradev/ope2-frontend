import React, { Component } from "react";
import Tudo from "../../../components/servico-cadastrar";
import api from '../../API/api';
import '../../Estilo/estilo.css'
import '../../Estilo/styles.css';

class CadastroServico extends Component {
  
  async componentDidMount() {
    //const response = await api.get('produtos/?format=json');
    const response = await api.get('http://127.0.0.1:8080/servicos/');
    console.log(response.data);
    this.setState({ produtos: response.data })

  }

  render() {
      return (
      <section className="">
        <Tudo />
      </section>
    )
  }

}
export default CadastroServico;