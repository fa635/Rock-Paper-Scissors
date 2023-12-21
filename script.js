

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
        alert("hi");
        playerSelection = prompt("enter");
        
    }
}





//console.log(computerSelection);
//console.log(playRound(playerSelection, computerSelection));



function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("enter");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
        console.log(playerScore);
        console.log(computerScore);
    }
}
game()



/* so i need the fuction to tell who wins tra computer and human. 
i need the program to know what beats what */
