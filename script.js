// Function to make the webpage go fullscreen
function openFullscreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { // Firefox
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { // IE/Edge
    elem.msRequestFullscreen();
  }
}

// Event listener for keypress
document.addEventListener('keypress', function(event) {
  if (event.key === 'f' || event.key === 'F') {
    openFullscreen();
  }
});

// Countdown Timer Functionality
const targetDate = new Date("2025-10-01T00:00:00"); // Set your target date here

const countdownInterval = setInterval(() => {
  const now = new Date();
  const remainingTime = targetDate - now;

  if (remainingTime < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerText = "Time's up!";
    return;
  }

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Update the countdown display
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}, 1000); // Update every second

// Display the initial countdown value immediately
document.getElementById("days").innerText = "365";
document.getElementById("hours").innerText = "0";
document.getElementById("minutes").innerText = "0";
document.getElementById("seconds").innerText = "0";
