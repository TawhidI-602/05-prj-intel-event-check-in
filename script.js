// Get all needed DOM elements
const form = document.getElementById('checkInForm');
const nameInput = document.getElementById('attendeeName');
const teamSelect = document.getElementById('teamSelect');
const greeting = document.getElementById('greeting');
const attendanceCount = document.getElementById('attendeeCount');
const progressBar = document.getElementById('progressBar');

// Track attence
let count = 0;
const maxCount = 50;

// Handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = nameInput.value.trim();
    const team = teamSelect.value;
    const teamName = teamSelect.selectedOptions[0].text;

    console.log(name, teamName);

    // Increment count
    count++;
    console.log("Total Check-Ins: " + count);

    // update progess bar
    const percentage = Math.round((count / maxCount) * 100) + "%";
    console.log(`Progress: ${percentage}`);

    // Update total attendance count
    attendeeCount.textContent = count;

    // Update team counter
    const teamCounter = document.getElementById(team + "Count");
    teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

    // Show welcome message
    const message = `🎉 Welcome, ${name} from ${teamName}`;
    greeting.textContent = message;
    console.log(message);

    // Update progress bar
    progressBar.style.width = percentage;
    progressBar.textContent = percentage;

    // Prevent max capacity overflow
    if (count >= maxCount) {
        alert("Maximum capacity reached! No more check-ins allowed.");
        form.querySelector('button[type="submit"]').disabled = true;
    }

    form.reset();
});

