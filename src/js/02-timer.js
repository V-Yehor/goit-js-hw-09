import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const textdays = document.querySelector('[data-days]');
const texthours = document.querySelector('[data-hours]');
const textminutes = document.querySelector('[data-minutes]');
const textseconds = document.querySelector('[data-seconds]');
startBtn.setAttribute('disabled', 'disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const date = new Date();
    if (selectedDates[0].getTime() < date.getTime()) {
        window.alert("Please choose a date in the future")
    } else {
        startBtn.removeAttribute('disabled');
        const ms = selectedDates[0].getTime() - date.getTime();
        return convertMs(ms);
    }
  },
};

flatpickr(input, options);

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

// startBtn.addEventListener('click', () => {
// });