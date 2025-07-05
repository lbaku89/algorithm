/**
 * @source https://leetcode.com/problems/clear-digits/description/
 */

/**
 * @description time complexity: O(n)
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {

    let left = []
    for(const cha of s.split('')){
        if(isNaN(cha)){
            left.push(cha)
        }else{
            if(left.length>0){
                left.pop()
            }
        }
    }

    return left.join('')
 

};
