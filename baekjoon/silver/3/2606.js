// https://www.acmicpc.net/problem/2606

let testcase = "7\n6\n1 2\n2 3\n1 5\n5 2\n5 6\n4 7\n";
let input = testcase.toString().trim().split("\n");

let [computerCount, caseCount, ...connections] = input;

computerCount = Number(computerCount);

const connectionMap = Array.from({ length: computerCount }, () => {
    return Array(computerCount).fill(false);
});

connections.forEach((connection) => {
    let [computer1, computer2] = connection.split(" ").map((n) => Number(n));
    connectionMap[computer1 - 1][computer2 - 1] = true;
    connectionMap[computer2 - 1][computer1 - 1] = true;
});

let visited = Array(computerCount).fill(false);

const dfs = (visitComputer) => {
    visited[visitComputer] = true;
    connectionMap[visitComputer].forEach((isConnected, computerIdx) => {
        if (isConnected && !visited[computerIdx]) {
            dfs(computerIdx);
        }
    });
};

dfs(0);

const answer = visited.reduce((acc, cur) => {
    if (cur === true) {
        return acc + 1;
    }
    return acc;
}, 0);

console.log(answer - 1);
