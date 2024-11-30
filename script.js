const nextYear = new Date().getFullYear() + 1;

var countdownElem = document.getElementById("countdown");
const smalltext = document.getElementsByClassName("d")[0];
const fireworkElem = document.getElementsByClassName("f");
const bgElem = document.getElementById("bg");
//Next countddown: Jan 1, year 00:00:00
var countdownDate = new Date(`Jan 1, ${nextYear} 00:00:00`).getTime();

smalltext.innerText = `until ${nextYear}`;

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
    final = seconds;
    smalltext.innerText = "seconds left!";
  }
  countdownElem.innerText = output;

  if (distance < 1000) {
    clearInterval(countdown);
    countdownElem.innerText = "Happy New Year!";
    smalltext.innerText = "";
    bgElem.classList.toggle("bg-grad");
    fireworkElem.map((elem) => elem.classList.toggle("firework"));
  }
}

setInterval(countdown, 1000);

var y = setInterval(function () {
  let now = new Date().getTime();
  distance = countdownDate - now;
  var hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  // console.log(hours)
  if (hours <= -12) {
    window.location.href = "/bye";
  }
}, 1000);
