function cadastrarnovo() {
    var axios = require('axios');
    var nome = document.getElementById('Nome').value;
    var sobrenome = document.getElementById('Sobrenome').value;
    var contato = document.getElementById('Contato').value;
    var endereco = document.getElementById('Endereco').value;
    var email = document.getElementById('email').value;
    var veiculo = document.getElementById('Veiculo').value;
    var placa = document.getElementById('Placa').value;
    var data = JSON.stringify({
        "id_produto": "",
        "nome": nome,
        "sobrenome": sobrenome,
        "contato": contato,
        "endereco": endereco,
        "email": email,
        "veiculo": veiculo,
        "placa": placa
    });

    var config = {
        method: 'post',
        url: 'https://ope2-backend.herokuapp.com/sistema/clientes/',
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