function randomUpToThree() {
    return Math.floor(Math.random() * 3);
}

function computerPlay(n) {
    switch (n) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    
    const winMsg = `You win! ${playerSelection} beats ${computerSelection}`
    const loseMsg = `You lose! ${computerSelection} beat ${playerSelection}`
    const drawMsg = `Draw! You both chose ${playerSelection}`

    if (playerSelection === computerSelection) {
        return drawMsg;
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return loseMsg;
        } else if (computerSelection === 'scissors') {
            return winMsg;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return loseMsg;
        } else if (computerSelection === 'rock') {
            return winMsg;
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return loseMsg;
        } else if (computerSelection === 'paper') {
            return winMsg;
        }
    }
}