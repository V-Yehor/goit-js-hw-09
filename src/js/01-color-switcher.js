const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let intervalFn;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

stopBtn.setAttribute('disabled', 'disabled');

startBtn.addEventListener("click", () => {
    startBtn.setAttribute('disabled', 'disabled');
    stopBtn.removeAttribute('disabled');
    intervalFn = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

stopBtn.addEventListener("click", () => {
    startBtn.removeAttribute('disabled');
    stopBtn.setAttribute('disabled', 'disabled');
    clearInterval(intervalFn);
})



