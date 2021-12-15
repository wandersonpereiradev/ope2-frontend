import './style.css'
import Menu from '../menu/menu.jsx'


export const VendaDeProduto = () => {
   
    return (
        <div class="pai">
            <Menu />
            <div className="form-venda">
                <h1>Venda</h1>
                
                <form className="vendas" method="post">
                    <label className="rotulo">
                        <span>Código</span>
                        <input type="text" />
                    </label>
                </form>
                
            </div>

        </div>
    )

}