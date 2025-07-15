/**
 * @source https://leetcode.com/problems/number-of-valid-clock-times/description/
 */

/**
 * @description time complexity: O(1)
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
  const [h1, h2, m1, m2] = time.split("").filter((v) => v !== ":");

  let answer = undefined;

  if(h1+h2 === "??") {
   answer = 24;
  }else if(h1 === "?"){
      answer = (Number(h2) > 3 ? 2 : 3);
  }else if(h2 === "?"){
      answer = (Number(h1) > 1 ? 4 : 10);
  }

  if (m1 === "?") answer = (answer || 1) * 6;
  
  if (m2 === "?") answer = (answer || 1) * 10;
  

  return answer || 1;
};
