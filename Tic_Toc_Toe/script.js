let boxes = document.querySelectorAll('.box')
let reset_btn = document.querySelector('#reset-btn')
let newGamebtn = document.querySelector('#new-btn')
let msgContainer = document.querySelector('.msg-container')
let playerTurn = document.querySelector('#turns_track')
let msg = document.querySelector('#msg')
let turn0 = true; //tracking the turn of the player

let wining_patterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];
//checking if box is empty
boxes.forEach((box) => {
  //adding a event listerner if the box is click
  box.addEventListener('click', () => {
    console.log('box is clicked')
    if (turn0) {
      box.style.color = 'blue'
      playerTurn.innerText = `Player X Turn`
      box.innerHTML = 'O'

      turn0 = false
    } else {
      turn0 = true;
      box.style.color = 'black'
      playerTurn.innerText = `Player O Turn`
      box.innerHTML = 'X'
      
    }
    box.disabled = true
    checkwinner();
  })
})

//check winner is found after clicking it
const checkwinner = function () {
  let winnerFound = false;

  for (let patterns of wining_patterns) {
    let pos1 = boxes[patterns[0]].innerText
    let pos2 = boxes[patterns[1]].innerText
    let pos3 = boxes[patterns[2]].innerText;

    if (pos1 != '' && pos2 != '' && pos3 != '') {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
        winnerFound = true;
        return;
      }
    }
  }
  //if winner is not found
  if (!winnerFound) {
    checkDraw();
  }
}
//check if the draw is happened
function checkDraw() {
  let filled = true;

  boxes.forEach((box) => {
    if (box.innerText === '') {
      filled = false;
    }
  });

  if (filled) {
    msg.innerText = "It's a Draw!";
    playerTurn.classList.add('hide')
    msgContainer.classList.remove('hide');
  }
}
//show winner
function showWinner(winner) {
  msg.innerText = `Congrats Winner is player ${winner}!`
  msgContainer.classList.remove('hide');
  playerTurn.classList.add('hide')
  disableBoxes();
}
//after declaring boxes should be disabled so that the winner shouldn't change
function disableBoxes() {
  for (let box of boxes) {
    box.disabled = true
  }
}
//enable boxes after clicking on reset or start
function enableBoxes() {
  for (let box of boxes) {
    box.disabled = false
    box.innerText = ''
    playerTurn.classList.remove('hide')
    msgContainer.classList.add('hide');
  }
}
//reset the whole game
function resetGame() {
  turn0 = true
  playerTurn.innerText = `Player O Turn`
  enableBoxes()
}

newGamebtn.addEventListener('click', resetGame)
reset_btn.addEventListener('click', resetGame)
