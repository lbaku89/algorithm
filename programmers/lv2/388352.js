// https://school.programmers.co.kr/learn/courses/30/lessons/388352

// 이 문제는 10<= n <=30 , 1<=q<=10 ,ans.length = q.length 라는 조건이 있어서
// 시간복잡도가 터지는걸 방지했다. -> 그래서 5중 for문을 사용했다. 다른 방법은 없는걸로 보임

function solution(n, q, ans) {
  let answer = 0;

  for (let p1 = 1; p1 <= n - 4; ++p1) {
    for (let p2 = p1 + 1; p2 <= n - 3; ++p2) {
      for (let p3 = p2 + 1; p3 <= n - 2; ++p3) {
        for (let p4 = p3 + 1; p4 <= n - 1; ++p4) {
          for (let p5 = p4 + 1; p5 <= n; ++p5) {
            let map = {
              [p1]: true,
              [p2]: true,
              [p3]: true,
              [p4]: true,
              [p5]: true,
            };

            for (let i = 0; i < q.length; ++i) {
              let cnt = 0;

              q[i].forEach((v) => {
                if (map[v]) {
                  ++cnt;
                }
              });

              if (cnt !== ans[i]) {
                break;
              }

              if (i === q.length - 1) {
                ++answer;
              }
            }
          }
        }
      }
    }
  }

  return answer;
}
