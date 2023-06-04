`use strict`

//getting html elements and storing them in a variable 
const userInput = document.getElementById(`guessfield`);
const submitBtn = document.getElementById(`btn`);
const reSetBtn = document.getElementById(`reSet`);
const hintTo = document.getElementById(`hint`);
const startBtn = document.getElementById('startBtn');
const watch = document.getElementById('num'); 
const tScore = document.getElementById('score');

//declaring variable 
let score = 0;
let running = true;
let numAttempt = 0;

reSetBtn.onclick = reSet;


//function to reset the game
function reSet() {
    location.reload();
}


startBtn.onclick = startGame;

//declaring start game function 
function startGame() {
          

          if(running) {
            hintTo.textContent = 'You have five guesses';
            userInput.addEventListener('focus', () => {
              if(countt()) {
                  playGame();
              }else {
                  running = false;
              }
            });
        }
    } 

//declaring numner of attempt function
function countt() {
    if(running) {
        numAttempt++
        console.log(numAttempt);
        watch.textContent = numAttempt;
        if(numAttempt > 5) {
            running = false;
            watch.textContent = 0;

        }
    }
    return running
}


function playGame() {
//computer choose a random number
    const answer = Math.floor(Math.random() * 5 + 1);
    console.log(answer);
//click to check for result
    submitBtn.onclick = checkResult;
//check result function
    function checkResult() {
        let userGuess = userInput.value;   
        if(userGuess == answer){
            score++
            hintTo.textContent = (`Congratulation, Your score is ${score}`);
            hintTo.style.color = "lightgreen";
            tScore.textContent = score;
        }else {
            hintTo.textContent = 'You lost!';
            hintTo.style.color = "red";

        }  
    }
//hint
    if(answer < 3) {
        hintTo.innerHTML = 'Hint: x < 3, Good luck';
        hintTo.style.color = "white"
    }else{
        hintTo.textContent = 'Hint: x > 2, Good luck';
        hintTo.style.color = "white";
    }
}

