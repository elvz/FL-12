// Your code goes here
const askToPlay = confirm('Do you want to play a game?');

const prize = 100;
const maxNumber = 8;
const prizeMuliple = 2;
const divider = 2;
const maxNumberGrowth = 4;

if (!askToPlay) {
  alert('You did not become a billionaire, but can.');
} else {
  playGame();
}

function playGame() {
  let startPrize = prize;
  let maxNum = maxNumber;
  let totalPrize = 0;
  let buzz = true;

  while (buzz) {
    let machineNumber = Math.floor(Math.random() * maxNum);
    let userInput;
    let currentPrize = startPrize;

    for (let i = 3; i > 0; i--) {
      userInput = +prompt(
        `Choose a roulette pocket number from 0 to ${maxNum}
        Attempts left: ${i}
        Total prize: ${totalPrize}
        Possible prize on current attempt ${currentPrize}`
      );
      if (userInput === machineNumber) {
        totalPrize += currentPrize;
        if (confirm(
          `Congratulation, you won!
          Your prize is: ${currentPrize}$. 
          Do you want to continue?`
        )) {
          maxNum += maxNumberGrowth;
          startPrize *= prizeMuliple;
          break;
        } else {
          alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
          buzz = false;
          break;
        }
      } else if (i > 1) {
        currentPrize /= divider;
      } else {
        alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
        if (confirm('Do you want play again?')) {
          maxNum = maxNumber;
          totalPrize = 0;
          startPrize = prize;
          continue;
        } else {
          buzz = false;
        }
      }
    }
  }
}
