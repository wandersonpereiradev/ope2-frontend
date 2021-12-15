import React, { Component } from "react";
import Tudo from "../../../components/produtos-cadastrar/";
import api from '../../API/api';
import '../../Estilo/estilo.css'
import '../../Estilo/styles.css';

class MenuProdutos extends Component {
  
  async componentDidMount() {
    //const response = await api.get('produtos/?format=json');
    const response = await api.get('https://ope2-backend.herokuapp.com/sistema/produtos/');
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
export default MenuProdutos;