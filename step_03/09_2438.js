const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0];
let answer = '';

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i + 1; j++) {
    answer += '*';
  }
  answer += '\n';
}

console.log(answer);
