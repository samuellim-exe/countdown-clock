const nextYear = new Date().getFullYear() + 1;

var countdownElem = document.getElementById("countdown");
const smalltext = document.getElementsByClassName("d")[0];
const fireworkElem = document.getElementsByClassName("f");
const bgElem = document.getElementById("bg");
var datePicker = document.getElementById("date-picker");
//Next countddown: Jan 1, 2025 00:00:00
var countdownDate = new Date(`Jan 1, ${nextYear} 00:00:00`).getTime();

smalltext.innerText = `until ${nextYear}`;

datePicker.addEventListener("change", function() {
  let selectedDate = new Date(datePicker.value).getTime();
  if (selectedDate < timeNow()) {
    alert("Please select a future date.");
    datePicker.value = "";
    return;
  }
  countdownDate = selectedDate;
  smalltext.innerText = `until ${datePicker.value}`;
});

function timeNow() {
  return new Date().getTime();
}

function floor(x) {
  return Math.floor(x);
}

function countdown() {
  let now = timeNow();
  let distance = countdownDate - now;

  //Time calc for d, h, m, s
  let days = floor(distance / (1000 * 60 * 60 * 24));
  let hours = floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = floor((distance % (1000 * 60)) / 1000);

  let d = days ? days + "d " : "";
  let h = hours ? hours + "h " : "";
  let m = minutes ? minutes + "m " : "";
  let s = seconds ? seconds + "s " : "";
  let output = d || h || m || s ? d + h + m + s : seconds;
  now = timeNow();
  //Update countdown element
  if (days + hours + minutes === 0) {
    output = seconds;
    smalltext.innerText = "seconds left!";
  }
  countdownElem.innerText = output;

  if (distance < 1000) {
    clearInterval(countdown);
    countdownElem.innerText = "Happy New Year!";
    smalltext.innerText = "";
    bgElem.classList.toggle("bg-grad");
    for (let i = 0; i < fireworkElem.length; i++) {
      fireworkElem[i].classList.toggle("firework");
    }
  }
}

function redirectToBye() {
  let now = timeNow();
  distance = countdownDate - now;
  let hours = floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hours <= -12 && (window.location.href = "/bye");
}

setInterval(countdown, 1000);
setInterval(redirectToBye, 1000);

window.onload = function() {
  datePicker.value = `${nextYear}-01-01`;
};