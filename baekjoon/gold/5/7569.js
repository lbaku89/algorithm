// https://www.acmicpc.net/problem/7569

// 참고: https://velog.io/@jiyaho/%EB%B0%B1%EC%A4%80-7569-%ED%86%A0%EB%A7%88%ED%86%A0-Node.js-BFS-%ED%92%80%EC%9D%B4
// let data = "5 3 1\n0 -1 0 0 0\n-1 -1 0 1 1\n0 0 0 1 1";
// let data = "5 3 2\n0 0 0 0 0\n0 0 0 0 0\n0 0 0 0 0\n0 0 0 0 0\n0 0 1 0 0\n0 0 0 0 0";
// let data = "4 3 2\n1 1 1 1\n1 1 1 1\n1 1 1 1\n1 1 1 1\n-1 -1 -1 -1\n1 1 1 -1";
// let input = data.toString().trim().split("\n");

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [M, N, H] = input
    .shift()
    .split(" ")
    .map((n) => Number(n));

let storage = Array.from({ length: H }, () => {
    return Array.from({ length: N }, () => {
        return 0;
    });
});

for (let f = 0; f < H; ++f) {
    for (let r = 0; r < N; ++r) {
        let line = input[f * N + r].split(" ").map((n) => Number(n));

        storage[f][r] = line;
    }
}

for (let f = 0; f < H; ++f) {
    for (let r = 0; r < N; ++r) {
        for (let c = 0; c < M; ++c) {
            let v = storage[f][r][c];

            if (v === 1) {
                let q = [[f, r, c]];

                while (q.length) {
                    let [nowF, nowR, nowC] = q.shift();

                    // 윗박스,아랫박스스, 상,하,좌,우
                    let df = [1, -1, 0, 0, 0, 0],
                        dr = [0, 0, 1, -1, 0, 0],
                        dc = [0, 0, 0, 0, -1, 1];

                    for (let step = 0; step < 6; ++step) {
                        let [nextF, nextR, nextC] = [nowF + df[step], nowR + dr[step], nowC + dc[step]];

                        if (
                            nextF >= 0 &&
                            nextF < H &&
                            nextR >= 0 &&
                            nextR < N &&
                            nextC >= 0 &&
                            nextC < M &&
                            storage[nextF][nextR][nextC] !== -1 &&
                            (storage[nextF][nextR][nextC] === 0 || storage[nextF][nextR][nextC] > storage[nowF][nowR][nowC] + 1)
                        ) {
                            storage[nextF][nextR][nextC] = storage[nowF][nowR][nowC] + 1;
                            q.push([nextF, nextR, nextC]);
                        }
                    }
                }
            }
        }
    }
}

let answer = 0;
for (let f = 0; f < H; ++f) {
    for (let r = 0; r < N; ++r) {
        for (let c = 0; c < M; ++c) {
            if (storage[f][r][c] === 0) {
                answer = -1;
                console.log(answer);
                return;
            } else if (storage[f][r][c] >= 1) {
                answer = Math.max(answer, storage[f][r][c] - 1);
            }
        }
    }
}

console.log(answer);
