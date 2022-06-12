const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const inputNum = +input[0];

let cycle = 0;

let num = inputNum;

while (true) {
  const tens = parseInt(num / 10);
  const units = parseInt(num % 10);
  const sumUnits = (tens + units) % 10;

  const newNum = +('' + units + sumUnits);

  num = newNum;
  cycle++;

  if (inputNum === newNum) {
    break;
  }
}

console.log(cycle);
