// https://school.programmers.co.kr/learn/courses/30/lessons/12902
// 3 x n 타일링

function solution(n) {
    // n은 5,000 이하

    let dp = Array(n + 1).fill(0);
    dp[1] = 0;
    dp[2] = 3;
    dp[3] = 0;
    dp[4] = 11; // dp[2] * dp[2] + 2

    const shared = (num) => {
        return num % 1000000007;
    };

    for (let i = 5; i <= n; ++i) {
        if (i % 2 === 1) {
            dp[i] = 0;
        } else {
            let flag = parseInt((i - 4) / 2);

            if (flag % 2 === 0) {
                dp[i] = shared(dp[i / 2]) ** 2 + 2 * shared(dp[flag]) ** 2;
                dp[i] = shared(dp[i]);
            } else {
                let n = parseInt(i / 2);
                dp[i] = shared(dp[2]) ** n;
                dp[i] = dp[i] % 1000000007;
            }
        }
    }
    return dp[n];
}

let testCase = 6;
console.log(solution(testCase));
