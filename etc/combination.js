let result = 0;

const combination = (n, start, restPickCnt) => {
    if (restPickCnt === 0) {
        result += 1;
    }

    for (let i = start; i <= n; ++i) {
        combination(n, i + 1, restPickCnt - 1);
    }
};

combination(5, 1, 3);
console.log(result); // 10
result = 0; // 초기화

combination(10, 1, 5);
console.log(result); // 252
result = 0; // 초기화

combination(5, 1, 1);
console.log(result); // 5
result = 0; // 초기화
