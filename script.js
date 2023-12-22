

//computer choice
const choices = ["rock","paper","scissors"];


function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}



//single round



let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {
    
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        computerScore++
        return ("You Lose! Paper beats Rock");
        
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        computerScore++
        return ("You Lose! Rock beats Scissors");
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        computerScore++
        console.log("You Lose! Scissors beats Paper");
    }

    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        playerScore++
        return ("You Win! Paper beats Rock");
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        playerScore++
        return ("You Win! Rock beats Scissors");
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        playerScore++
        return ("You Win! Scissors beats Paper");
    }
    else {
        return ("It's a tie !");
    }
}

 


function winner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return ("you won the game");
    }
    else if (playerScore === computerScore) {
        return ("Nobody won");
    }
    else {
        return ("you lost the game");
    }

}




//console.log(computerSelection);
//console.log(playRound(playerSelection, computerSelection));

/*computerScore <= 5;
playerScore <= 5;

function game() {
    for (let i = 0; i < 1000; i++) {
        let playerSelection = prompt("enter");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
        console.log(playerScore);
        console.log(computerScore);
    }
    if (computerScore === 5 || playerScore === 5
        ) {
        break;
    }
}
game()
console.log(winner(playerScore, computerScore)) */




function game() {
    while (computerScore < 5 && playerScore < 5 ) {
        let playerSelection = prompt("enter");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(playerScore);
        console.log(computerScore);
    }
}
game()
console.log(winner(playerScore, computerScore))

/* so i need the fuction to tell who wins tra computer and human. 
i need the program to know what beats what */
