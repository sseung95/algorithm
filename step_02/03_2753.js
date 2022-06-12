const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const year = +input[0];

// 4의 배수 && ( 100 배수 X || 400 배수)
const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

console.log(isLeapYear ? 1 : 0);
