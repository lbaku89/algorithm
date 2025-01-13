// https://www.acmicpc.net/problem/1620

// let testCase =
//     "26 5\nBulbasaur\nIvysaur\nVenusaur\nCharmander\nCharmeleon\nCharizard\nSquirtle\nWartortle\nBlastoise\nCaterpie\nMetapod\nButterfree\nWeedle\nKakuna\nBeedrill\nPidgey\nPidgeotto\nPidgeot\nRattata\nRaticate\nSpearow\nFearow\nEkans\nArbok\nPikachu\nRaichu\n25\nRaichu\n3\nPidgey\nKakuna";

// let input = testCase.toString().trim().split("\n");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input
    .shift()
    .split(" ")
    .map((n) => +n);

let map = new Map();

let answer = "";
for (let i = 0; i < input.length; ++i) {
    if (i < N) {
        // 도감 만들기
        map.set(`${i + 1}`, input[i]);
        map.set(input[i], `${i + 1}`);
    } else {
        answer += `${map.get(input[i])}\n`;
    }
}

console.log(answer);
