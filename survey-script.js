document.getElementById("surveyForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const mood = document.getElementById("mood").value;
    const stressLevel = parseInt(document.getElementById("stressLevel").value);

    // Determine the appropriate section to show/hide
    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");
    const section3 = document.getElementById("section3");

    if (stressLevel >= 1 && stressLevel <= 3) {
        section1.style.display = 'block';
        section2.style.display = 'none';
        section3.style.display = 'none';
    } else if (stressLevel >= 4 && stressLevel <= 7) {
        section1.style.display = 'none';
        section2.style.display = 'block';
        section3.style.display = 'none';
    } else if (stressLevel >= 8 && stressLevel <= 10) {
        section1.style.display = 'none';
        section2.style.display = 'none';
        section3.style.display = 'block';
    }

    // Display the "Proceed to Exercises" button
    document.getElementById("proceedButton").style.display = 'block';

    // Display the "Submit Answers" button
    document.getElementById("submitAnswersButton").style.display = 'block';
});

// Function to handle redirection
function redirectToExercises() {
    const mood = document.getElementById("mood").value;
    const stressLevel = parseInt(document.getElementById("stressLevel").value);

    // You can perform additional logic or send the data to a server here

    // Redirect to the exercises page
    window.location.href = `exercises.html?mood=${mood}&stressLevel=${stressLevel}`;
}
