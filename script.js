console.log("Hello World!")

// Declare all 
let computerChoice;
let humanChoice;
let winner;
let computerScore;
let humanScore;

// Generate a number which generates random rock paper scissors choice
function computerChoiceGenerator() {
    const randomNumber = Math.random() * 3;
    let choice;
    if (randomNumber < 1/3) {
        choice = "rock";
    }
    else if (randomNumber < 2/3) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    return choice;
}

// Get human choice
function humanChoiceGenerator() {
    let choice = prompt("Please enter rock, paper, or scissors").toLowerCase();
    while(choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Please select a valid choice")
    }
    return choice;
}

// Pit computerChoice and humanChoice against each other
function playRound(choiceOne, choiceTwo) {
    if (choiceOne === choiceTwo) {
        console.log("Draw!");
    }
    else if (choiceOne === "rock" && choiceTwo === "paper") {
        console.log("You win!");
        humanScore++;
    }
    else if (choiceOne === "rock" && choiceTwo == "scissors") {
        console.log("You lose!");
        computerScore++;
    }
    else if (choiceOne === "paper" && choiceTwo === "rock") {
        console.log("You lose!");
        computerScore++;
    }
    else if (choiceOne === "paper" && choiceTwo === "scissors") {
        console.log("You win!");
        humanScore++;
    }
    else if (choiceOne === "scissors" && choiceTwo === "rock") {
        console.log("You win!");
        computerScore++;
    }
    else {
        console.log("You lose!");
        computerScore++;
    }
}

// Declare function that plays the game for as many rounds as I need
function playGame(rounds) {
    computerScore = 0;
    humanScore = 0;
    for(i = 0; i < rounds; i++) {
        computerChoice = computerChoiceGenerator();
        humanChoice = humanChoiceGenerator();
        playRound(computerChoice, humanChoice);
    }
    if(computerScore === humanScore) {
        winner = "noone"
    }
    else if (computerScore > humanScore) {
        winner = "the computer"
    }
    else {
        winner = "you"
    }
    console.log(`Your score is: ${humanScore}, the computer's score is ${computerScore}. The winner is ${winner}!`)
}

playGame(5);

