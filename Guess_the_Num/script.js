let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
//if the input is not a number or greater than range or less than range
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
//checking the guess
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}
//displays all guesses 
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}
//display msg
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
//end game when winner is decided
function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.innerHTML = ''
 const NewGameButton = document.createElement('button')
 NewGameButton.id = 'newGame'
 NewGameButton.textContent = 'Start New Game'
 NewGameButton.style.cursor = 'pointer'
 NewGameButton.classList.add('guessSubmit')
  p.appendChild(NewGameButton)
  startOver.appendChild(p)
  playGame = false
  newGame()  
}

//setting up the new game
function newGame() {
  const  newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e) {
    randomNumber = parseInt(Math.random() * 100 + 1);   
    prevGuess = []
    numGuess = 1
    lowOrHi.innerHTML = ''
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess} `
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true 
  })
}