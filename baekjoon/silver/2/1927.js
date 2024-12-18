// https://www.acmicpc.net/problem/1927

// test case
// let data = "9\n0\n12345678\n1\n2\n0\n0\n0\n0\n32";
// let input = data
//     .toString()
//     .trim()
//     .split("\n")
//     .map((n) => Number(n));

let fs = require("fs");

let input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((n) => Number(n));

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(n) {
        let heap = this.heap;
        heap.push(n);
        if (heap.length >= 2) {
            let childIdx = heap.length - 1;
            let parentIdx = Math.floor((childIdx - 1) / 2);

            while (heap[parentIdx] > heap[childIdx]) {
                let [parent, child] = [heap[parentIdx], heap[childIdx]];

                heap[parentIdx] = child;
                heap[childIdx] = parent;

                childIdx = parentIdx;
                if (childIdx === 0) {
                    break;
                }
                parentIdx = Math.floor((childIdx - 1) / 2);
            }
        }
    }

    getMin() {
        let heap = this.heap;
        if (heap.length === 0) {
            return 0;
        }
        let min = heap[0];

        heap[0] = heap[heap.length - 1];
        heap.pop();

        if (heap.length > 1) {
            let parentIdx = 0;

            let childIdx = undefined;

            if (heap[parentIdx * 2 + 2] && heap[parentIdx * 2 + 1] > heap[parentIdx * 2 + 2]) {
                childIdx = parentIdx * 2 + 2;
            } else if (heap[parentIdx * 2 + 1]) {
                childIdx = parentIdx * 2 + 1;
            }

            while (heap[parentIdx] > heap[childIdx]) {
                let [parent, child] = [heap[parentIdx], heap[childIdx]];

                heap[parentIdx] = child;
                heap[childIdx] = parent;

                parentIdx = childIdx;

                if (heap[parentIdx * 2 + 2] && heap[parentIdx * 2 + 1] > heap[parentIdx * 2 + 2]) {
                    childIdx = parentIdx * 2 + 2;
                } else if (heap[parentIdx * 2 + 1]) {
                    childIdx = parentIdx * 2 + 1;
                } else {
                    break;
                }
            }
        }

        return min;
    }
}

let minHeap = new MinHeap();

let answer = [];
for (let i = 1; i < input.length; ++i) {
    let number = input[i];

    if (number === 0) {
        answer.push(minHeap.getMin());
    } else {
        minHeap.insert(number);
    }
}

console.log(answer.join("\n"));
