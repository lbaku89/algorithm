/**
 * @source https://level.goorm.io/exam/355867/%EB%8F%84%EC%8B%9C-%EC%9D%B4%EB%8F%99%EA%B2%BD%EB%A1%9C-%EA%B2%BD%EC%9A%B0%EC%9D%98-%EC%88%98/quiz/1
 *
 */

// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let n;
  for await (const line of rl) {
    n = Number(line.trim());
    rl.close();
  }

  if (n <= 2) {
    console.log(1);
  } else if (n >= 3) {
    let result = 1;
    for (let i = 1; i <= n - 2; ++i) {
      result = (result * 2) % (10 ** 9 + 7);
    }
    console.log(result % (10 ** 9 + 7));
  }

  process.exit();
})();
