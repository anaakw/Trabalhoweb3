document.addEventListener('DOMContentLoaded', function () {
    // Recupera os dados dos clientes no LocalStorage
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

    // Se não houver clientes, exibe uma mensagem
    if (clientes.length === 0) {
        const tabelaBody = document.querySelector('tbody');
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 4;
        cell.textContent = 'Nenhum cliente cadastrado.';
        row.appendChild(cell);
        tabelaBody.appendChild(row);
        return;
    }

    // Preenche a tabela com os clientes
    const tabelaBody = document.querySelector('tbody');
    clientes.forEach(cliente => {
        const row = document.createElement('tr');

        // Nome
        const nomeCell = document.createElement('td');
        nomeCell.textContent = cliente.nome;
        row.appendChild(nomeCell);

        // CPF
        const cpfCell = document.createElement('td');
        cpfCell.textContent = cliente.cpf;
        row.appendChild(cpfCell);

        // Tipo
        const tipoCell = document.createElement('td');
        tipoCell.textContent = cliente.tipo;
        row.appendChild(tipoCell);

        // Ações
        const acaoCell = document.createElement('td');
        const editLink = document.createElement('a');
        editLink.href = `edicao_cliente.html?cpf=${cliente.cpf}`;
        editLink.textContent = 'Editar';
        acaoCell.appendChild(editLink);

        const deleteLink = document.createElement('a');
        deleteLink.href = `exclusao_cliente.html?cpf=${cliente.cpf}`;
        deleteLink.textContent = 'Excluir';
        acaoCell.appendChild(deleteLink);

        row.appendChild(acaoCell);
        
        tabelaBody.appendChild(row);
    });
});
