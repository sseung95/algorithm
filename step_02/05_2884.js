const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const h = +input[0].split(' ')[0];
const m = +input[0].split(' ')[1];

let resultHour = h;
let resultMinute = m - 45;

if (m < 45) {
  resultHour -= 1;
  resultMinute += 60;
}

if (resultHour < 0) {
  resultHour = 23;
}

console.log(`${resultHour} ${resultMinute}`);
