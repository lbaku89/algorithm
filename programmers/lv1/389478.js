// https://school.programmers.co.kr/learn/courses/30/lessons/389478
// 최적화 필요 - 택배상자 꺼내기
function solution(n, w, num) {
    let map = [];
    let temp = [];
    let direction = true;
    for (let i = 1; i <= n; ++i) {
        if (direction) {
            temp.push(i);
        } else {
            temp.unshift(i);
        }
        if (i === n) {
            map.push(temp);
            break;
        }
        if (parseInt(i % w) === 0) {
            map.push(temp);
            temp = [];
            direction = !direction;
        }
    }

    if (map[map.length - 1].length !== w) {
        let itemCnt = map[map.length - 1].length;

        if (direction) {
            let newLine = map[map.length - 1].concat(Array(w - itemCnt).fill(0));
            map[map.length - 1] = newLine;
        } else {
            let newLine = Array(w - itemCnt)
                .fill(0)
                .concat([...map[map.length - 1]]);
            map[map.length - 1] = newLine;
        }
    }

    let answer = 0;

    let row = 0,
        column = 0;
    for (let r = 0; r < map.length; ++r) {
        for (let c = 0; c < w; ++c) {
            if (map[r][c] === num) {
                row = r;
                column = c;
            }
        }
    }

    while (1) {
        if (map[row] && map[row][column]) {
            ++answer;
            ++row;
        } else {
            break;
        }
    }

    return answer;
}

// function solution(n, w, num) {
//     let a = Math.floor((n - 1) / w);
//     let b = Math.floor((num - 1) / w);

//     let cnt = undefined;
//     if (a === b) {
//         // 가장 윗줄
//         return 1;
//     } else {
//         // 다른 줄
//         cnt = a - b;

//         // num은 박스 해당줄의 왼쪽으로부터 몇번째인지
//         let numIdx = undefined;
//         if (Math.ceil(num / w) % 2 === 0) {
//             // 짝수
//             numIdx = w - ((num - 1) % w);
//         } else {
//             // 홀수
//             numIdx = num % w;
//         }

//         // 마지막 n번 박스가 해당줄 왼쪽으로 부터 몇번째인지
//         let nIdx = undefined;
//         if (Math.ceil(n / w) % 2 === 0) {
//             //짝수
//             nIdx = w - ((n - 1) % w);
//             if (nIdx <= numIdx) {
//                 ++cnt;
//             }
//         } else {
//             //홀수번째
//             nIdx = n % w;
//             if (nIdx >= numIdx) {
//                 ++cnt;
//             }
//         }
//     }
//     return cnt;
// }
