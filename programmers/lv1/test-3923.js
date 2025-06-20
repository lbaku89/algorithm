function solution(v) {
    const xMap = {};
    const yMap = {};

    let answer = [0, 0];
    for (const [x, y] of v) {
        if (xMap[x]) {
            xMap[x] = xMap[x] + 1;
        } else {
            xMap[x] = 1;
        }

        if (yMap[y]) {
            yMap[y] = yMap[y] + 1;
        } else {
            yMap[y] = 1;
        }
    }
    console.log(xMap, yMap);
    Object.entries(xMap).forEach(([k, v]) => {
        if (v === 1) {
            answer[0] = +k;
        }
    });
    Object.entries(yMap).forEach(([k, v]) => {
        if (v === 1) {
            answer[1] = +k;
        }
    });

    return answer;
}
