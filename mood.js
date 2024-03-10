document.getElementById('moodForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get values from the form
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    // For checkboxes, since they can have multiple values, handle separately
    data.activities = formData.getAll('activities');
    const date = new Date().toLocaleDateString();
    data.date = date;
  
    // Save to local storage
    let moodHistory = JSON.parse(localStorage.getItem('moodHistory')) || [];
    moodHistory.push(data);
    localStorage.setItem('moodHistory', JSON.stringify(moodHistory));
  
    // Update UI
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
      li.textContent = `Date: ${entry.date}, Mood: ${entry.mood}, Reason: ${entry.reason}, Enjoyable Activity: ${entry.enjoyable}, Energy Level: ${entry.energy}, Sleep Quality: ${entry.sleep}, Activities: ${entry.activities.join(', ')}, Meals: ${entry.meals}, Last Contact with Friend: ${entry.friendContact}`;
      moodHistoryList.appendChild(li);
    });
  }
  
  // Initial load of history
  updateMoodHistoryUI();
  
