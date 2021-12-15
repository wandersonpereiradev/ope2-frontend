function cadastrarnovo() {
    var axios = require('axios');
    var preco_unitario = document.getElementById('preco_unitario').value;
    var idservico = document.getElementById('idservico').value;
    var descricao = document.getElementById('descricao').value;
    var quantidade = document.getElementById('quantidade').value;
    var cliente_id = document.getElementById('cliente_id').value;
    var veiculo = document.getElementById('veiculo').value;
    var data = JSON.stringify({
        "id":"",
        "cliente_id": cliente_id,
        "veiculo": veiculo,
        "servico_realizado": descricao,
    });

    var config = {
        method: 'post',
        url: 'https://ope2-backend.herokuapp.com/sistema/servicos/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            alert('Produto: '+ descricao + ' Cadastrado com sucesso');
            
        })
        .catch(function (error) {
            console.log(error);
            alert(JSON.stringify(error));
        });
}
export default cadastrarnovo;