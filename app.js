// Get the elements
const rockImg = document.getElementById("rock_img");
const paperImg = document.getElementById("paper_img");
const scissorImg = document.getElementById("scissor_img");
const messageElement = document.getElementById("mesg");
const userScoreElement = document.getElementById("user_scoreboard");
const compScoreElement = document.getElementById("comp_scoreboard");
const compChoiceElement = document.getElementById("computer_choice");

let userScore = 0;
let compScore = 0;

// Function to get computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        return "Congratulations You win!";
    } else {
        compScore++;
        return "Oops, you lose!";
    };
};

// Function to handle user's choice
function handleUserChoice(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    messageElement.textContent = result;
    userScoreElement.textContent = userScore;
    compScoreElement.textContent = compScore;
    compChoiceElement.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
};

// Event listeners for user's choice
rockImg.addEventListener("click", () => handleUserChoice("rock"));
paperImg.addEventListener("click", () => handleUserChoice("paper"));
scissorImg.addEventListener("click", () => handleUserChoice("scissors"));
