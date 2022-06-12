const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = +input[0].split(' ')[0];
const b = +input[0].split(' ')[1];

if (a > b) {
  console.log('>');
} else if (a < b) {
  console.log('<');
} else {
  console.log('==');
}
