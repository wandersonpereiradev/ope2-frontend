import React, { Component } from "react";
import api from '../API/api';
import '../Estilo/estilo.css'
class ListarServicos extends Component{
  state={
    servicos:[],
  }

  async componentDidMount(){
    const response = await api.get('servicos/?format=json');
    console.log(response.data);
    this.setState({servicos: response.data})    
  }
  render(){
  const {servicos}= this.state;

    return (
      <div>
        <h1>Listar Servicos</h1>
        {console.log(servicos)}
        {servicos.map(servico =>(
          <table>
            <tr class='tabela' key={servico.id_servico}>
            <td class='tabela coluna'>Cliente ID: </td>
            <td class='tabela coluna'>{servico.cliente_id}</td>
            <td class='tabela coluna'>Veiculo: </td>
            <td class='tabela coluna'>{servico.veiculo}</td>
            <td class='tabela coluna'>Serviço Realizado: </td>
            <td class='tabela coluna'>{servico.servico_realizado}</td>
            </tr>
          </table>
          
        )
        )}
      </div>
    )
  }

}
export default ListarServicos;