
const result = document.querySelector(".result")
const resultText = document.querySelector(".result-text")
const playerPoints = document.querySelector(".player-result")
const computerPoints = document.querySelector(".computer-result")
const choice = document.querySelectorAll(".choice")
const btnRst = document.getElementById("btn-reset")
let playerChoice = ""
let computerChoice = ""
let playerScore = ""
let computerScore = ""
let isAlive = true;

choice.forEach(function(e){
    e.addEventListener("click", function(){
        if (e.textContent === "✋"){
            playerChoice = "✋"
        } else if (e.textContent === "✊"){
            playerChoice = "✊"
        } else {
            playerChoice = "✌️"
        }
        game()        
    })
})

function computerPlay(){
    let randomChoice = Math.floor(Math.random() *3 )   
    if (randomChoice === 0){
        computerChoice =  "✋"
    } else if (randomChoice === 2){
        computerChoice =  "✊"
    } else {
        computerChoice =  "✌️"
    }
}

function game(){
    computerPlay()    
    if(isAlive){
        if ( playerChoice === computerChoice){
            resultText.textContent = "It's a tie!"
        } else if ((playerChoice === "✊" && computerChoice === "✌️") || 
                (playerChoice === "✋" && computerChoice === "✊") || 
                (playerChoice === "✌️" && computerChoice === "✋")){             
                resultText.textContent = `Player Wins! ${playerChoice} beats ${computerChoice}`;
                result.textContent = `${playerChoice}` 
                playerScore++
                playerPoints.textContent = `${playerScore}`                     
        } else {
            resultText.textContent = `Computer Wins! ${computerChoice} beats ${playerChoice}`;
            result.textContent = `${computerChoice}`
            computerScore++
            computerPoints.textContent = `${computerScore}`
        }
        gameIsOver()       
    }    

}  
             
function gameIsOver(){
    if( playerScore === 5 ){
        resultText.textContent = `Player Wins!`
        isAlive = false
    } else if (computerScore === 5) {
        resultText.textContent = `Computer Wins!`
        isAlive = false
    }    
}

btnRst.addEventListener("click", function(){    
        playerChoice = ""
        computerChoice = ""
        playerScore = ""
        computerScore = ""
        result.textContent = "✊"
        resultText.textContent = "Let's Play!"
        computerPoints.textContent = "0"
        playerPoints.textContent = "0"
        isAlive = true        
    }    
)
