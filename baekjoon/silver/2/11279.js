// https://www.acmicpc.net/problem/11279

// test case
// let data = "13\n0\n1\n2\n0\n0\n3\n2\n1\n0\n0\n0\n0\n0";
// let input = data
//     .toString()
//     .split("\n")
//     .map((n) => Number(n));

let fs = require("fs");
let input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n")
    .map((n) => Number(n));

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(num) {
        let heap = this.heap;

        heap.push(num);

        if (heap.length >= 2) {
            let childIdx = heap.length - 1;
            let parentIdx = Math.floor((childIdx - 1) / 2);

            while (childIdx !== 0 && heap[parentIdx] < heap[childIdx]) {
                let [child, parent] = [heap[childIdx], heap[parentIdx]];

                heap[childIdx] = parent;
                heap[parentIdx] = child;

                childIdx = parentIdx;
                parentIdx = Math.floor((childIdx - 1) / 2);
            }
        }
    }

    popMax() {
        let heap = this.heap;

        if (heap.length === 0) {
            return 0;
        }

        if (heap.length === 1) {
            return heap.pop();
        }

        let max = heap[0];

        // 마지막 값 위로 올림
        heap[0] = heap.pop();

        let parentIdx = 0;
        // 왼쪽, 오른쪽 자식 idx
        let leftChildIdx = parentIdx * 2 + 1;
        let rightChildIdx = parentIdx * 2 + 2;

        while (
            (heap[leftChildIdx] && heap[leftChildIdx] > heap[parentIdx]) ||
            (heap[rightChildIdx] && heap[rightChildIdx] > heap[parentIdx])
        ) {
            // 부모값값
            let parent = heap[parentIdx];

            // 왼쪽 자식을 최댓값으로 간주
            let child = heap[leftChildIdx];
            let childIdx = leftChildIdx;

            if (heap[rightChildIdx] && heap[rightChildIdx] > heap[leftChildIdx]) {
                // 오른쪽 자식이 최댓값으로 판명됨
                child = heap[rightChildIdx];
                childIdx = rightChildIdx;
            }

            // 자식과 부모 값 체인지
            heap[parentIdx] = child;
            heap[childIdx] = parent;

            // 다시 부모, 좌측자식, 우측자식 세팅
            parentIdx = childIdx;
            leftChildIdx = parentIdx * 2 + 1;
            rightChildIdx = parentIdx * 2 + 2;
        }

        return max;
    }
}

const maxHeap = new MaxHeap();

const N = input.shift();

let str = "";
for (let i = 0; i < N; ++i) {
    let n = input[i];

    if (n === 0) {
        str += `${maxHeap.popMax()}\n`;
    } else {
        maxHeap.push(n);
    }
}
console.log(str.trim());
