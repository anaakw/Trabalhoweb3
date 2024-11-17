document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Obtendo os valores dos campos
        const email = document.querySelector('#email').value;
        const senha = document.querySelector('#senha').value;

        // Recuperando os dados de login do LocalStorage
        const usuario = JSON.parse(localStorage.getItem('usuario'));

        // Validando o login
        if (usuario && usuario.email === email && usuario.senha === senha) {
            alert('Login bem-sucedido!');
            window.location.href = './index.html'; // Redireciona para a página inicial
        } else {
            alert('E-mail ou senha incorretos!');
        }
    });
});
