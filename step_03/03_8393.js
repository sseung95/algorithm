const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0];

let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log(sum);
