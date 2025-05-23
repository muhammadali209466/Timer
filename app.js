var minInput = document.getElementById("minInput");
var secInput = document.getElementById("secInput");
var miliSecInput = document.getElementById("miliSecInput");
var startBtn = document.getElementById("startBtn");
var interval;

var minute = 0;
var second = 0;
var miliSec = 0;

function timer() {
  if (miliSec === 0) {
    if (second === 0) {
      if (minute === 0) {
        clearInterval(interval);
        alert("Time Over");
        startBtn.disabled = false;
      } else {
        minute--;
        second = 59;
        miliSec = 99;
      }
    } else {
      second--;
      miliSec = 99;
    }
  } else {
    miliSec--;
  }
  minInput.value = minute;
  secInput.value = second;
  miliSecInput.value = miliSec;
}

function StartTimer() {
  minute = parseInt(minInput.value) || 0;
  second = parseInt(secInput.value) || 0;
  miliSec = parseInt(miliSecInput.value) || 0;

  interval = setInterval(timer, 10);
  startBtn.disabled = true;
}
function StopTimer() {
  clearInterval(interval);
  startBtn.disabled = false;
}
function ResetTimer() {
  clearInterval(interval);
  minute = 0;
  second = 0;
  miliSec = 0;
  minInput.value = 0;
  secInput.value = 0;
  miliSecInput.value = 0;
  startBtn.disabled = false;
}
