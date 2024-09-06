const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function displayTime() {
  const date = new Date();

  const hh = date.getHours();
  const mm = date.getMinutes();
  const ss = date.getSeconds();

  const hRotation = 30 * hh + mm / 2;
  const mRotation = 6 * mm;
  const sRotation = 6 * ss;

  hour.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);
