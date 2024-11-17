document.addEventListener('DOMContentLoaded', function () {
    // Obtém o formulário e o campo CPF
    const form = document.getElementById('deleteForm');
    const cpfInput = document.getElementById('cpf');

    // Processa a exclusão do cliente ao enviar o formulário
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtém o CPF informado
        const cpf = cpfInput.value.trim();

        if (!cpf) {
            alert('Por favor, insira o CPF do cliente.');
            return;
        }

        // Recupera os dados dos clientes no LocalStorage
        let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

        // Encontra o índice do cliente com o CPF informado
        const index = clientes.findIndex(cliente => cliente.cpf === cpf);

        if (index === -1) {
            alert('Cliente não encontrado.');
            return;
        }

        // Exclui o cliente encontrado
        clientes.splice(index, 1);

        // Atualiza o LocalStorage com a lista de clientes modificada
        localStorage.setItem('clientes', JSON.stringify(clientes));

        // Feedback de sucesso
        alert('Cliente excluído com sucesso!');
        
        // Limpa o campo de CPF após a exclusão
        cpfInput.value = '';
    });
});
