// 유클리드 호제법
// euclidean algorithm
// 최대 공약수 구하는 알고리즘

const fn = (a, b) => {
    let n = a % b;

    if (n === 0) {
        return n;
    }

    return fn(b, n);
};
