
let playerOneScore = 0
let playerTwoScore = 0
let playerOneTurn = true

const playerOneDice = document.getElementById("player1dice")
const playerTwoDice = document.getElementById("player2dice")
const playerOneScoreboard = document.getElementById("player1Scoreboard")
const playerTwoScoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showDisplayButton(){
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

rollBtn.addEventListener("click", function(){
   let randomNumber = Math.floor(Math.random() * 6) + 1

   if(playerOneTurn){
    playerOneScore += randomNumber
    playerOneScoreboard.textContent = playerOneScore
    playerOneDice.textContent = randomNumber
    playerOneDice.classList.remove("active")
    playerTwoDice.classList.add("active")
    message.textContent = "Player Two's Turn"
   }
   else{
    playerTwoScore += randomNumber  
    playerTwoScoreboard.textContent = playerTwoScore 
    playerTwoDice.textContent = randomNumber
    playerTwoDice.classList.remove("active")
    playerOneDice.classList.add("active")
    message.textContent = "Player One's Turn"
   }

   if(playerOneScore >= 20){
       message.textContent = "Player 1 has won 🥳"
       showDisplayButton()
   }else if(playerTwoScore >= 20){
    message.textContent = "Player 2 has won 🎉"
    showDisplayButton()
   }
   playerOneTurn = !playerOneTurn
})

resetBtn.addEventListener("click", function(){
    reset()
})
function reset(){
    message.textContent = "Player One's Turn"
    playerOneScoreboard.textContent = 0
    playerTwoScoreboard.textContent = 0
    playerOneDice.textContent = "-"
    playerTwoDice.textContent = "-"
    playerOneScore = 0
    playerTwoScore = 0
    playerOneTurn = true
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    playerTwoDice.classList.remove("active")
    playerOneDice.classList.add("active")
}