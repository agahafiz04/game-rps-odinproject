//  Planning
// 1. Do it have an interface? // Yes, later on
// 2. Where input is getting from? // From player
// 3. What is the output outcome? // Random between player and computer
// 4. How to process the input to become the output? // Using random method

let startGameString = `--- Welcome To Rock Paper Scissors Game Made With Javascript ---

1. To Play The Game Please Insert A String Between Rock, Paper, and Scissors
2. There Will Be 5 Round To Determine The Winner
3. Done 

Enjoy The Game!

`;

console.log(startGameString);

// Initialize variable
let score = 0;

// Randomize function to get computer choice
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

// Get player choice from prompt input
function getPlayerChoice() {
  let playerChoice = prompt(
    `--- Welcome To Rock Paper Scissors Game Made With Javascript ---

  1. Please Insert A String Between Rock, Paper, and Scissors
  2. There Will Be 5 Round To Determine The Winner
  3. Done 

  Enjoy The Game!
  
  Insert your choice below...`
  );

  return playerChoice;
}

// Base game function that runs and calculating the output based of the input
function playGame(playerSelection, computerSelection) {
  let equalStringPlayer =
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  let equalStringComputer =
    computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

  if (
    (equalStringPlayer === "Rock" && equalStringComputer === "Scissors") ||
    (equalStringPlayer === "Paper" && equalStringComputer === "Rock") ||
    (equalStringPlayer === "Scissors" && equalStringComputer === "Paper")
  ) {
    score += 1;
    return `You Choose ${equalStringPlayer}, The Enemy Choose ${equalStringComputer}. Congratulation you win this round!`;
  } else if (
    (equalStringComputer === "Rock" && equalStringPlayer === "Scissors") ||
    (equalStringComputer === "Paper" && equalStringPlayer === "Rock") ||
    (equalStringComputer === "Scissors" && equalStringPlayer === "Paper")
  ) {
    return `You Choose ${equalStringPlayer}, The Enemy Choose ${equalStringComputer}. Sorry, you lose the round`;
  } else if (equalStringPlayer === equalStringComputer) {
    return `You Choose ${equalStringPlayer}, The Enemy Choose ${equalStringComputer}. Its a draw round...`;
  } else {
    return `You Choose ${equalStringPlayer}, The Enemy Choose ${equalStringComputer}. Please enter a valid play`;
  }
}

// Set the output based of the score
function SetScore() {
  if (score < 3) {
    console.log(`You Lose, Try Again? (Total Score ${score})`);
  } else {
    console.log(`You win! (Total Score ${score})`);
  }
}

// Call the base function 5 times and calculate the final score
function gamePlay() {
  for (let i = 0; i < 5; ++i) {
    let playerPlay = getPlayerChoice();
    let computerPlay = getComputerChoice();
    let play = playGame(playerPlay, computerPlay);
    console.log(play);
  }
  SetScore();
  return;
}

// Invoke function
gamePlay();
