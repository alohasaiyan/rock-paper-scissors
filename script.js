function randomUpToThree() {
    return Math.floor(Math.random() * 3);
}

function computerPlay() {
    switch (randomUpToThree()) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {

    const playerInput = playerSelection.toLowerCase();

    const winMsg = `You win! ${playerInput} beats ${computerSelection}`
    const loseMsg = `You lose! ${computerSelection} beats ${playerInput}`
    const drawMsg = `Draw! You both chose ${playerInput}`

    if (playerInput === computerSelection) {
        return drawMsg;
    } else if (playerInput === 'rock') {
        if (computerSelection === 'paper') {
            return loseMsg;
        } else if (computerSelection === 'scissors') {
            return winMsg;
        }
    } else if (playerInput === 'paper') {
        if (computerSelection === 'scissors') {
            return loseMsg;
        } else if (computerSelection === 'rock') {
            return winMsg;
        }
    } else if (playerInput === 'scissors') {
        if (computerSelection === 'rock') {
            return loseMsg;
        } else if (computerSelection === 'paper') {
            return winMsg;
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (i = 1; i <= 5; i++) {
        const userInput = prompt('Rock, paper, scissors?');
        const result = playRound(userInput, computerPlay());
        console.log(result);
        if (result.includes('win')) {
            playerScore++;
        } else if (result.includes('lose')) {
            computerScore++;
        } else if (result.includes('Draw')) {
            ;
        }
    }
    if (playerScore === computerScore) {
        console.log(`Draw! Player: ${playerScore} Computer: ${computerScore}`);

    } else if (playerScore > computerScore) {
        console.log(`You won! Player: ${playerScore} Computer: ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`You lost! Player: ${playerScore} Computer: ${computerScore}`)
    }
}