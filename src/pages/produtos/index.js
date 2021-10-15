import React, { Component } from "react";
import { MenuDeProdutos } from "../../components/menu-produtos";
import api from '../API/api';
import '../Estilo/estilo.css'
import '../Estilo/styles.css';

class MenuProdutos extends Component {
  
  async componentDidMount() {
    //const response = await api.get('produtos/?format=json');
    const response = await api.get('http://127.0.0.1:8080/produtos/');
    console.log(response.data);
    this.setState({ produtos: response.data })

  }

  render() {
      return (
      <section className="">
        <MenuDeProdutos />
      </section>
    )
  }

}
export default MenuProdutos;