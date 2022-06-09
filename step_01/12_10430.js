const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = +input[0].split(' ')[0];
const b = +input[0].split(' ')[1];
const c = +input[0].split(' ')[2];

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);
