

//computer choice
const choices = ["rock","paper","scissors"];


function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}



//single round



let playerScore = 0;
let computerScore = 0;


const rock = document.querySelector(".rock");
rock.addEventListener("click", gameRock);

const paper = document.querySelector(".paper");
paper.addEventListener("click", gamePaper);

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", gameScissors);





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





function gameRock() {
    //while (computerScore < 5 && playerScore < 5 ) {
        let playerSelection = "rock";
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(playerScore);
        console.log(computerScore);
    //}
}
//gameRock()
//console.log(winner(playerScore, computerScore))


function gamePaper() {
    //while (computerScore < 5 && playerScore < 5 ) {
        let playerSelection = "paper";
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(playerScore);
        console.log(computerScore);
    //}
}
//gamePaper()
//console.log(winner(playerScore, computerScore))


function gameScissors() {
    //while (computerScore < 5 && playerScore < 5 ) {
        let playerSelection = "scissors";
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(playerScore);
        console.log(computerScore);
    //}
}
//gameScissors()
//console.log(winner(playerScore, computerScore))






