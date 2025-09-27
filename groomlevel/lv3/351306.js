// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  const input = [];
  for await (const line of rl) {
    input.push(line);
    rl.close();
  }

  const students = [];

  for (let i = 1; i < input.length; ++i) {
    const [op, str] = input[i].split(" ");

    if (op === "add") {
      students.push(str);
    } else {
      let cnt = 0;
      for (const name of students) {
        if (name.startsWith(str)) {
          ++cnt;
        }
      }
      console.log(cnt);
    }
  }

  process.exit();
})();
