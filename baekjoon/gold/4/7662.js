// https://www.acmicpc.net/problem/7662

//https://velog.io/@seungrok-yoon/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%B5%9C%EB%8C%80%ED%9E%99%EC%B5%9C%EC%86%8C%ED%9E%99-%EC%9D%B4%EC%A4%91-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84-%ED%81%90-%EA%B5%AC%ED%98%84
// 이거 보고 하기
// let testCase = "2\n7\nI 16\nI -5643\nD -1\nD 1\nD 1\nI 123\nD -1\n9\nI -45\nI 653\nD 1\nI -642\nI 45\nI 97\nD 1\nD -1\nI 333";
// let [caseCnt, ...input] = testCase.toString().trim().split("\n");

// https://www.acmicpc.net/board/view/141930
// let fs = require("fs");
const input = `
1
1
I 0
`
    .trim()
    .split("\n");
const readline = {
    on: (event, callback) => {
        if (event === "line") {
            input.forEach((line) => callback(line));
        } else if (event === "close") {
            callback();
        }
    },
};
const rl = readline;
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.platform === "linux" ? process.stdin : fs.createReadStream("./input.text"),
//     output: process.stdout,
//     terminal: false,
// });

// let [caseCnt, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Heap {
    constructor(compareFn) {
        this.heap = [];
        this.compareFn = compareFn;
    }

    insert(n) {
        let heap = this.heap;

        heap.push(n);

        if (heap.length > 1) {
            let childIdx = heap.length - 1;
            let parentIdx = Math.floor((childIdx - 1) / 2);

            while (childIdx !== 0) {
                if (this.compareFn(heap[parentIdx], heap[childIdx])) {
                    break;
                }

                [heap[parentIdx], heap[childIdx]] = [heap[childIdx], heap[parentIdx]];
                childIdx = parentIdx;
                parentIdx = Math.floor((childIdx - 1) / 2);
            }
        }
    }

    pop() {
        let heap = this.heap;

        if (heap.length === 0) {
            return null;
        } else if (heap.length === 1) {
            return heap.pop();
        } else {
            let popped = heap[0];
            heap[0] = heap.pop();

            let parentIdx = 0;

            while (parentIdx * 2 + 1 < heap.length) {
                let childIdx = parentIdx * 2 + 1;

                if (childIdx + 1 < heap.length && this.compareFn(heap[childIdx + 1], heap[childIdx])) {
                    childIdx += 1;
                }

                if (this.compareFn(heap[parentIdx], heap[childIdx])) {
                    break;
                }

                [heap[parentIdx], heap[childIdx]] = [heap[childIdx], heap[parentIdx]];

                parentIdx = childIdx;
            }

            return popped;
        }
    }
}

let maxHeap = new Heap((parent, child) => {
    if (parent > child) {
        return true;
    } else {
        return false;
    }
});
let minHeap = new Heap((parent, child) => {
    if (parent < child) {
        return true;
    } else {
        return false;
    }
});
let map = new Map();

let answer = "";

let index = 0;
let opCnt = 0;
let lastOpIndex = 0;

rl.on("line", (line) => {
    if (index === 0) {
        ++index;
        return;
    }

    if (line.split(" ").length === 1) {
        maxHeap.heap = [];
        minHeap.heap = [];
        map.clear();
        lastOpIndex = index + Number(line);
        ++index;
        return;
    }

    let [op, v] = line.split(" ");
    if (op === "I") {
        let insertNum = Number(v);
        maxHeap.insert(insertNum);
        minHeap.insert(insertNum);

        if (map.has(insertNum)) {
            map.set(insertNum, map.get(insertNum) + 1);
        } else {
            map.set(insertNum, 1);
        }
    } else {
        if (v === "1") {
            while (maxHeap.heap.length) {
                let popped = maxHeap.pop();

                if (map.get(popped) >= 1) {
                    map.set(popped, map.get(popped) - 1);
                    break;
                }
            }
        } else if (v === "-1") {
            while (minHeap.heap.length) {
                let popped = minHeap.pop();

                if (map.get(popped) >= 1) {
                    map.set(popped, map.get(popped) - 1);

                    break;
                }
            }
        }
    }

    if (index === lastOpIndex) {
        let max = undefined;
        while (maxHeap.heap.length) {
            let popped = maxHeap.pop();

            if (map.get(popped) >= 1) {
                max = popped;
                break;
            }
        }
        let min = undefined;
        while (minHeap.heap.length) {
            let popped = minHeap.pop();

            if (map.get(popped) >= 1) {
                min = popped;
                break;
            }
        }

        if (max !== undefined || min !== undefined) {
            max = max !== undefined ? max : min;
            min = min !== undefined ? min : max;
            answer += `${max} ${min}\n`;
        } else {
            answer += "EMPTY\n";
        }
    }

    ++index;
});

rl.on("close", () => {
    console.log(answer.trim());
});

// for (let i = 0; i < input.length; ) {
//     maxHeap.heap = [];
//     minHeap.heap = [];
//     map.clear();
//     let opCnt = Number(input[i]);

//     for (let j = 1; j <= opCnt; ++j) {
//         let [op, v] = input[i + j].split(" ");

//         if (op === "I") {
//             let insertNum = Number(v);
//             maxHeap.insert(insertNum);
//             minHeap.insert(insertNum);

//             if (map.has(insertNum)) {
//                 map[insertNum] = map.get(insertNum) + 1;
//             } else {
//                 map[insertNum] = 1;
//             }
//         } else {
//             if (v === "1") {
//                 while (maxHeap.heap.length) {
//                     let popped = maxHeap.pop();

//                     if (map[popped] >= 1) {
//                         map[popped] = map[popped] - 1;
//                         break;
//                     }
//                 }
//             } else if (v === "-1") {
//                 while (minHeap.heap.length) {
//                     let popped = minHeap.pop();

//                     if (map[popped] >= 1) {
//                         map[popped] = map[popped] - 1;
//                         break;
//                     }
//                 }
//             }
//         }
//     }

//     // console.log(maxHeap.heap);
//     // console.log(minHeap.heap);

//     let max = undefined;
//     while (maxHeap.heap.length) {
//         let popped = maxHeap.pop();

//         if (map[popped] >= 1) {
//             // map[popped] = map[popped] - 1;
//             max = popped;
//             break;
//         }
//     }

//     let min = undefined;
//     while (minHeap.heap.length) {
//         let popped = minHeap.pop();

//         if (map[popped] >= 1) {
//             // map[popped] = map[popped] - 1;
//             min = popped;
//             break;
//         }
//     }

//     if (max !== undefined && min !== undefined) {
//         answer += `${max} ${min}\n`;
//     } else {
//         answer += "EMPTY\n";
//     }
//     i += opCnt + 1;
// }

// console.log(answer);
