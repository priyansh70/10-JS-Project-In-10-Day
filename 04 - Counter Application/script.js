let counterValue = 0;
let counterDisplay = document.getElementById("counterDisplay");

const updateCounterDisplay = () => {
  counterDisplay.textContent = counterValue;
};

document
  .getElementById("incrementBtn")
  .addEventListener("click", () => {
    counterValue++;
    updateCounterDisplay();
  });

document
  .getElementById("decrementBtn")
  .addEventListener("click", () => {
    counterValue--;
    updateCounterDisplay();
  });

document.getElementById("resetBtn").addEventListener("click", () => {
    counterValue = 0;
    updateCounterDisplay();
});

