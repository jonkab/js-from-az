const gridSize = 6;
const grid = [];
const solution = [
    ['☀️', '☪️', '☀️', '☪️', '☀️', '☪️'],
    ['☪️', '☀️', '☪️', '☀️', '☪️', '☀️'],
    ['☀️', '☪️', '☀️', '☪️', '☀️', '☪️'],
    ['☪️', '☀️', '☪️', '☀️', '☪️', '☀️'],
    ['☀️', '☪️', '☀️', '☪️', '☀️', '☪️'],
    ['☪️', '☀️', '☪️', '☀️', '☪️', '☀️']
];

const initialEmojis = [
    { row: 0, col: 0, emoji: '☀️' },
    { row: 1, col: 1, emoji: '☪️' },
    { row: 2, col: 2, emoji: '☀️' },
    { row: 3, col: 3, emoji: '☪️' },
    { row: 4, col: 4, emoji: '☀️' }
];

const equalCells = [
    { cell1: { row: 0, col: 1 }, cell2: { row: 0, col: 2 } },
    { cell1: { row: 1, col: 3 }, cell2: { row: 1, col: 4 } },
    { cell1: { row: 2, col: 5 }, cell2: { row: 3, col: 5 } },
    { cell1: { row: 4, col: 0 }, cell2: { row: 5, col: 0 } }
];

const oppositeCells = [
    { cell1: { row: 0, col: 3 }, cell2: { row: 0, col: 4 } },
    { cell1: { row: 1, col: 5 }, cell2: { row: 2, col: 5 } },
    { cell1: { row: 3, col: 0 }, cell2: { row: 3, col: 1 } },
    { cell1: { row: 4, col: 2 }, cell2: { row: 4, col: 3 } }
];

const gameGrid = document.getElementById('game-grid');

// Initialisation de la grille
for (let i = 0; i < gridSize; i++) {
    grid[i] = [];
    for (let j = 0; j < gridSize; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.row = i;
        cell.dataset.col = j;
        cell.addEventListener('click', handleCellClick);
        grid[i][j] = '';
        gameGrid.appendChild(cell);
    }
}

// Placer les 5 emojis de départ
initialEmojis.forEach(({ row, col, emoji }) => {
    const cell = document.querySelector(`.cell[data-row='${row}'][data-col='${col}']`);
    cell.textContent = emoji;
    grid[row][col] = emoji;
});

// Placer les signes '=' et 'X'
equalCells.forEach(({ cell1, cell2 }) => {
    const cell1Element = document.querySelector(`.cell[data-row='${cell1.row}'][data-col='${cell1.col}']`);
    const cell2Element = document.querySelector(`.cell[data-row='${cell2.row}'][data-col='${cell2.col}']`);
    cell1Element.classList.add('equal');
    cell2Element.classList.add('equal');
});

oppositeCells.forEach(({ cell1, cell2 }) => {
    const cell1Element = document.querySelector(`.cell[data-row='${cell1.row}'][data-col='${cell1.col}']`);
    const cell2Element = document.querySelector(`.cell[data-row='${cell2.row}'][data-col='${cell2.col}']`);
    cell1Element.classList.add('opposite');
    cell2Element.classList.add('opposite');
});

// Gestion du clic sur une cellule
function handleCellClick(e) {
    const cell = e.target;
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);
    const current = grid[row][col];

    if (current === '') {
        cell.textContent = '☀️';
        grid[row][col] = '☀️';
    } else if (current === '☀️') {
        cell.textContent = '☪️';
        grid[row][col] = '☪️';
    } else {
        cell.textContent = '';
        grid[row][col] = '';
    }

    validateGrid();
}

// Fonction pour valider la grille selon les règles
function validateGrid() {
    // Réinitialiser les erreurs
    document.querySelectorAll('.cell').forEach(cell => cell.classList.remove('invalid'));

    // Vérifier les règles et appliquer la classe 'invalid' si nécessaire
    // Règle 1: Pas plus de deux ☀️ ou ☪️ côte à côte
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize - 2; j++) {
            if (grid[i][j] === grid[i][j + 1] && grid[i][j] === grid[i][j + 2] && grid[i][j] !== '') {
                document.querySelector(`.cell[data-row='${i}'][data-col='${j}']`).classList.add('invalid');
                document.querySelector(`.cell[data-row='${i}'][data-col='${j + 1}']`).classList.add('invalid');
                document.querySelector(`.cell[data-row='${i}'][data-col='${j + 2}']`).classList.add('invalid');
            }
            if (grid[j][i] === grid[j + 1][i] && grid[j][i] === grid[j + 2][i] && grid[j][i] !== '') {
                document.querySelector(`.cell[data-row='${j}'][data-col='${i}']`).classList.add('invalid');
                document.querySelector(`.cell[data-row='${j + 1}'][data-col='${i}']`).classList.add('invalid');
                document.querySelector(`.cell[data-row='${j + 2}'][data-col='${i}']`).classList.add('invalid');
            }
        }
    }

    // Règle 2: Même nombre de ☀️ et ☪️ par ligne et colonne
    for (let i = 0; i < gridSize; i++) {
        let sunCountRow = 0;
        let moonCountRow = 0;
        let sunCountCol = 0;
        let moonCountCol = 0;
        for (let j = 0; j < gridSize; j++) {
            if (grid[i][j] === '☀️') sunCountRow++;
            if (grid[i][j] === '☪️') moonCountRow++;
            if (grid[j][i] === '☀️') sunCountCol++;
            if (grid[j][i] === '☪️') moonCountCol++;
        }
        if (sunCountRow > gridSize / 2 || moonCountRow > gridSize / 2) {
            for (let j = 0; j < gridSize; j++) {
                document.querySelector(`.cell[data-row='${i}'][data-col='${j}']`).classList.add('invalid');
            }
        }
        if (sunCountCol > gridSize / 2 || moonCountCol > gridSize / 2) {
            for (let j = 0; j < gridSize; j++) {
                document.querySelector(`.cell[data-row='${j}'][data-col='${i}']`).classList.add('invalid');
            }
        }
    }

    // Règle 3: Cellules séparées par '=' doivent être du même type
    equalCells.forEach(({ cell1, cell2 }) => {
        const cell1Value = grid[cell1.row][cell1.col];
        const cell2Value = grid[cell2.row][cell2.col];
        if (cell1Value !== '' && cell2Value !== '' && cell1Value !== cell2Value) {
            document.querySelector(`.cell[data-row='${cell1.row}'][data-col='${cell1.col}']`).classList.add('invalid');
            document.querySelector(`.cell[data-row='${cell2.row}'][data-col='${cell2.col}']`).classList.add('invalid');
        }
    });

    // Règle 4: Cellules séparées par 'X' doivent être de type opposé
    oppositeCells.forEach(({ cell1, cell2 }) => {
        const cell1Value = grid[cell1.row][cell1.col];
        const cell2Value = grid[cell2.row][cell2.col];
        if (cell1Value !== '' && cell2Value !== '' && cell1Value === cell2Value) {
            document.querySelector(`.cell[data-row='${cell1.row}'][data-col='${cell1.col}']`).classList.add('invalid');
            document.querySelector(`.cell[data-row='${cell2.row}'][data-col='${cell2.col}']`).classList.add('invalid');
        }
    });
}

// Bouton Effacer
document.getElementById('effacer').addEventListener('click', () => {
    if (confirm('Voulez-vous vraiment effacer vos saisies ?')) {
        document.querySelectorAll('.cell').forEach(cell => {
            const row = parseInt(cell.dataset.row);
            const col = parseInt(cell.dataset.col);
            if (!initialEmojis.some(e => e.row === row && e.col === col)) {
                cell.textContent = '';
                grid[row][col] = '';
            }
        });
        validateGrid();
    }
});

// Bouton Indice
document.getElementById('indice').addEventListener('click', giveHint);

function giveHint() {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            if (grid[i][j] === '') {
                const solutionEmoji = solution[i][j];
                document.querySelector(`.cell[data-row='${i}'][data-col='${j}']`).textContent = solutionEmoji;
                grid[i][j] = solutionEmoji;
                validateGrid();
                return;
            }
        }
    }
}