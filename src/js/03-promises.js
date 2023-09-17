
const delayInput = document.querySelector("input[name=delay]");
const stepInput = document.querySelector("input[name=step]");
const amountInput = document.querySelector("input[name=amount]");
const form = document.querySelector(".form");

form.addEventListener('submit', runPromise);

function runPromise(event){
  event.preventDefault();
  let setDelay = Number(delayInput.value);

  for (let i = 1; i <= amountInput.value; i += 1) {
    createPromise(i, setDelay)
    .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
    .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    setDelay += Number(stepInput.value);
  }
}


function createPromise(position, delay) {

  const promObj = { position, delay };
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
      // Fulfill
        resolve(promObj);
    } else {
      // Reject
        reject(promObj);
    }
    }, delay)
});
}

