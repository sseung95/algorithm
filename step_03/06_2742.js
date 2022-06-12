const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0];
let answer = '';

for (let i = n; i >= 1; i--) {
  answer += `${i} \n`;
}

console.log(answer);
