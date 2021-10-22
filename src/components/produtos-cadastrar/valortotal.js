function valortotal(){
    var preco_unitario = document.getElementById('preco_unitario').value;
    var quantidade = document.getElementById('quantidade').value;
    var temp = preco_unitario * quantidade
    document.getElementById('valor_total').value= temp
}
export default valortotal;