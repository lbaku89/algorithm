// https://leetcode.com/problems/minimum-operations-to-halve-array-sum/

/**
 * @param {number[]} nums
 * @return {number}
 */
var halveArray = function (nums) {
    class MaxHeap {
        constructor() {
            this.heap = [];
        }

        _swap(i, j) {
            let temp = this.heap[i];
            this.heap[i] = this.heap[j];
            this.heap[j] = temp;
        }

        push(n) {
            let heap = this.heap;

            heap.push(n);

            if (heap.length >= 2) {
                let childIdx = heap.length - 1;
                let parentIdx = parseInt((childIdx - 1) / 2);

                while (heap[parentIdx] < heap[childIdx]) {
                    this._swap(parentIdx, childIdx);

                    childIdx = parentIdx;
                    parentIdx = parseInt((childIdx - 1) / 2);

                    if (childIdx === 0) break;
                }
            }
        }

        pop() {
            let q = this.heap;
            const max = q[0];
            q[0] = q.pop();

            if (q.length >= 2) {
                let parentIdx = 0;
                let [leftChildIdx, rightChildIdx] = [parentIdx * 2 + 1, parentIdx * 2 + 2];

                while ((q[leftChildIdx] && q[leftChildIdx] > q[parentIdx]) || (q[rightChildIdx] && q[rightChildIdx] > q[parentIdx])) {
                    let maxChildIdx = leftChildIdx;
                    if (q[rightChildIdx] && q[rightChildIdx] > q[leftChildIdx]) {
                        maxChildIdx = rightChildIdx;
                    }

                    this._swap(parentIdx, maxChildIdx);

                    parentIdx = maxChildIdx;
                    leftChildIdx = parentIdx * 2 + 1;
                    rightChildIdx = parentIdx * 2 + 2;
                }
            }
            return max;
        }
    }
    let sum = nums.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    let half = sum / 2;
    let totalMinus = 0;
    const maxPriorityQueue = new MaxHeap();
    let cnt = 0;

    nums.forEach((n) => {
        maxPriorityQueue.push(n);
    });

    while (half > totalMinus) {
        let half = maxPriorityQueue.pop() / 2;
        totalMinus += half;
        maxPriorityQueue.push(half);
        ++cnt;
    }

    return cnt;
};
