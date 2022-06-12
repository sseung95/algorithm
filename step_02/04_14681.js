const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = []; // input 배열 선언

rl.on('line', function (line) {
  input.push(line); // 입력받는 각 줄의 값을 input 배열에 저장
}).on('close', function () {
  const x = +input[0];
  const y = +input[1];

  // 제1사분면: + +
  // 제2사분면: - +
  // 제3사분면: - -
  // 제4사분면: + -

  if (x > 0 && y > 0) {
    console.log(1);
  } else if (x < 0 && y > 0) {
    console.log(2);
  } else if (x < 0 && y < 0) {
    console.log(3);
  } else if (x > 0 && y < 0) {
    console.log(4);
  }
  process.exit();
});
