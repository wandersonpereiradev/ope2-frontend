import './style.css'


export const TabelaDeProdutos = ({ produtos}) => {
    return (
        <div className="tabela-produtos">
        <table>
            <caption><h3>Lista de Produtos</h3></caption>
            <br></br>
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
    )

}