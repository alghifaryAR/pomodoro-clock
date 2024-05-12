document.addEventListener("DOMContentLoaded", function () {
  // Function to format time
  function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
  }

  let breakLength = 5;
  let sessionLength = 25;
  let timeLeft = sessionLength * 60;
  let timerRunning = false;
  let timerInterval;

  // Update break length display
  function updateBreakLengthDisplay() {
    document.getElementById("break-length").textContent = breakLength;
  }

  // Update session length display
  function updateSessionLengthDisplay() {
    document.getElementById("session-length").textContent = sessionLength;
    document.getElementById("time-left").textContent = formatTime(
      sessionLength * 60
    );
  }

  // Event listener for break decrement
  document
    .getElementById("break-decrement")
    .addEventListener("click", function () {
      if (breakLength > 1) {
        breakLength--;
        updateBreakLengthDisplay();
      }
    });

  // Event listener for break increment
  document
    .getElementById("break-increment")
    .addEventListener("click", function () {
      if (breakLength < 60) {
        breakLength++;
        updateBreakLengthDisplay();
      }
    });

  // Event listener for session decrement
  document
    .getElementById("session-decrement")
    .addEventListener("click", function () {
      if (sessionLength > 1) {
        sessionLength--;
        timeLeft = sessionLength * 60;
        updateSessionLengthDisplay();
      }
    });

  // Event listener for session increment
  document
    .getElementById("session-increment")
    .addEventListener("click", function () {
      if (sessionLength < 60) {
        sessionLength++;
        timeLeft = sessionLength * 60;
        updateSessionLengthDisplay();
      }
    });

  // Event listener for start/stop button
  document.getElementById("start_stop").addEventListener("click", function () {
    if (!timerRunning) {
      timerRunning = true;
      timerInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft < 0) {
          // Switch to break/session accordingly
          if (
            document.getElementById("timer-label").textContent === "Session"
          ) {
            document.getElementById("timer-label").textContent = "Break";
            timeLeft = breakLength * 60;
          } else {
            document.getElementById("timer-label").textContent = "Session";
            timeLeft = sessionLength * 60;
          }
          document.getElementById("beep").play();
        }
        document.getElementById("time-left").textContent = formatTime(timeLeft);
      }, 1000);
    } else {
      timerRunning = false;
      clearInterval(timerInterval);
    }
  });

  // Event listener for reset button
  document.getElementById("reset").addEventListener("click", function () {
    breakLength = 5;
    sessionLength = 25;
    timeLeft = sessionLength * 60;
    timerRunning = false;
    clearInterval(timerInterval);
    document.getElementById("timer-label").textContent = "Session";
    updateBreakLengthDisplay();
    updateSessionLengthDisplay();

    // Stop and rewind audio
    let beep = document.getElementById("beep");
    beep.pause();
    beep.currentTime = 0;
  });
});
