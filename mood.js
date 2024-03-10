document.getElementById("moodForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    var feeling = document.getElementById("feeling").value;
    var reason = document.getElementById("reason").value;
    var enjoyable = document.getElementById("enjoyable").value;
    var energy = document.getElementById("energy").value;
    var sleep = document.getElementById("sleep").value;
    var activities = [];
    var checkboxes = document.querySelectorAll('input[name="activities"]:checked');
    checkboxes.forEach(function(checkbox) {
        activities.push(checkbox.value);
    });
    var meals = document.getElementById("meals").value;
    var contact = document.getElementById("contact").value;

    // Save data locally
    var logEntry = {
        date: new Date().toLocaleString(),
        feeling: feeling,
        reason: reason,
        enjoyable: enjoyable,
        energy: energy,
        sleep: sleep,
        activities: activities,
        meals: meals,
        contact: contact
    };
    var logs = JSON.parse(localStorage.getItem("moodLogs")) || [];
    logs.push(logEntry);
    localStorage.setItem("moodLogs", JSON.stringify(logs));

    // Display log
    displayLogs();
});

function displayLogs() {
    var logs = JSON.parse(localStorage.getItem("moodLogs")) || [];
    var logContainer = document.getElementById("log");
    logContainer.innerHTML = "";

    logs.forEach(function(entry) {
        var logEntry = document.createElement("div");
        logEntry.innerHTML = "<strong>Date:</strong> " + entry.date +
                             "<br><strong>Feeling:</strong> " + entry.feeling +
                             "<br><strong>Reason:</strong> " + entry.reason +
                             "<br><strong>Enjoyable activity:</strong> " + entry.enjoyable +
                             "<br><strong>Energy level:</strong> " + entry.energy +
                             "<br><strong>Sleep quality:</strong> " + entry.sleep +
                             "<br><strong>Activities:</strong> " + entry.activities.join(", ") +
                             "<br><strong>Meals:</strong> " + entry.meals +
                             "<br><strong>Last contact with a friend:</strong> " + entry.contact +
                             "<hr>";
        logContainer.appendChild(logEntry);
    });
}

// Display logs on page load
displayLogs();
