

//computer choice
const choices = ["rock","paper","scissors"];


function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}



//single round






function playRound(playerSelection, computerSelection) {
    
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        return ("You Lose! Paper beats Rock");
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return ("You Lose! Rock beats Scissors");
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        console.log("You Lose! Scissors beats Paper");
    }

    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return ("You Win! Paper beats Rock");
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        return ("You Win! Rock beats Scissors");
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        return ("You Win! Scissors beats Paper");
    }
    else {
        return ("hi");
    }
}



const playerSelection = "rock";
const computerSelection = getComputerChoice();

//console.log(computerSelection);
//console.log(playRound(playerSelection, computerSelection));



function game() {
    for (let i = 0; i < 5; i++) {
        ;
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
    }
}
game()



/* so i need the fuction to tell who wins tra computer and human. 
i need the program to know what beats what */
