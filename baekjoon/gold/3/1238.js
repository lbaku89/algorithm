// https://www.acmicpc.net/problem/1238
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M, X] = input
    .shift()
    .split(" ")
    .map((n) => Number(n));

let graph = Array.from({ length: N }, () => {
    return Array(N).fill(Infinity);
});

for (let i = 0; i < M; ++i) {
    let [s_point, e_point, spend_time] = input[i].split(" ").map((n) => Number(n));
    graph[s_point - 1][e_point - 1] = spend_time;
}

for (let i = 0; i < N; ++i) {
    graph[i][i] = 0;
}

for (let i = 0; i < N; ++i) {
    for (let j = 0; j < N; ++j) {
        for (let z = 0; z < N; ++z) {
            if (graph[j][i] !== Infinity && graph[i][z] !== Infinity) {
                if (graph[j][i] + graph[i][z] < graph[j][z]) {
                    graph[j][z] = graph[j][i] + graph[i][z];
                }
            }
        }
    }
}

let answer = 0;

for (let i = 0; i < N; ++i) {
    if (answer < graph[i][X - 1] + graph[X - 1][i]) {
        answer = graph[i][X - 1] + graph[X - 1][i];
    }
}
console.log(answer);
