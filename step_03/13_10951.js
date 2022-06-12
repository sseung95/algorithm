const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let answer = '';

for (let i = 0; i < input.length; i++) {
  const a = +input[i].split(' ')[0];
  const b = +input[i].split(' ')[1];

  const result = a + b;

  if (!result) break;

  answer += `${result} \n`;
}

console.log(answer);
