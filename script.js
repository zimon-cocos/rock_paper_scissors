let choices = ["rock", "paper", "scissors"]


function getComputerChoice(){
    let random = (choices[Math.floor(Math.random()*choices.length)])
    console.log(random)
    return random
}

function roundMaker(playerSelection, computerSelection){
    playerSelection = prompt("Rock, paper or scissors?")
    computerSelection = getComputerChoice()
    if (playerSelection === computerSelection){
        console.log(playerSelection + " vs " + computerSelection + " = TIE!")
        return(playerSelection + " vs " + computerSelection + " = TIE!")
    } 

    else if(playerSelection === "rock" && computerSelection === "paper"){
        return("You lose!" + " Paper beats rock")
    }

    else if(playerSelection === "rock" && computerSelection === "scissors"){
        return("You win!" + " Rock beats scissors")
    }

    else if(playerSelection === "paper" && computerSelection === "scissors"){
        return("You lose!" + " Paper beats scissors")
    }

    else if(playerSelection === "paper" && computerSelection === "rock"){
        return("You win!" + " Paper beats rock")
    }

    else if(playerSelection === "scissors" && computerSelection === "rock"){
        return("You lose!" + " Rock beats scissors")
    }

    else if(playerSelection === "scissors" && computerSelection === "paper"){
        return("You win!" + " Scissors beat paper")
    }
}

roundMaker()