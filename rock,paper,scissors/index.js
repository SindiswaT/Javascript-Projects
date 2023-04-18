const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let playerChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or use possibleChoices.length
    
    if(randomNumber === 1){
        computerChoice = '🪨'
    }
    else if(randomNumber === 2){
        computerChoice = '📃'
    }
    else{
        computerChoice = '✂'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === playerChoice){
        result = 'its a draw!'
    }
    else if(computerChoice === '🪨' && playerChoice === '📃'){
        result = 'you win!'
    }
    else if(computerChoice === '🪨' && playerChoice === '✂'){
        result = 'you lose!'
    }
    else if(computerChoice === '📃' && playerChoice === '✂'){
        result = 'you win!'
    }
    else if(computerChoice === '📃' && playerChoice === '🪨'){
        result = 'you lose!'
    }
    else if(computerChoice === '✂' && playerChoice === '🪨'){
        result = 'you win!'
    }
    else if(computerChoice === '✂' && playerChoice === '📃'){
        result = 'you lose!'
    }
    resultDisplay.innerHTML = result 
}