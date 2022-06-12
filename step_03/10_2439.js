const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0];
let answer = '';

for (let i = 1; i <= n; i++) {
  for (let j = n; j > 0; j--) {
    answer += j <= i ? '*' : ' ';
  }
  answer += '\n';
}

console.log(answer);
