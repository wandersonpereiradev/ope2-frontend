import './style.css'
import Menu from '../menu/menu.jsx'


export const TabelaDeProdutos = ({ produtos}) => {
    return (
      <div class="pai">
      <Menu/>
      <div class="div1">
      <h1>Listar Produtos</h1>
      <hr/>
      <br/>
      {console.log(produtos)}
      <table>
          <thead>
              <tr>
                  <th>Categoria</th>
                  <th>Nome</th>
                  <th>Codigo do Produto</th>
                  <th>Preço Unitario</th>
                  <th>Quantidade em Estoque</th>
              </tr>
          </thead>
          <tbody>              

      {produtos.map(produto => (
                  <tr class='tabela' key={produto.id_produto}>
                  <td class='tabela coluna'>{produto.categoria}</td>
                  <td class='tabela coluna'>{produto.descricao}</td>
                  <td class='tabela coluna'>{produto.codigo_produto}</td>
                  <td class='tabela coluna'>{produto.preco_unitario}</td>
                  <td class='tabela coluna'>{produto.quantidade}</td>
              </tr>
      ))}
      </tbody>
    </table>
    </div>
  </div>
    )

}