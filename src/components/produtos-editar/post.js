function cadastrarnovo() {
    var axios = require('axios');
    var preco_unitario = document.getElementById('preco_unitario').value;
    var codigo_produto = document.getElementById('codigo_produto').value;
    var descricao = document.getElementById('descricao').value;
    var quantidade = document.getElementById('quantidade').value;
    var categoria = document.getElementById('categoria').value;
    var data = JSON.stringify({
        "id_produto": "",
        "codigo_produto": codigo_produto,
        "descricao": descricao,
        "quantidade": quantidade,
        "categoria": categoria,
        "preco_unitario": preco_unitario
    });

    var config = {
        method: 'post',
        url: 'https://ope2-backend.herokuapp.com/sistema/produtos/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}
export default cadastrarnovo;