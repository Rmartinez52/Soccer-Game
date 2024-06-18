let player1Score = 0;
let player2Score = 0;

const player1ScoreDisplay = document.getElementById('player1Score');
const player2ScoreDisplay = document.getElementById('player2Score');

function randomizeBallPosition() {
    const field = document.getElementById('field');
    const ball = document.getElementById('ball');
    const fieldWidth = field.offsetWidth;
    const fieldHeight = field.offsetHeight;
    const ballSize = ball.offsetWidth;
    
    const maxX = fieldWidth - ballSize;
    const maxY = fieldHeight - ballSize;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    ball.style.left = randomX + 'px';
    ball.style.top = randomY + 'px';
}

function goal(player) {
    if (player === 1) {
        player1Score++;
        player1ScoreDisplay.textContent = player1Score;
    } else if (player === 2) {
        player2Score++;
        player2ScoreDisplay.textContent = player2Score;
    }
    randomizeBallPosition();
}

function startGame() {
    setInterval(() => {
        const randomPlayer = Math.random() < 0.5 ? 1 : 2;
        goal(randomPlayer);
    }, 2000);
}

startGame();
