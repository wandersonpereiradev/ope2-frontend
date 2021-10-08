import React, { Component } from "react";
import { TabelaDeProdutos } from "../../components/tabela-produtos";
import api from '../API/api';
import '../Estilo/estilo.css'
import '../Estilo/styles.css';

class ListarProdutos extends Component {
  state = {
    produtos: [],
  }

  async componentDidMount() {
    //const response = await api.get('produtos/?format=json');
    const response = await api.get('http://127.0.0.1:8000/sistema/produtos/');
    console.log(response.data);
    this.setState({ produtos: response.data })
    
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value })
  }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////d




  render() {
    const { produtos } = this.state;

    const ClassificarDados = (produtosnovo, config = null) => {
        const [ConfigOrdenacao, definirConfigOrdenacao] = React.useState(config);
      
        const ItensOrdenados = React.useMemo(() => {
          let ListaItensOrdenar = [...produtosnovo];
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
              <section className = "container">
                <TabelaDeProdutos produtos={produtosnovo} Ordenar={Ordenar} ObterClasse={ObterClasse} />
              </section>      
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