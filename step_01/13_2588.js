const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = +input[0];
const b = +input[1];

// b의 1의 자리
const units = b % 10;

// b의 10의 자리
const tens = parseInt((b % 100) / 10);

// b의 100의 자리
const hundreds = parseInt(b / 100);

console.log(a * units);
console.log(a * tens);
console.log(a * hundreds);
console.log(a * b);
