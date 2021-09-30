const timer = document.getElementById("display-seconds");
const startBtn = document.getElementById("btn-start");
const pauseBtn = document.getElementById("btn-pause");
const resetBtn = document.getElementById("btn-reset");

let seconds = 0;
let intervalId = null;

const disableBtn = (btn) => btn.setAttribute("disabled", "disabled");
const enableBtn = (btn) => btn.removeAttribute("disabled", "disabled");

startBtn.addEventListener("click", () => {
  intervalId = setInterval(() => {
    seconds++;
    timer.textContent = seconds;
    console.log(seconds);
  }, 1000);
  disableBtn(startBtn);
  enableBtn(pauseBtn);
  enableBtn(resetBtn);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  enableBtn(startBtn);
  disableBtn(pauseBtn);
});

resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  seconds = 0;
  timer.textContent = seconds;
  disableBtn(resetBtn);
  disableBtn(pauseBtn);
  enableBtn(startBtn);
});
