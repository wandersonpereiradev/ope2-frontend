import React, { Component } from "react";
import api from '../API/api';
import '../Estilo/estilo.css'
import '../Estilo/styles.css';
import ColorTextFields from '../../components/vendas/index'

class TelaVendas extends Component {
  state = {
    produtos3: [],
  }
  
  async componentDidMount() {
    //const response = await api.get('produtos/?format=json');
    const response = await api.get('http://127.0.0.1:8080/produtos/');
    //console.log(response.data);
    this.setState({ produtos3: response.data })
  }
  render() {
    const { produtos3 } = this.state;
      return (
      <section className="">
        <ColorTextFields produtos3={produtos3}/>   
      </section>
    )
  }

}
export default TelaVendas;