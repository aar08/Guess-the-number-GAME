let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const message = document.getElementById("message");
    const attemptsText = document.getElementById("attempts");
    const restartBtn = document.getElementById("restartBtn");

    let guess = Number(guessInput.value);

    if (!guess || guess < 1 || guess > 100) {
        message.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attempts++;

    if (guess < randomNumber) {
        message.textContent = " Too low! Try again.";
    } else if (guess > randomNumber) {
        message.textContent = " Too high! Try again.";
    } else {
        message.textContent = "Correct! You guessed the number!";
        attemptsText.textContent = `Attempts: ${attempts}`;
        restartBtn.style.display = "inline-block";
    }

    attemptsText.textContent = `Attempts: ${attempts}`;
    guessInput.value = "";
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
    document.getElementById("restartBtn").style.display = "none";
}
