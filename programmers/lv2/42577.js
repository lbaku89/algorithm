// https://school.programmers.co.kr/learn/courses/30/lessons/42577

function solution(phone_book) {
    let sorted = phone_book.sort();
    let prefix = sorted[0];
    let answer = true;

    for (let i = 1; i < sorted.length; ++i) {
        if (sorted[i].startsWith(prefix)) {
            answer = false;
            break;
        }

        prefix = sorted[i];
    }

    return answer;
}
