const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0];
let answer = '';

for (let i = 1; i <= n; i++) {
  const a = +input[i].split(' ')[0];
  const b = +input[i].split(' ')[1];

  answer += `Case #${i}: ${a} + ${b} = ${a + b} \n`;
}

console.log(answer);
