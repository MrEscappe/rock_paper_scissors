// Player put rock, paper or scissor
// Computer tankes randonly rock, paper or scissor
// if player put rock and computer also put rock its a stealmate
// if player put rock and computer put paper the computer wins
// if player put rock and computer put scissor the player wins
// if player put paper and computer put rock the player wins
// if player put paper and computer put paper its a stealmate
// if player put paper and computer put scissor the computer wins
// if player put scissor and computer put paper the player wins
// if player put scissor and computer put rock the computer wins
// if player put scissor and computer put scissor its a stealmate
// The game is defined after 5 rounds, wins who get more points


let playerSelection = ""
let computerSelection = ""
let score = "" 
let result = ""

function game(){       
    for (let i = 0; i < 5; i++){
        playerSelection = prompt("ESCOLHE AI SEU CORNO!", "Rock, Paper or Scissors").toLowerCase()
        computerSelection = computerPlay()             
        score = i
        function playRound(){
            if (playerSelection === computerSelection){
                result = `Its a tie `
            } else if ( playerSelection === "rock" && computerSelection === "scissor"){
                result = "You win! rock beats scissor"
            } else if (playerSelection === "rock" && computerSelection === "paper") {
                result = "You lose! Paper beats Rock"
            } else if (playerSelection === "paper" && computerSelection === "rock"){
                result = "You win! paper beats rock"
            } else if (playerSelection === "paper" && computerSelection === "scissor"){
                result = "You lose! Scissor beats paper"
            } else if (playerSelection === "scissor" && computerSelection === "paper"){
                result = "You win! Scissor beats paper"
            } else if (playerSelection === "scissor" && computerSelection === "rock"){
                result = "You lose! Rock beats scissor!"
            } else {
                result = "Put a valid option!"
            }            
        }
        playRound()     
        alert(result)        
    }      
}

function computerPlay(){
    let randomChoice = Math.floor(Math.random() *3 )   
    if (randomChoice === 0){
        return "rock"
    } else if (randomChoice === 2){
        return "paper"
    } else {
        return "scissor"
    }
}
  
game()








