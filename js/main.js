/*----- constants -----*/

const SYMBOLS = {
    '0': '',
    '1': 'X',
    '-1': 'O'
};

/*----- state variables -----*/

let board;  // array of 3 column arrays
let turn; // 1 or -1
let winner; // null = no winner, 1 || -1 = winner, 'T' = tie game

/*----- cached elements  -----*/

const messageEl = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');

/*----- event listeners -----*/


/*----- functions -----*/

init();

// Initialize all state variables and call render()

function init() {
    board = [
        [0, 0, 0], // column 0
        [0, 0, 0], // column 1
        [0, 0, 0], // column 2
    ];
    turn = 1;
    winner = null;
    render();
}

// Visualize all state in the DOM
function render() {
    renderBoard();
    renderMessage();
    renderControls();
}

function renderBoard() {
    board.forEach(function (colArr, colIdx) {
        colArr.forEach(function (cellVal, rowIdx) {
            const cellId = `c${colIdx}r${rowIdx}`;
            const cellEl = document.getElementById(cellId);
            cellEl.innerText = SYMBOLS[cellVal];
        });
    });
}

function renderMessage() {
    if (winner === 'T') {
        messageEl.innerText = "It's a Tie!";
    } else if (winner) {
        messageEl.innerHTML = `<span style="color: ${SYMBOLS[winner]}"${SYMBOLS[winner].toUpperCase()}</span> Wins!`
    } else {
        messageEl.innerHTML = `<span style="color: ${SYMBOLS[turn]}">${SYMBOLS[turn].toUpperCase()}'s</span> Turn`;
    }
}

function renderControls() {
    playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';

}