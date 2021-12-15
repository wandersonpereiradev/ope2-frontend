import React, { Component } from "react";
import api from '../API/api';
import '../Estilo/estilo.css'
import '../Estilo/styles.css';
import ColorTextFields from '../../components/cadastro-compras/index'

class CadastroCompras extends Component {
  
  async componentDidMount() {
    //const response = await api.get('produtos/?format=json');
    const response = await api.get('https://ope2-backend.herokuapp.com/sistema/compras/');
    console.log(response.data);
    this.setState({ produtos: response.data })
  }
  render() {
      return (
      <section className="">
        <ColorTextFields />
      </section>
    )
  }

}
export default CadastroCompras;