let score = 0; // Initial score
const handSigns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let currentSign = "";

// Function to generate a random hand sign
function generateRandomSign() {
    const randomIndex = Math.floor(Math.random() * handSigns.length);
    currentSign = handSigns[randomIndex];
    document.getElementById("quizImage").src = `hand_signs/${currentSign}.png`;
}

// Event listener for the "Submit Answer" button
document.getElementById("submitAnswerBtn").addEventListener("click", () => {
    const userAnswer = document.getElementById("answerInput").value.toUpperCase();
    if (userAnswer === currentSign) {
        score++;
        document.getElementById("resultMessage").innerText = "Correct! Well done.";
    } else {
        document.getElementById("resultMessage").innerText = `Wrong! The correct answer is ${currentSign}.`;
    }

    // Update the score and generate a new random sign
    document.getElementById("score").innerText = score;
    generateRandomSign();
});

// Event listener for the "Go Back to Lessons" button
document.getElementById("goBackToLessonsBtn").addEventListener("click", () => {
    window.location.href = "index.html"; // Navigate back to the lesson page
});

// Generate the first random sign when the quiz page loads
generateRandomSign();
