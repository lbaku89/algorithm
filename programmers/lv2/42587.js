function solution(priorities, location) {
    let refArr = [...priorities].sort((a, b) => a - b);
    let answer = 0;
    let idx = 0;
    while (refArr.at(-1) >= priorities[location]) {
        if (priorities[idx] >= refArr.at(-1)) {
            ++answer;
            refArr.pop();
            priorities[idx] = 0;
            if (idx === location) {
                break;
            }
        }

        idx = (idx + 1) % priorities.length;
    }

    return answer;
}
