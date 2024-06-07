document.getElementById('player-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário

    const playerName = document.getElementById('player-name').value;
    generateBingoCard(playerName);
});

function generateBingoCard(playerName) {
    const bingoCard = document.getElementById('bingo-card');
    bingoCard.innerHTML = ''; // Limpa a cartela anterior, se houver

    // Cria um título com o nome do jogador
    const title = document.createElement('h2');
    title.textContent = `Cartela de Bingo de ${playerName}`;
    bingoCard.appendChild(title);

    // Cria a tabela de bingo
    const table = document.createElement('table');
    table.className = 'bingo-table';

    // Preenche o cabeçalho da tabela
    const headerRow = document.createElement('tr');
    const headers = ['B', 'I', 'N', 'G', 'O'];
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        th.className = 'bingo-header';
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Preenche os números de bingo
    const cardNumbers = generateBingoNumbers();
    for (let i = 0; i < 5; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 5; j++) {
            const cell = document.createElement('td');
            cell.textContent = cardNumbers[j][i];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    bingoCard.appendChild(table);
}

function generateBingoNumbers() {
    const columns = [];
    const ranges = [
        [1, 15],   // B
        [16, 30],  // I
        [31, 45],  // N
        [46, 60],  // G
        [61, 75]   // O
    ];

    ranges.forEach(range => {
        const column = [];
        while (column.length < 5) {
            const num = getRandomInt(range[0], range[1]);
            if (!column.includes(num)) {
                column.push(num);
            }
        }
        columns.push(column);
    });

    columns[2][2] = 'FREE'; // Espaço central "GRÁTIS"
    return columns;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
