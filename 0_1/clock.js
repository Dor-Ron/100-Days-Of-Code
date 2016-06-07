"use strict";

for (var i = 0; i < 86400; i++) { // 86400 secs in a day
  setInterval(changeBg, 1000)
}

function changeBg() {
  let time = new Date();
  let hour = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  document.querySelector('body').style.backgroundColor = "#" + hour + minutes + seconds; //forced conversion
  document.getElementsByClassName('clock')[0].innerHTML = hour + " : " + minutes + " : " + seconds; //forced conversion
}
