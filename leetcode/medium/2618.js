/** @origin https://leetcode.com/problems/check-if-object-instance-of-class/description/ */

/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  if (obj === null) {
    return false;
  }

  while (obj !== null) {
    if (obj.constructor === classFunction) {
      return true;
    }
    obj = Object.getPrototypeOf(obj);
  }
  return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
