


/**
 * @description time complexity O(1)
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    if(n%2===1){
        return 'a'.repeat(n)
    }

    if(n%2===0){
        return 'a'.repeat(n-1) +'b'
    }
};