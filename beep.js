const child = require("child_process");

function play() {
  let i = 3000;
  while (i !== 0) {
    setTimeout(() => child.exec("afplay /System/Library/Sounds/Glass.aiff"), i);
    i -= 500;
  }
}

play();
