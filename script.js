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