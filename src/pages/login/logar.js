function logar() {
    console.log('logou')

    if (document.querySelector('#user').value == "mundial_parts" && document.querySelector('#password').value == "12345678") {
        sessionStorage.setItem('user', 'validado')
        sessionStorage.setItem('pass', 'validado')

    }
    if (sessionStorage["user"] && sessionStorage["pass"] == 'validado') {
        window.location.href = "listar-produtos";
    }
    else {
        sessionStorage.setItem('pass', 'Erro')
        sessionStorage.setItem('user', 'Erro')
        alert('Dados de acesso invalidos!')

    }
}
export default logar;