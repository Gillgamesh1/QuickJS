const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoice = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoice.forEach(possibleChoice = addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    genComputerChoices()
    getResult()
}))

function genComputerChoices(){
    const randomNumber = Math.floor(Math.random() * possibleChoice.length) + 1

    if (randomNumber === 1) {
        computerChoice = 'Rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'Paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'Scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){

    if (computerChoice === userChoice){
        result = 'Its a Tie ! '
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper'){
        result = 'You Win ! '
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors'){
        result = 'You Lose ! '
    }if (computerChoice === 'Scissors' && userChoice === 'Paper'){
        result = 'You Lose ! '
    }if (computerChoice === 'Scissors' && userChoice === 'Rock'){
        result = 'You Lose ! '
    }if (computerChoice === 'Paper' && userChoice === 'Rock'){
        result = 'You Lose ! '
    }if (computerChoice === 'Paper' && userChoice === 'Scissors'){
        result = 'You Win ! '}
        
        resultDisplay.innerHTML = result
}