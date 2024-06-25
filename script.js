function startGame() {
    let roundCounter = 0;
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice;
    let computerChoice;
    let roundWinnerMessage;
    let roundTimeout;
    let gameWinner;
    const rpsButtons = document.querySelectorAll(".rps-button");

    rpsButtons.forEach(rpsButton => {
        rpsButton.addEventListener("click", handleButtonClick);
    });

    function handleButtonClick() {
        clearTimeout(roundTimeout);
        if (roundCounter < 5) {
            humanChoice = this.value;
            resetButtons();
            getComputerChoice();
            determineRoundWinner();
            buttonUpdate();
            iconUpdate();
            textUpdate();
            roundCounter++;
            if (roundCounter === 5) {
                determineGameWinner();
                displayGameWinner();
            }
        }
        roundTimeout = setTimeout(resetButtons, 2000);
    }

    function resetButtons() {
        document.querySelectorAll('.rps-button').forEach(button => {
            button.style.background = "";
        });
        document.querySelectorAll('.choice-icons img').forEach(icon => {
                icon.style.display = "none";
        });
    }
    
    function getComputerChoice() {
        const randomNumber = Math.random();
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
        computerChoice = choice;
    }
    
    function determineRoundWinner() {
        const winConditions = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper"
        };
    
        if (computerChoice === humanChoice) {
            roundWinnerMessage = "nobody wins";
        } else if (winConditions[humanChoice] === computerChoice) {
            humanScore++;
            roundWinnerMessage = "you win";
        } else {
            computerScore++;
            roundWinnerMessage = "you lose";
        }
    }
    
    function buttonUpdate() {
        if (roundWinnerMessage === "you win") {
            document.querySelector(`#${humanChoice}-button`).style.background = "#7BE0AD";
            document.querySelector(`#${computerChoice}-button`).style.background = "#EB5160";
        }
        else if (roundWinnerMessage === "nobody wins")
            document.querySelector(`#${humanChoice}-button`).style.background = "#FFB347";
        else {
            document.querySelector(`#${humanChoice}-button`).style.background = "#EB5160";
            document.querySelector(`#${computerChoice}-button`).style.background = "#7BE0AD";
        }
    }
    
    function iconUpdate() {
        document.querySelector(`.${humanChoice}-button .choice-icons #human-icon`).style.display = "inline";
        document.querySelector(`.${computerChoice}-button .choice-icons #computer-icon`).style.display = "inline";
    }

    function textUpdate() {
        document.querySelector(".scoreText").innerText += `\n round: ${roundCounter+1}: ${humanChoice} vs ${computerChoice}: ${roundWinnerMessage}!`;
    }

    function determineGameWinner() {
        if (computerScore > humanScore) {
            gameWinner = "the computer";
        }
        else if (humanScore > computerScore) {
            gameWinner = "you";
        }
        else {
            gameWinner = "nobody";
        }
    }

    function displayGameWinner() {
        document.querySelector(".announcement h2").innerText = `The winner is ${gameWinner}!`;
        document.querySelector(".reset-button").style.visibility = "visible";
    }
}

startGame();