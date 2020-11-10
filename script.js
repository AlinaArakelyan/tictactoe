var originalBoard;
const player1 = "O"
const player2 = "X"

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,6],
    [0,4,8],
    [6,4,2]
]

const cells = document.querySelectorAll(".box");
startGame()

function startGame() {
    document.querySelector(".winner")
    originalBoard = Array.from(Array(9).keys());
    for (var i=0; i < cells.length; i++) {
        cells[i].innerText= "";
        cells[i].addEventListener("click", turnClick, false)
    }
}

function turnClick(square) {
    // console.log(square.target.id)
    turn(square.target.id, player1)
}

function turn(squareId, player) {
    originalBoard[squareId] = player
    document.getElementById(squareId).innerText = player
    let gameWon = checkWin(originalBoard, player)
    if (gameWon) gameOver(gameWon)
}

function checkWin(board, player) {
    
}