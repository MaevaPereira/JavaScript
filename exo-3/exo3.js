
console.log('exo-3');

//Récupérer le choix de l'utilisateur
const playerInput = prompt("Your choice ( rock, paper, scissors) ?");


let pc = rock, paper, scissors;

function getPlayerChoice(playerInput) {
    if (playerInput.toLowerCase() === 'paper') {
        console.log('paper');
    } else if (playerInput.toLowerCase() === 'rock') {
        console.log('rock');
    } else if (playerInput.toLowerCase() === 'scissors') {
        console.log('scissors');
    } else {
        console.log('ERROR');
    }
    return playerInput.toLowerCase();

}

console.log(getPlayerChoice(playerInput));

//Adversaire PC
/*
function getComputerChoice() {
    pc.Math.random()  [0; 2];
    return ;
}

*/
