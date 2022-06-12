const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let answer = '';

let i = 0;

while (true) {
  const a = +input[i].split(' ')[0];
  const b = +input[i].split(' ')[1];

  if (a === 0 && b === 0) break;

  answer += `${a + b} \n`;

  i++;
}

console.log(answer);
