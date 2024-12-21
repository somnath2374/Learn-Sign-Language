// Initially hide the lesson content
document.getElementById("lessonContent").classList.add("hidden");

// Event listener for the "Take Lesson" button
document.getElementById("takeLessonBtn").addEventListener("click", () => {
    // Show the lesson content and hide the "Take Lesson" button
    document.getElementById("lessonContent").classList.remove("hidden");
    document.getElementById("takeLessonBtn").classList.add("hidden");
});

// Event listener for the "Take Quiz" button
document.getElementById("takeQuizBtn").addEventListener("click", () => {
    window.location.href = "quiz.html"; // Navigate to quiz.html
});
