import './style.css'
import Menu from '../menu/menu.jsx'


export const MenuDeProdutos = () => {
  return (
    <div class="pai">
      <Menu />
      <div class="div1">
        <h1>Escolha a Ação Desejada</h1>
        <hr />
        <br />

        <div class="acao1">
          <button  onclick="window.location.href='/page2'"  class="BTN-Editar-Listar">Editar Produtos </button>   
          <br />
          <i class="bi bi-pencil-square iconeeditar"></i>
        </div>
        <div class="acao2">
          <button class="BTN-Editar-Listar">Listar Produtos</button>
          <br />
          <i class="bi bi-card-checklist iconelistar"></i>
        </div>
      </div>
    </div>
  )

}