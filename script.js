// script.js - Commit Counter Logic
let count = 0;
const countEl = document.getElementById('count');
const incBtn = document.getElementById('increment');
const decBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// Load count from localStorage if available
if (localStorage.getItem('cosc_commit_count')) {
  count = parseInt(localStorage.getItem('cosc_commit_count'), 10) || 0;
}

function updateDisplay() {
  countEl.textContent = count;
  localStorage.setItem('cosc_commit_count', count);
}

incBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decBtn.addEventListener('click', () => {
  if (count > 0) count--;
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});

updateDisplay();
