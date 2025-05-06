let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll('.choice')
const msg = document.querySelector('#msg')
const compScoreTracker = document.querySelector('#comp')
const userScoreTracker = document.querySelector('#user')
const resetbtn = document.querySelector('#reset-btn')
let userChoice, computerChoice;
let gameChoice = ['Rock', 'Paper', 'Scissors']
//checking if the button is clicked
choices.forEach(function(choice) {
    console.log(choice)
    choice.addEventListener( 'click' ,function() {
       let choiceId = choice.getAttribute('id')
       console.log(choiceId)
       countChoice(choiceId)
    })
})
//converting the choice into number
function countChoice(choiceId) {
    if(choiceId == 'rock')
        userChoice = 0;
    else if(choiceId == 'paper')
        userChoice = 1
    else
        userChoice = 2
    // console.log(userChoice)
    computerMove(userChoice);    
}
//generate a computers move
function computerMove(userChoice) {
    computerChoice = Math.floor(Math.random() * 3)
    // console.log(computerChoice)
    playGame(userChoice, computerChoice)
}
//show winner
function showWinner(userWin) {
    if(userWin) {
        // console.log("You won!")
         msg.style.backgroundColor = "green"
         userScore++;
        userScoreTracker.innerText = `${userScore}`
        msg.innerText = `You Won! Your ${gameChoice[userChoice]} beats ${gameChoice[computerChoice]}.`
    } else {
        msg.innerText = `You Lost. ${gameChoice[computerChoice]} beats your ${gameChoice[userChoice]}`
        compScore++;
        compScoreTracker.innerText = `${compScore}`
        
         msg.style.backgroundColor = "red"
        // console.log("Comp won!")
    }

}
//check if the game is draw
function drawGame() {
    msg.innerText = "Game was draw. Play again"
    msg.style.backgroundColor = "orange"
    // console.log("Game was draw")
}
//playgame compares the choice
function playGame(userChoice, computerChoice) {
    if (userChoice == computerChoice){
        drawGame()
    } else {
        let userWin = true 
        if(userChoice === 0) {
            //scissors, paper
             userWin = computerChoice === 1 ? false : true

        } else if (userChoice === 1) {
            //rock, scissors
            userWin = computerChoice === 2 ? false : true

        } else {
            //rock, paper
            userWin = computerChoice == 0 ? false : true
        }
        showWinner(userWin);
    }
}
//reset game resets the whole game
function resetGame () {
    userScore = 0;
    compScore = 0;
    msg.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    msg.innerText = "Play Your Move"
    userScoreTracker.innerText = '0'
    compScoreTracker.innerText = '0'
}
resetbtn.addEventListener('click', resetGame)
//if u-> 0 c-> 1 -> c wins
//if u-> 1 c -> 2 -> c wins
//if u -> 2 c -> 0