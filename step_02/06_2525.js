const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = []; // input 배열 선언

rl.on('line', function (line) {
  input.push(line); // 입력받는 각 줄의 값을 input 배열에 저장
}).on('close', function () {
  const h = +input[0].split(' ')[0];
  const m = +input[0].split(' ')[1];
  const cookTime = +input[1];

  const cookHour = parseInt(cookTime / 60);
  const cookMinute = cookTime % 60;

  let resultHour = h + cookHour;
  let resultMinute = m + cookMinute;

  if (resultMinute >= 60) {
    resultHour++;
    resultMinute -= 60;
  }

  if (resultHour >= 24) {
    resultHour -= 24;
  }

  console.log(`${resultHour} ${resultMinute}`);
  process.exit();
});
