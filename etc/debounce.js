/**
 * @param {Function} fn
 * @param {number} delay
 * @returns {Function}
 */
const debounce = (fn, delay) => {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

const search = debounce((keyword) => {
  console.log(keyword);
}, 300);

search("j");
search("js");
search("javascript");
// 마지막 호출 후 300ms 뒤에 "javascript"만 실행
