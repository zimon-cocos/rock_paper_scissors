let choices = ["ROCK", "PAPER", "SCISSORS"]
let win = 0
let tie = 0
let loss = 0
let round = 0

function getComputerChoice(){
    let random = (choices[Math.floor(Math.random()*choices.length)])
    return random
}
const wins = document.getElementById("wins")
const losses = document.getElementById("losses")
const ties = document.getElementById("ties")
const rounds = document.getElementById("rounds")
const computer = document.getElementById("computer")

const rockBtn = document.getElementById("rockBtn")
const paperBtn = document.getElementById("paperBtn")
const scissorsBtn = document.getElementById("scissorsBtn")


function roundMaker(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase()
    wins.innerText = "Wins: " + win
    losses.innerText = "Losses: " + loss
    ties.innerText = "Ties: " + tie
    round++
    rounds.innerText = "Round " + round
    computer.innerText = "The computer has chosen " + computerSelection
    
    if (win == 5 || loss == 5){
        if (win>loss || win==loss ){
            console.log("Vyhral si / remizoval si a dohral si")
            win = 0
            loss = 0
            tie = 0
            round = 0
        }

        else {
            console.log("Prehral si a dohral si")
            win = 0
            loss = 0
            tie = 0
            round = 0
        }
        
    }   

    else if (playerSelection === computerSelection){
        ++tie
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

rockBtn.addEventListener("click", e =>{
    let playerSelection = "ROCK"
    console.log("The player has selected " + playerSelection)
    computerSelection = getComputerChoice()
    console.log("Pc si vybral " + computerSelection)
    roundMaker(playerSelection, computerSelection)
    console.log("Wins " + win + "Losses" + loss + "Ties " + tie)
    
})

paperBtn.addEventListener("click",e =>{
    let playerSelection = "PAPER"
    console.log(console.log("The player has selected " + playerSelection))
    computerSelection = getComputerChoice()
    console.log("Pc si vybral " + computerSelection)
    roundMaker(playerSelection, computerSelection)
    console.log("Wins " + win + "Losses" + loss + "Ties " + tie)
})

scissorsBtn.addEventListener("click",e =>{
    let playerSelection = "SCISSORS"
    console.log(console.log("The player has selected " + playerSelection))
    computerSelection = getComputerChoice()
    console.log("Pc si vybral " + computerSelection)
    roundMaker(playerSelection, computerSelection)
    console.log("Wins " + win + "Losses" + loss + "Ties " + tie)
})


/*function game(){
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

game()*/


