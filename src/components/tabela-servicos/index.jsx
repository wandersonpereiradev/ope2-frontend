import './style.css'
import Menu from '../menu/menu.jsx'


export const TabelaDeProdutos = ({ produtos}) => {
    return (
      <div class="pai">
      <Menu/>
      <div class="div1">
      <h1>Serviços Executados</h1>
      <hr/>
      <br/>
      {console.log(produtos)}
      <table>
          <thead>
              <tr>
                  
                  <th>Cliente ID</th>
                  <th>Veiculo</th>
                  <th>Servico</th>
                  
              </tr>
          </thead>
          <tbody>              

      {produtos.map(produto => (
                  <tr class='tabela' key={produto.servico}>
                  <td class='tabela coluna'>{produto.cliente_id}</td>
                  <td class='tabela coluna'>{produto.veiculo}</td>
                  <td class='tabela coluna'>{produto.servico_realizado}</td>
              </tr>
      ))}
      </tbody>
    </table>
    </div>
  </div>
    )

}