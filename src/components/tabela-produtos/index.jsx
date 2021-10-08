import './style.css'


export const TabelaDeProdutos = ({ produtos, Ordenar, ObterClasse }) => {
    return (
        <div className="tabela-produtos">
        <table>
            <caption><h3>Lista de Produtos</h3></caption>
            <br></br>
            <thead>
                <tr>
                    <th>
                        <button
                            type="button"
                            onClick={() => Ordenar('codproduto')}
                            className={ObterClasse('codproduto')}
                        >
                            Codigo do Produto
                        </button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => Ordenar('nome')}
                            className={ObterClasse('nome')}
                        >
                            Descrição
                        </button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => Ordenar('categoria')}
                            className={ObterClasse('categoria')}
                        >
                            Categoria
                        </button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => Ordenar('quantidade')}
                            className={ObterClasse('quantidade')}
                        >
                            Quantidade Estoque
                        </button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => Ordenar('preco')}
                            className={ObterClasse('preco')}
                        >
                            Preço
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {produtos.map((item) => (
                    <tr OrdenarColuna={item.id_produto}>
                        <td OrdenarColuna={item.codigo_produto}>{item.codigo_produto}</td>
                        <td OrdenarColuna={item.descricao}>{item.descricao}</td>
                        <td OrdenarColuna={item.categoria}>{item.categoria}</td>
                        <td OrdenarColuna={item.quantidade}>{item.quantidade}</td>
                        <td OrdenarColuna={item.preco_unitario}>R${item.preco_unitario}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )

}