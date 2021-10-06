import React, { Component } from "react";
import api from '../API/api';
import '../Estilo/estilo.css'
import '../Estilo/menu.css'
import '../Estilo/styles.css';
class ListarProdutos extends Component {
  state = {
    produtos: [],
  }

  async componentDidMount() {
    const response = await api.get('produtos/?format=json');
    console.log(response.data);
    this.setState({ produtos: response.data })
    
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////d




  render() {
    const { produtos } = this.state;

    const ClassificarDados = (produtosnovo, config = null) => {
        const [ConfigOrdenacao, definirConfigOrdenacao] = React.useState(config);
      
        const ItensOrdenados = React.useMemo(() => {
          let ListaItensOrdenar = [...produtosnovo];
          console.log(produtosnovo)
          if (ConfigOrdenacao !== null) {
            
            ListaItensOrdenar.sort((a, b) => {
              //Exibir parametros A e B
              console.log(a[ConfigOrdenacao.OrdenarColuna],'<<->>',b[ConfigOrdenacao.OrdenarColuna])

              if (a[ConfigOrdenacao.OrdenarColuna] < b[ConfigOrdenacao.OrdenarColuna]) {
                return ConfigOrdenacao.Direcao === 'ascendente' ? -1 : 1;
              }
              if (a[ConfigOrdenacao.OrdenarColuna] > b[ConfigOrdenacao.OrdenarColuna]) {
                return ConfigOrdenacao.Direcao === 'ascendente' ? 1 : -1;
              }
              return 0;
            });
          }
          return ListaItensOrdenar;
        }, [produtosnovo, ConfigOrdenacao]);

        const Ordenar = (OrdenarColuna) => {
            let Direcao = 'ascendente';
            if (
              ConfigOrdenacao &&
              ConfigOrdenacao.OrdenarColuna === OrdenarColuna &&
              console.log(ConfigOrdenacao.OrdenarColuna) &&
              ConfigOrdenacao.Direcao === 'ascendente'
            ) {
              Direcao = 'descendente';
            }
            definirConfigOrdenacao({ OrdenarColuna, Direcao });
          };
        
          return { produtosnovo: ItensOrdenados, Ordenar, ConfigOrdenacao };
        };

        const TabelaProdutos = (props) => {
            const { produtosnovo, Ordenar, ConfigOrdenacao } = ClassificarDados(props.products);
            const ObterClasse = (nome) => {
              if (!ConfigOrdenacao) {
                return;
              }
              return ConfigOrdenacao.OrdenarColuna === nome ? ConfigOrdenacao.Direcao : undefined;
            };
            return (
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
                  {produtosnovo.map((item) => (
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
            );
          };

    return (
      <div class="pai">
          <TabelaProdutos
        products={produtos}
      />
    
      </div>
    )
  }

}
export default ListarProdutos;