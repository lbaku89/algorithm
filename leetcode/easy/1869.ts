// https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/description/

function checkZeroOnes(s: string): boolean {
  let continuousZero = 0;
  let continuousOne = 0;

  let continuous = 1;
  let previous = s[0];

  if (previous === "1") {
    ++continuousOne;
  } else {
    ++continuousZero;
  }

  for (let i = 1; i < s.length; ++i) {
    const current = s[i];
    current === previous ? ++continuous : (continuous = 1);

    if (current === "1") {
      continuousOne = Math.max(continuous, continuousOne);
    } else if (current === "0") {
      continuousZero = Math.max(continuous, continuousZero);
    }

    previous = current;
  }
  return continuousOne > continuousZero ? true : false;
}
