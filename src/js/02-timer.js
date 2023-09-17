import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const textdays = document.querySelector('[data-days]');
const texthours = document.querySelector('[data-hours]');
const textminutes = document.querySelector('[data-minutes]');
const textseconds = document.querySelector('[data-seconds]');
let timeDifference = 0;
let timerId = 0;
startBtn.setAttribute('disabled', 'disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        userDate(selectedDates[0]);
  },
};

flatpickr(input, options);

function userDate(selectedDates) {
    const date = new Date();
    if (selectedDates < date) {
        window.alert("Please choose a date in the future");
    } else {
        timeDifference = selectedDates.getTime() - date.getTime();
        startBtn.removeAttribute('disabled');
        formatedDate = convertMs(timeDifference);
        visualTimerDate(formatedDate);
    }
}

startBtn.addEventListener('click', onBtnStart);
function onBtnStart() {
    timerId = setInterval(startTimer, 1000);
}

function startTimer() {
    timeDifference -= 1000;

    if (textseconds.textContent <= 0 && textminutes.textContent <= 0) {
        clearInterval(timerId);
    } else {
        formatedDate = convertMs(timeDifference);
        visualTimerDate(formatedDate);
    }
}

function convertMs (ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
    const days = Math.floor(ms / day);
    // console.log(days);
  // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // console.log(hours);
  // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // console.log(minutes);
  // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    // console.log(seconds);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0')
};

function visualTimerDate (formatedDate) {
    textdays.textContent = addLeadingZero(formatedDate.days);
    texthours.textContent = addLeadingZero(formatedDate.hours);
    textminutes.textContent = addLeadingZero(formatedDate.minutes);
    textseconds.textContent = addLeadingZero(formatedDate.seconds);
}