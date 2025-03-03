// https://www.acmicpc.net/problem/11403

// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let testData = "7\n0 0 0 1 0 0 0\n0 0 0 0 0 0 1\n0 0 0 0 0 0 0\n0 0 0 0 1 1 0\n1 0 0 0 0 0 0\n0 0 0 0 0 0 1\n0 0 1 0 0 0 0";

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [pointsCnt, ...arr] = input;

let graph = arr.map((str) => {
    return str.split(" ").map((n) => Number(n));
});

for (let r = 0; r < graph.length; ++r) {
    visited = [];
    toVisit = [];
    for (let c = 0; c < graph[0].length; ++c) {
        if (graph[r][c] === 1) {
            toVisit.push(c);
            visited.push(c);
        }

        while (toVisit.length) {
            let point = toVisit.shift();
            for (let z = 0; z < graph[0].length; ++z) {
                if (graph[point][z] === 1 && !visited.includes(z)) {
                    graph[r][z] = 1;
                    toVisit.push(z);
                    visited.push(z);
                }
            }
        }
    }
}

let answer = "";
graph.forEach((line) => {
    let str = line.join(" ");
    answer += str + "\n";
});
console.log(answer);

//  플로이드 와샬 풀이

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let [pointsCnt, ...arr] = input;

// let graph = arr.map((str) => {
//     return str.split(" ").map((n) => Number(n));
// });

// for(let k=0; k<graph.length; ++k){
// for(let r=0; r<graph.length; ++r){
//     for(let c=0; c<graph[0].length; ++c){
//         if(graph[r][k]&&graph[k][c]){
//              graph[r][c]=1
//         }
//     }
// }
// }
// let answer = "";
// graph.forEach((line) => {
//     let str = line.join(" ");
//     answer += str + "\n";
// });
// console.log(answer);
