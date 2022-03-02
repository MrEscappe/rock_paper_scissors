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
let scorePlayer = ""
let scorePc = "" 
let whoWin = ""

const btn = document.querySelectorAll(".btn")
const result = document.querySelector(".result")
console.log(result)

btn.forEach(btn => btn.addEventListener("click", function(e){
    if(btn.textContent === "Rock"){
        playerSelection = "rock"
        game()        
    } else if (btn.textContent === "Paper"){
        playerSelection = "paper"
        game()
    } else {
        playerSelection = "scissor"
        game()
    }
}))




function game(){      
    
         computerSelection = computerPlay()             
        
        function playRound(){
            if (playerSelection === computerSelection){
                whoWin = `Its a tie `
            } else if ( playerSelection === "rock" && computerSelection === "scissor"){
                whoWin = "You win! rock beats scissor"
            } else if (playerSelection === "rock" && computerSelection === "paper") {
                whoWin = "You lose! Paper beats Rock"
            } else if (playerSelection === "paper" && computerSelection === "rock"){
                whoWin = "You win! paper beats rock"
            } else if (playerSelection === "paper" && computerSelection === "scissor"){
                whoWin = "You lose! Scissor beats paper"
            } else if (playerSelection === "scissor" && computerSelection === "paper"){
                whoWin = "You win! Scissor beats paper"
            } else if (playerSelection === "scissor" && computerSelection === "rock"){
                whoWin = "You lose! Rock beats scissor!"
            } else {
                whoWin = "Put a valid option!"
            }            
        }
        playRound()     
        result.textContent = whoWin      
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
  









