import { render } from "@testing-library/react";
import React, { Component } from "react";
import api from './api';
import './estilo.css'
class App extends Component{
  state={
    produtos:[],
  }

  async componentDidMount(){
    const response = await api.get('');
    console.log(response.data);
    this.setState({produtos: response.data})    
  }
  render(){
  const {produtos}= this.state;

    return (
      <div>
        <h1>Produtos</h1>
        {console.log(produtos)}
        {produtos.map(produto =>(
          <table>
            <tr class='tabela' key={produto.id_produto}>
            <td class='tabela coluna'>categoria: </td>
            <td class='tabela coluna'>{produto.categoria}</td>
            <td class='tabela coluna'>Nome: </td>
            <td class='tabela coluna'>{produto.descricao}</td>
            <td class='tabela coluna'>Codigo do Produto: </td>
            <td class='tabela coluna'>{produto.codigo_produto}</td>
            <td class='tabela coluna'>Preço Unitario: </td>
            <td class='tabela coluna'>{produto.preco_unitario}</td>
            <td class='tabela coluna'>Quantidade em Estoque:</td>
            <td class='tabela coluna'>{produto.quantidade}</td>
            </tr>
          </table>
          
        )
        )}
      </div>
    )
  }

}
export default App;