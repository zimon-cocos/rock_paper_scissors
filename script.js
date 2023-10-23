let choices = ["ROCK", "PAPER", "SCISSORS"]

let win = 0
let tie = 0
let loss = 0
function getComputerChoice(){
    let random = (choices[Math.floor(Math.random()*choices.length)])
    return random
}

function roundMaker(playerSelection, computerSelection){
    playerSelection = prompt("Rock, paper or scissors?")
    playerSelection = playerSelection.toUpperCase()
    computerSelection = getComputerChoice()

    if (playerSelection === computerSelection){
        ++tie
        console.log(playerSelection + " vs " + computerSelection + " = TIE!")
        return(playerSelection + " vs " + computerSelection + " = TIE!")
    } 

    else if(playerSelection === "ROCK" && computerSelection === "PAPER"){
        ++loss
        return("You lose!" + " Paper beats rock")
    }

    else if(playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        ++win
        return("You win!" + " Rock beats scissors")
    }

    else if(playerSelection === "PAPER" && computerSelection === "SCISSORS"){
        ++loss
        return("You lose!" + " Paper beats scissors")
    }

    else if(playerSelection === "PAPER" && computerSelection === "ROCK"){
        ++win
        return("You win!" + " Paper beats rock")
    }

    else if(playerSelection === "SCISSORS" && computerSelection === "ROCK"){
        ++loss
        return("You lose!" + " Rock beats scissors")
        
    }

    else if(playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        ++win
        return("You win!" + " Scissors beat paper")
    }
}

function game(){
    for (let rounds = 0; rounds<6; rounds++){
        roundMaker()
    }
    console.log("ties: " + tie)
    console.log("wins: " + win)
    console.log("losses: " + loss)
    if(win>loss){
        console.log("You are the ultimate winner")
    }
    else{
        console.log("L")
    }
}

game()
