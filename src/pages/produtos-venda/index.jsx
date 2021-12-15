import React, { Component } from "react";
import '../Estilo/estilo.css'
import '../Estilo/styles.css';
import { VendaDeProduto } from "../../components/produtos-vendas";

class VendaDeProdutos extends Component {
 
  render() {

    return (
      <section className="">
        <VendaDeProduto />
      </section>
    )
  }

}
export default VendaDeProdutos;