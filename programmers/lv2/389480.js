// https://school.programmers.co.kr/learn/courses/30/lessons/389480

function solution(info, n, m) {
    // dps -> 시간초과
    let aMin = Infinity;
    const steal = (idx, aEvidence, bEvidence) => {
        if (idx >= info.length) {
            aMin = Math.min(aMin, aEvidence);
            return;
        }
        let [sumA, sumB] = [aEvidence + info[idx][0], bEvidence + info[idx][1]];
        if (sumA < n) {
            steal(idx + 1, sumA, bEvidence);
        }
        if (sumB < m) {
            steal(idx + 1, aEvidence, sumB);
        }
    };
    steal(0, 0, 0);
    return aMin === Infinity ? -1 : aMin;
}
