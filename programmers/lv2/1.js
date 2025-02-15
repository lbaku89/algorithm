// https://school.programmers.co.kr/learn/courses/30/lessons/389479

function solution(players, m, k) {
    let servers = Array(24).fill(0);
    let answer = 0;

    players.forEach((playerCnt, sTime) => {
        if (parseInt(playerCnt / m) > servers[sTime]) {
            let needServerCnt = parseInt(playerCnt / m) - servers[sTime];

            for (let i = 0; i < k; ++i) {
                if (sTime + i <= 23) {
                    servers[sTime + i] = servers[sTime + i] + needServerCnt;
                }
            }
            answer += needServerCnt;
        }
    });

    return answer;
}
