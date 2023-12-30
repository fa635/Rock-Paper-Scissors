

//computer choice
const choices = ["rock","paper","scissors"];


function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}



//single round



let playerScore = 0;
let computerScore = 0;


const buttons = document.querySelectorAll("button");

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
        return ("You Lose! Scissors beats Paper");
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



function gameComment(playerSelection, computerSelection) {
    
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        return ("You Lose! Paper beats Rock");  
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return ("You Lose! Rock beats Scissors");
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        return ("You Lose! Scissors beats Paper");
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
        return ("It's a tie !");
    }

    
}




function declareWinner(playerScore, computerScore) {
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
    
        let playerSelection = "rock";
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (playerScore >= 5 || computerScore >= 5) {
            endGame();
        }
        console.log(playerScore);
        console.log(computerScore);


        const player = document.querySelector(".playerScore");
        player.textContent = "playerScore : " + playerScore;

        const computer = document.querySelector(".computerScore");
        computer.textContent = "computerScore : " + computerScore;

        

        const yourChoice = document.querySelector(".playerSelection");
        yourChoice.textContent = "You chose : " + playerSelection;

        const computerChoice = document.querySelector(".computerSelection");
        computerChoice.textContent = " Computer chose : " + computerSelection;



        const comment = document.querySelector(".comment");
        comment.textContent = gameComment(playerSelection, computerSelection);

        const winner = document.querySelector(".winner");

        if (playerScore === 5 || computerScore === 5) {
            winner.textContent = declareWinner(playerScore, computerScore);
        }
        

    
}



function gamePaper() {
    
        let playerSelection = "paper";
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (playerScore >= 5 || computerScore >= 5) {
            endGame();
        }
        console.log(playerScore);
        console.log(computerScore);
        

        const player = document.querySelector(".playerScore");
        player.textContent = "playerScore : " + playerScore;

        const computer = document.querySelector(".computerScore");
        computer.textContent = "computerScore : " + computerScore;

        
        
        const yourChoice = document.querySelector(".playerSelection");
        yourChoice.textContent = "You chose : " + playerSelection;

        const computerChoice = document.querySelector(".computerSelection");
        computerChoice.textContent = " Computer chose : " + computerSelection;



        const comment = document.querySelector(".comment");
        comment.textContent = gameComment(playerSelection, computerSelection);


        const winner = document.querySelector(".winner");

        if (playerScore === 5 || computerScore === 5) {
            winner.textContent = declareWinner(playerScore, computerScore);
        }

    
}



function gameScissors() {
    
        let playerSelection = "scissors";
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (playerScore >= 5 || computerScore >= 5) {
            endGame();
        }
        console.log(playerScore);
        console.log(computerScore);


        const player = document.querySelector(".playerScore");
        player.textContent = "playerScore : " + playerScore;

        const computer = document.querySelector(".computerScore");
        computer.textContent = "computerScore : " + computerScore;



        const yourChoice = document.querySelector(".playerSelection");
        yourChoice.textContent = "You chose : " + playerSelection;

        const computerChoice = document.querySelector(".computerSelection");
        computerChoice.textContent = " Computer chose : " + computerSelection;



        const comment = document.querySelector(".comment");
        comment.textContent = gameComment(playerSelection, computerSelection);


        const winner = document.querySelector(".winner");

        if (playerScore === 5 || computerScore === 5) {
            winner.textContent = declareWinner(playerScore, computerScore);
        }

        
        

    
}





function endGame() {

        buttons.forEach((button) => {button.disabled = true});

}


//something wrong with the game logic. adding 2 points when player scissors, computer rock
//whenever scissors is involved, it adds 2. no actually random but with scissors
//no actually for everyone