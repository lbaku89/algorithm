/**
 * @source http://school.programmers.co.kr/learn/courses/30/lessons/42579
 * @title 베스트앨범
 */

function solution(genres, plays) {
  let genresPlayCnt = {};
  let bestSongs = {};

  genres.forEach((genre, idx) => {
    const playCnt = plays[idx];

    genresPlayCnt[genre] = (genresPlayCnt[genre] || 0) + playCnt;

    if (!bestSongs[genre]) {
      bestSongs[genre] = [idx];
    } else {
      let [first, second] = bestSongs[genre];

      if (plays[first] < playCnt) {
        bestSongs[genre] = [idx, first];
      } else if (bestSongs[genre].length === 1) {
        bestSongs[genre] = [first, idx];
      } else if (bestSongs[genre].length === 2 && plays[second] < playCnt) {
        bestSongs[genre] = [first, idx];
      }
    }
  });

  const rankedGenre = Object.keys(genresPlayCnt).sort((genre1, genre2) => {
    return genresPlayCnt[genre2] - genresPlayCnt[genre1];
  });

  let answer = [];
  rankedGenre.forEach((genre) => {
    bestSongs[genre].forEach((idx) => {
      answer.push(idx);
    });
  });

  return answer;
}
