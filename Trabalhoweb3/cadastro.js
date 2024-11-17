document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar o envio tradicional do formulário
    
    // Captura os dados do formulário
    const nome = document.getElementById('nome').value;
    const tipo = document.getElementById('tipo').value;
    const cpf = document.getElementById('cpf').value;
    const mae = document.getElementById('mae').value;
    const sexo = document.getElementById('sexo').value;
    const nascimento = document.getElementById('nascimento').value;
    const cnh = document.getElementById('cnh').value;
    const telefone = document.getElementById('telefone').value;
    const logradouro = document.getElementById('logradouro').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;
    const bairro = document.getElementById('bairro').value;

    // Criação de um objeto com os dados do formulário
    const cliente = {
        nome,
        tipo,
        cpf,
        mae,
        sexo,
        nascimento,
        cnh,
        telefone,
        logradouro,
        numero,
        complemento,
        bairro
    };

    // Recupera os dados existentes no LocalStorage ou inicializa como array vazio
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

    // Verifica se o CPF já existe
    const cpfExistente = clientes.find(c => c.cpf === cpf);
    if (cpfExistente) {
        alert('CPF já cadastrado. Tente novamente com um CPF diferente.');
        return;
    }

    // Adiciona o novo cliente ao array
    clientes.push(cliente);

    // Armazena novamente o array no LocalStorage
    localStorage.setItem('clientes', JSON.stringify(clientes));

    // Exibe uma mensagem de sucesso
    alert('Cliente cadastrado com sucesso!');

    // Limpa o formulário
    document.getElementById('cadastroForm').reset();
});
