document.addEventListener('DOMContentLoaded', function () {
    // Obtém o CPF do cliente a ser editado a partir da URL ou parâmetro
    const urlParams = new URLSearchParams(window.location.search);
    const cpf = urlParams.get('cpf'); // Exemplo: editar_cliente.html?cpf=XXX.XXX.XXX-XX
    
    if (!cpf) {
        alert('CPF não fornecido');
        return;
    }

    // Recupera os dados dos clientes no LocalStorage
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

    // Encontra o cliente que corresponde ao CPF
    const cliente = clientes.find(c => c.cpf === cpf);

    if (!cliente) {
        alert('Cliente não encontrado');
        return;
    }

    // Preenche os campos do formulário com os dados do cliente
    document.getElementById('nome').value = cliente.nome;
    document.getElementById('cpf').value = cliente.cpf;
    document.getElementById('telefone').value = cliente.telefone;

    // Processa o envio do formulário
    document.getElementById('editForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Atualiza os dados do cliente com os valores do formulário
        cliente.nome = document.getElementById('nome').value;
        cliente.telefone = document.getElementById('telefone').value;

        // Atualiza os dados no LocalStorage
        localStorage.setItem('clientes', JSON.stringify(clientes));

        // Mensagem de sucesso
        alert('Cliente atualizado com sucesso!');
    });
});
