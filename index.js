//  Planning
// 1. Do it have an interface? // Yes, later on
// 2. Where input is getting from? // From player
// 3. What is the output outcome? // Random between player and computer
// 4. How to process the input to become the output? // Using random method

// Querying DOM
const startButton = document.querySelector(".description .start");
const menuButton = document.querySelector(".menu");
const restartButton = document.querySelector(".restart");
const battleSectionEl = document.querySelector(".battle-section");
const resultSectionEl = document.querySelector(".result");
const descriptionEl = document.querySelector(".description");
const titleEl = document.querySelector(".title");
console.log(titleEl);

//Start Game
startButton.addEventListener("click", startGame);

function startGame() {
  descriptionEl.setAttribute("style", "display:  none");
  battleSectionEl.setAttribute("style", "display: flex");
  resultSectionEl.setAttribute("style", "display: flex");
  menuButton.setAttribute("style", "display: block");
  titleEl.setAttribute("style", "display:  none");
}

//Back To Menu
menuButton.addEventListener("click", backToMenu);

function backToMenu() {
  descriptionEl.setAttribute("style", "display:  flex");
  battleSectionEl.setAttribute("style", "display: none");
  resultSectionEl.setAttribute("style", "display: none");
  menuButton.setAttribute("style", "display:  none");
  titleEl.setAttribute("style", "display:  block");
}

// Restart Game
restartButton.addEventListener("click", restart);

function restart() {
  score = 0;
  functionCalled = 0;
  playerChoice = "";
  computerChoice = "";

  paraEl.textContent = "";
  imgOne.setAttribute("src", "");
  imgTwo.setAttribute("src", "");
  scoreEl.textContent = "";
  allButton.forEach((e) => {
    e.setAttribute("style", "pointer-events: auto");
  });

  console.log("Restart Dipencet");
}

// Initialize variable
let score = 0;
let functionCalled = 0;
let playerChoice = "";
let computerChoice = "";

// Computer random choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// Base game function that runs and calculating the output based of the input
function playGame(playerSelection, computerSelection) {
  playerChoice = playerSelection;
  computerChoice = computerSelection;

  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    score++;
    return `You Choose ${playerSelection}, The Enemy Choose ${computerSelection}. Congratulation you win this round!`;
  } else if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")
  ) {
    return `You Choose ${playerSelection}, The Enemy Choose ${computerSelection}. Sorry, you lose the round`;
  } else if (playerSelection === computerSelection) {
    return `You Choose ${playerSelection}, The Enemy Choose ${computerSelection}. Its a draw round...`;
  } else {
    return `You Choose ${playerSelection}, The Enemy Choose ${computerSelection}. Please enter a valid play`;
  }
}

// Set the output based of the score
function setScore() {
  if (functionCalled >= 5) {
    allButton.forEach((e) => {
      e.setAttribute("style", "pointer-events: none");
    });

    if (score < 3) {
      return `You Lose, Try Again? (Total Score : ${score})`;
    } else {
      return `You win! (Total Score : ${score})`;
    }
  }
}

// Call the base function and calculate the final score
function gamePlay(playChoose) {
  if (playChoose === "Rock") {
    let play = playGame("Rock", getComputerChoice());
    functionCalled++;
    return play;
  } else if (playChoose === "Paper") {
    let play = playGame("Paper", getComputerChoice());
    functionCalled++;
    return play;
  } else if (playChoose === "Scissors") {
    let play = playGame("Scissors", getComputerChoice());
    functionCalled++;
    return play;
  }
}

// Show Battle
const paraEl = document.querySelector(".result h2");
const imgOne = document.querySelector(".img-one");
const imgTwo = document.querySelector(".img-two");
const scoreEl = document.querySelector(".score-text");
console.log(scoreEl);

function showText(textContent, playerImg, computerImg) {
  paraEl.textContent = textContent;

  if (playerImg === "Rock") {
    imgOne.setAttribute("src", "images/rock.png");
    console.log(imgOne);
  } else if (playerImg === "Paper") {
    imgOne.setAttribute("src", "images/paper.png");
    console.log(imgOne);
  } else {
    imgOne.setAttribute("src", "images/scissors.png");
    console.log(imgOne);
  }

  if (computerImg === "Rock") {
    imgTwo.setAttribute("src", "images/rock.png");
    console.log(imgTwo);
  } else if (computerImg === "Paper") {
    imgTwo.setAttribute("src", "images/paper.png");
    console.log(imgTwo);
  } else {
    imgTwo.setAttribute("src", "images/scissors.png");
    console.log(imgTwo);
  }

  scoreEl.textContent = setScore();
}

// Create New HTML Element

const newDiv = document.querySelector(".button-container");

const rockButton = document.createElement("button");
rockButton.classList.add("button", "one");
rockButton.textContent = "Button Rock";
rockButton.innerHTML = `<img src="images/rock.png" alt="" />`;
rockButton.addEventListener("click", function () {
  let game = gamePlay("Rock");
  showText(game, playerChoice, computerChoice);
  console.log(game);
});

const paperButton = document.createElement("button");
paperButton.classList.add("button", "two");
paperButton.textContent = "Button Paper";
paperButton.innerHTML = `<img src="images/paper.png" alt="" />`;
paperButton.addEventListener("click", function () {
  let game = gamePlay("Paper");
  showText(game, playerChoice, computerChoice);
  console.log(game);
});

const scissorsButton = document.createElement("button");
scissorsButton.classList.add("button", "three");
scissorsButton.textContent = "Button Scissors";
scissorsButton.innerHTML = `<img src="images/scissors.png" alt="" />`;
scissorsButton.addEventListener("click", function () {
  let game = gamePlay("Scissors");
  showText(game, playerChoice, computerChoice);
  console.log(game);
});

newDiv.append(rockButton, paperButton, scissorsButton);

const allButton = document.querySelectorAll(".button");
console.log(allButton);

function log() {
  console.log(this.classList.value);
}

// Task-To-Do Tomorrow (19-Aug-2023)
// Add Logic To End The Game When Reaching 5 Round
// When Reaching 5 Round User Cant Input From The Button Again (Except From The Restart Game Function)
// Add Logic To Restart Button
