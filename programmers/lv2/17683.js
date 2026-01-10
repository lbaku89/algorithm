// https://school.programmers.co.kr/learn/courses/30/lessons/17683

function solution(m, musicinfos) {
  let answer = "";

  const convert = (music) => {
    return music.replace(/[A-Z]#/g, (m) => m[0].toLowerCase());
  };

  let convertedM = convert(m);
  const arranged = musicinfos.map((info, idx) => {
    let playTime;
    let [start, end, title, map] = info.split(",");

    const [hh, mm] = start.split(":");
    const s = Number(hh) * 60 + Number(mm);
    const [endHH, endMM] = end.split(":");
    const e = Number(endHH) * 60 + Number(endMM);
    return [e - s, title, convert(map), idx];
  });

  arranged.sort((a, b) => {
    if (b[0] !== a[0]) {
      return b[0] - a[0];
    }
    return a[3] - b[3];
  });

  for (const [playTime, title, musicMap] of arranged) {
    playTime < musicMap.length
      ? (realMusicMap = musicMap.slice(0, playTime))
      : (realMusicMap = musicMap.repeat(Math.ceil(playTime / musicMap.length)));

    if (realMusicMap.indexOf(convertedM) >= 0) {
      answer = title;
      break;
    }
  }

  return answer !== "" ? answer : "(None)";
}
