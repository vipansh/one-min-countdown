const startingMinutes = 0.99;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("container");

setInterval(updateCountdown, 1000);
function changeValue() {}

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  
  let seconds =  Math.floor(time % 60);
  seconds = seconds < 10 ? "0" + seconds : seconds;

  if (seconds === "00") {
    countdownEl.innerText = "times up";
  } else {
    countdownEl.innerText = `  ${minutes}: ${seconds} `;
    time--;
  }
}
