const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0].split(' ')[0];
const x = +input[0].split(' ')[1];
const arr = input[1].split(' ');

let answer = '';

for (let i = 0; i < n; i++) {
  const num = +arr[i];

  if (num < x) {
    answer += num + ' ';
  }
}

console.log(answer);
