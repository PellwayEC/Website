const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSIORS = 'SCISSORS';
const RESULT_DRAW = 'DRAW';
const PLAYER_WINS = 'PLAYER_WINS';
const COMPUTER_WINS = 'COMPUTER_WINS';
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSIORS}?` , '').toUpperCase();
    if (
        selection !== ROCK && 
        selection !== PAPER && 
        selection !== SCISSIORS
        ) {
            alert(`Invalid choice!, We chose ${DEFAULT_USER_CHOICE} for you`);
            return DEFAULT_USER_CHOICE;
        }

    return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSIORS;
    }
};

const getWinner = (cChoice, pChoice) =>  {
    if (cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSIORS || cChoice === SCISSIORS && pChoice === ROCK) {
        return PLAYER_WINS;
    } else {
        return COMPUTER_WINS;
    }
};

startGameBtn.addEventListener('click',() => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Starting Game...');
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerSelection);
    let  message = `You picked ${playerSelection}, computer picked ${computerChoice}, therefore you `;
    if (winner === RESULT_DRAW) {
        message = message + 'had a draw.';
    } else if (winner === PLAYER_WINS) {
        message = message + 'won.';
    } else {
        message = message + 'lost.';
    }
    alert(message);
    gameIsRunning = false;
    document.getElementById('start-game-btn').innerHTML = "Play Again?";
});
