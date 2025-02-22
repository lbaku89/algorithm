// https://school.programmers.co.kr/learn/courses/30/lessons/388353
// 지게차와 크레인
// 주의사항 > 한번에 바꾸어야 함

function solution(storage, requests) {
    const maxRow = storage.length - 1,
        maxColumn = storage[0].length - 1;

    // 남은 컨테이너 수
    let containerCnt = storage.length * storage[0].length;

    // 컨테이너 위치와 값을 가지는 2차원 배열 생성
    let storageMap = storage.map((string) => {
        return string.split("");
    });
    // storageMap[row][column] = true 일 경우 => 외부에서 접근 가능한 빈 공간
    // storageMap[row][column] = false 일 경우 => 외부에서 접근 불가능 한 빈공간

    // r,c 가 storageMap 내부에 있는 row와 column인지
    let isInside = (r, c) => {
        if (r >= 0 && r <= maxRow && c >= 0 && c <= maxColumn) {
            return true;
        }
        return false;
    };

    // row,column이 외부에서 접근 가능한지
    const isOutside = (row, column) => {
        // 동서남북
        let dr = [0, 0, 1, -1],
            dc = [1, -1, 0, 0];
        for (let i = 0; i < 4; ++i) {
            let [nearR, nearC] = [row + dr[i], column + dc[i]];
            if (nearR < 0 || nearR > maxRow || nearC < 0 || nearC > maxColumn) {
                return true;
            } else if (nearR >= 0 && nearR <= maxRow && nearC >= 0 && nearC <= maxColumn && storageMap[nearR][nearC] === true) {
                return true;
            }
        }
        return false;
    };

    const resetOutside = () => {
        for (let r = 0; r <= maxRow; ++r) {
            for (let c = 0; c <= maxColumn; ++c) {
                if (isOutside(r, c) && storageMap[r][c] === false) {
                    let arr = [[r, c]];

                    while (arr.length) {
                        let [row, column] = arr.shift();
                        storageMap[row][column] = true;

                        let dr = [0, 0, 1, -1];
                        let dc = [1, -1, 0, 0];

                        for (let i = 0; i < 4; ++i) {
                            let [nearR, nearC] = [row + dr[i], column + dc[i]];

                            if (isInside(nearR, nearC) && isOutside(nearR, nearC) && storageMap[nearR][nearC] === false) {
                                arr.push([nearR, nearC]);
                            }
                        }
                    }
                }
            }
        }
    };

    requests.forEach((request) => {
        let alphabet = request[0];
        resetOutside();
        if (request.length === 1) {
            let pickContainers = [];

            for (let r = 0; r <= maxRow; ++r) {
                for (let c = 0; c <= maxColumn; ++c) {
                    if (isOutside(r, c) && alphabet === storageMap[r][c]) {
                        pickContainers.push([r, c]);
                    }
                }
            }

            pickContainers.forEach(([r, c]) => {
                --containerCnt;
                storageMap[r][c] = true;
            });
        } else {
            for (let r = 0; r <= maxRow; ++r) {
                for (let c = 0; c <= maxColumn; ++c) {
                    if (storageMap[r][c] === alphabet) {
                        --containerCnt;
                        storageMap[r][c] = false;
                    }
                }
            }
        }
    });

    return containerCnt;
}

console.log(solution(["AZWQY", "CAABX", "BBDDA", "ACACA"], ["A", "BB", "A"]));
console.log(solution(["HAH", "HBH", "HHH", "HAH", "HBH"], ["C", "B", "B", "B", "B", "H"]));
console.log(solution(["AAAAA", "ABCBC", "AAAAA"], ["CC", "B", "A"]));
