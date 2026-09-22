/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
  let stacked = [];
  for (const cha of s) {
    if (cha !== "i") {
      stacked.push(cha);
    } else {
      stacked = stacked.reverse();
    }
  }
  return stacked.join("");
};
