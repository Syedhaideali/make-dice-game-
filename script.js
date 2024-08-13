// Secret number between 1 and 6
const secretNumber = Math.floor(Math.random() * 6) + 1;
let attempts = 0;
const maxAttempts = 2;

document.getElementById('guess-btn').addEventListener('click', () => {
    const userGuess = parseInt(document.getElementById('user-guess').value);
    const resultDiv = document.getElementById('result');
    attempts++;

    if (userGuess === secretNumber) {
        if (attempts === 1) {
            resultDiv.textContent = `Correct! You guessed the secret number on your first attempt. You earned 6 points!`;
        } else {
            resultDiv.textContent = `Correct! You guessed the secret number on your second attempt. You earned 3 points!`;
        }
        resetGame();
    } else {
        if (attempts < maxAttempts) {
            resultDiv.textContent = `Incorrect! Try again.`;
        } else {
            resultDiv.textContent = `Sorry, you failed to guess the secret number. The correct number was ${secretNumber}.`;
            resetGame();
        }
    }
});

function resetGame() {
    document.getElementById('guess-btn').disabled = true;
    setTimeout(() => {
        location.reload(); // Reload the page to reset the game
    }, 3000);
}
