let gameStarted = false;
let userScore = 0;
let compScore = 0;
let rounds = 5;
let gameArr = ["scissor","paper","rock"];

let startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", function(event) {
  
    if( gameStarted == false){
        gameStarted = true;
        // console.log("game was started");
    }
    if(event.target.nodeName == "BUTTON"){
        let delStart = event.target.parentElement;
        delStart.remove();
    }
    compChance();
})


function compChance() {
    let num = Math.floor(Math.random()*3);
    compMove = gameArr[num];
    console.log("computer move = ", compMove);
    
}




let Rounds = document.querySelector(".round-left");
let gameBeat = document.querySelector(".game-text");
let Score = document.querySelector(".user-Score");
let computerScore = document.querySelector(".comp-Score");
let Winner = document.querySelector(".winner");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let gameRestart = document.querySelector(".game-start");
let imgBtns = document.querySelectorAll(".img");


for(imgBtn of imgBtns){
    imgBtn.addEventListener("click", function(event) {
        scissor(event);
        paper(event);
        rock(event);
        setTimeout(function() {
            result();
        },2000);
    });
};

function result() {
    if(rounds === 0){
        if(userScore > compScore){
            h1.insertAdjacentElement("beforebegin",gameRestart);
            gameRestart.innerHTML = `<p style="color:green;">Congraulations! you won the game. </br>Your score was ${userScore}</p>`;
            gameRestart.appendChild(startBtn);
            startBtn.innerText = "Play Again";
            reset();
        }
        else if(userScore == compScore){
            h1.insertAdjacentElement("beforebegin",gameRestart);
            gameRestart.innerHTML = `<p style="color:black;">OOPS! It's was Draw. <br>Try Again</p>`;
            gameRestart.appendChild(startBtn);
            startBtn.innerText = "Play Again";
            reset();
        }
        else{
            h1.insertAdjacentElement("beforebegin",gameRestart);
            gameRestart.innerHTML = `<p style="color:red;">Bad Luck! Computer won the game. </br>Computer score was ${compScore}</p>`;
            gameRestart.appendChild(startBtn);
            reset();
        }
    }
}

let userScissor;
function scissor(event) {
    if(event.target.alt == "scissor") {
        userScissor = "scissor";
        // console.log("scissor");
        if(compMove == userScissor) {
        //    console.log("tie");
           gameBeat.innerHTML = `<span style="color:orange;">it's a tie.</span> Pick your move again`;
           drawColor();
           playdrawSound();
           roundLeft();
           compChance();
        }
        else if(userScissor && compMove == "paper") {
        //    console.log("scissor beats paper");
           gameBeat.innerHTML = `<span style="color:green;">scissor beats paper.</span> Pick your move again`;
           winColor();
           playWinSound();
           userscore();
           roundLeft();
           compChance();
        }
        else {
        //    console.log("rocks beats scissor");
           gameBeat.innerHTML = `<span style="color:red;">rocks beats scissor.</span> Pick your move again`;
           loseColor();
           playlooseSound();
           compscore();
           roundLeft();
           compChance();
        }
   }
}

let userPaper;
function paper(event) {
    if(event.target.alt == "paper") {
        userPaper = "paper"
        // console.log("paper");
        if(compMove == userPaper) {
            // console.log("tie");
            gameBeat.innerHTML = `<span style="color:orange;">it's a tie.</span> Pick your move again`;
            drawColor();
            playdrawSound();
            roundLeft();
            compChance();
         }
         else if(userPaper && compMove == "rock") {
            // console.log("paper beats rock");
            gameBeat.innerHTML = `<span style="color:green;">paper beats rock.</span> Pick your move again`;
            winColor();
            playWinSound();
            userscore();
            roundLeft();
            compChance();
         }
         else {
            // console.log("scissor beats paper");
            gameBeat.innerHTML = `<span style="color:red;">scissor beats paper.</span> Pick your move again`;
            loseColor();
            playlooseSound();
            compscore();
            roundLeft();
            compChance();
         }
    }
}

let userRock;
function rock(event) {
    if(event.target.alt == "rock") {
        userRock = "rock";
        // console.log("rock");
        if(compMove == userRock) {
            // console.log("tie");
            gameBeat.innerHTML = `<span style="color:orange;">it's a tie.</span> Pick your move again`;
            drawColor();
            playdrawSound();
            roundLeft();
            compChance();
         }
         else if(userRock && compMove == "scissor") {
            // console.log("rock beats scissor");
            gameBeat.innerHTML = `<span style="color:green;">rock beats scissor.</span> Pick your move again`;
            winColor();
            playWinSound();
            userscore();
            roundLeft();
            compChance();
         
        }
        else {
            // console.log("paper beats rock");
            gameBeat.innerHTML = `<span style="color:red;">paper beats rock.</span> Pick your move again`;
            loseColor();
            playlooseSound();
            compscore();
            roundLeft();
            compChance();
         }
    }
}
function winColor() {
    body.style.backgroundColor = "green";
    setTimeout(function(){
        body.style.backgroundColor = "white";
    },150)
}
function loseColor() {
    body.style.backgroundColor = "red";
    setTimeout(function(){
        body.style.backgroundColor = "white";
    },150)
}
function drawColor() {
    body.style.backgroundColor = "orange";
    setTimeout(function(){
        body.style.backgroundColor = "white";
    },150)
}
function roundLeft() {
    rounds--;
    Rounds.innerText = `Round Left = ${rounds}`;
}
function userscore() {
    userScore++;
    Score.innerText = `Your Score = ${userScore}`;
}
function compscore() {
    compScore++;
    computerScore.innerText = `Computer Score = ${compScore}`;
}
function reset() {
    gameStarted = false;
    userScore = 0;
    compScore = 0;
    rounds = 5;
    Score.innerText = `Your Score = 0`;
    computerScore.innerText = `Computer Score = 0`;
    Rounds.innerText = `Round Left = ${rounds}`;
    gameBeat.innerText = "pick your move";
    compChance();
}
const winSound = new Audio("win.wav");
function playWinSound() {
    winSound.play();
}
const looseSound = new Audio("loose.wav");
function playlooseSound() {
    looseSound.play();
}
const drawSound = new Audio("draw.wav");
function playdrawSound() {
    drawSound.play();
}