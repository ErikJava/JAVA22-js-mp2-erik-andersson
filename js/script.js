const playerChoiceH1 = document.getElementById("playerchoice");
const computer = document.getElementById("enemychoice");
const showResult = document.getElementById("result");
const playerPoints = document.getElementById("playerscore");
const enemyPoints = document.getElementById("enemyscore");
const showWinner = document.getElementById("winner");

let userPoints = 0;
let computerPoints = 0;
let computerChoice;
let userChoice;

// PLAYER NAME
const submitName = document.getElementById("submitname");
submitName.addEventListener("click", event => {
    event.preventDefault();

    const nameInput = document.getElementById("nameinput");
    const textFromInput = nameInput.value;
    nameInput.value = '';
    const showPlayerName = document.getElementById("playername");
    showPlayerName.innerText = textFromInput;
});

// COMPUTER CHOICE
function enemysChoice() {
    const computerHand = ['Rock', 'Paper', 'Scissor'];
    const randomChoice = Math.floor(Math.random() * computerHand.length);
    computer.innerHTML = computerHand[randomChoice]
    computerChoice = computerHand[randomChoice];
} 

// PLAYER CHOICE (ROCK)
const rockChoice = document.getElementById("rock");
rockChoice.addEventListener("click", rockFunction);

function rockFunction() {
    userChoice = "Rock";
    playerChoiceH1.innerHTML = "Rock";
    enemysChoice()
    getResult()
}

//PLAYER CHOICE (PAPER)
const paperChoice = document.getElementById("paper");
paperChoice.addEventListener("click", paperFunction);

function paperFunction() {
    userChoice = "Paper";
    playerChoiceH1.innerHTML = "Paper";
    enemysChoice()
    getResult()
}

// PLAYER CHOICE (SCISSOR)
const scissorChoice = document.getElementById("scissor");
scissorChoice.addEventListener("click", scissorFunction);

function scissorFunction() {
    userChoice = "Scissor";
    playerChoiceH1.innerHTML = "Scissor";
    enemysChoice()
    getResult()
}

// SHOW RESULT
function getResult() {
    let computer = computerChoice
    let player = userChoice

    if (player == computer) {
        result = 'Tie!'
        showResult.innerHTML = result
    }
    if (player === 'Rock' && computer === 'Paper') {
        result = 'Computer wins!'
        showResult.innerHTML = result
        computerPoints++
        enemyPoints.textContent = computerPoints;
    }
    if (player === 'Rock' && computer === 'Scissor') {
        result = 'You win!'
        showResult.innerHTML = result
        userPoints++
        playerPoints.textContent = userPoints;
    }
    if (player === 'Paper' && computer === 'Scissor') {
        result = 'Computer wins!'
        showResult.innerHTML = result
        computerPoints++
        enemyPoints.textContent = computerPoints;
    }
    if (player === 'Paper' && computer === 'Rock') {
        result = 'You win!'
        showResult.innerHTML = result
        userPoints++
        playerPoints.textContent = userPoints;
    }
    if (player == 'Scissor' && computer == 'Rock') {
        result = 'Computer wins!'
        showResult.innerHTML = result
        computerPoints++
        enemyPoints.textContent = computerPoints;
    }
    if (player == 'Scissor' && computer == 'Paper') {
        result = 'You win!'
        showResult.innerHTML = result
        userPoints++
        playerPoints.textContent = userPoints;
    }
    if (userPoints == 3) {
        showWinner.innerHTML = "You won the game!<br><br>Press the button below to restart the game."
        rockChoice.setAttribute("disabled",true); paperChoice.setAttribute("disabled",true); scissorChoice.setAttribute("disabled",true);
    }
    else if (computerPoints == 3) {
        showWinner.innerHTML = "You lost the game!<br><br>Press the button below to restart the game."
        rockChoice.setAttribute("disabled",true); paperChoice.setAttribute("disabled",true); scissorChoice.setAttribute("disabled",true);    
    }
}

// RESTART GAME
const restartGame = document.getElementById("restartgame");
restartGame.addEventListener("click", endGame);

function endGame() {
    userPoints = 0;
    computerPoints = 0;
    playerPoints.innerHTML = userPoints;
    enemyPoints.innerHTML = computerPoints;
    result.innerHTML = ``;
    showWinner.innerHTML = ``;
    playerChoiceH1.innerHTML = ``;
    computer.innerHTML = ``;
    showResult.innerHTML = ``;
    rockChoice.removeAttribute("disabled"); paperChoice.removeAttribute("disabled"); scissorChoice.removeAttribute("disabled");
}


