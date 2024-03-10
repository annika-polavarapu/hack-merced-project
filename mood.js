document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('moodForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get values from the form
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        // Handle checkboxes separately to ensure all selections are captured
        data.activities = formData.getAll('activities').join(', '); // Convert array to string for easier display
        const date = new Date().toLocaleDateString();
        data.date = date;

        // Save to local storage
        let moodHistory = JSON.parse(localStorage.getItem('moodHistory')) || [];
        moodHistory.push(data);
        localStorage.setItem('moodHistory', JSON.stringify(moodHistory));

        // Clear the form fields after submission
        event.target.reset();

        // Update UI with the new entry
        updateMoodHistoryUI();
    });

    function updateMoodHistoryUI() {
        const moodHistory = JSON.parse(localStorage.getItem('moodHistory')) || [];
        const moodHistoryList = document.getElementById('moodHistory');
        moodHistoryList.innerHTML = ''; // Clear current list

        if (moodHistory.length === 0) {
            moodHistoryList.textContent = "No mood history yet!";
            return; // Exit the function if no data
        }

        moodHistory.forEach(entry => {
            const li = document.createElement('li');
            li.innerHTML = `
                Date: ${entry.date}, 
                Mood: ${entry.mood}, 
                Reason: ${entry.reason ? entry.reason : 'N/A'}, 
                Enjoyable Activity: ${entry.enjoyable ? entry.enjoyable : 'N/A'}, 
                Energy Level: ${entry.energy ? entry.energy : 'N/A'}, 
                Sleep Quality: ${entry.sleep ? entry.sleep : 'N/A'}, 
                Activities: ${entry.activities ? entry.activities : 'N/A'}, 
                Meals: ${entry.meals ? entry.meals : 'N/A'}, 
                Last Contact with Friend: ${entry.friendContact ? entry.friendContact : 'N/A'}
            `.trim(); // Using trim to ensure no extra whitespace
            moodHistoryList.appendChild(li);
        });
    }

    // Initial load of history
    updateMoodHistoryUI();
});

  
