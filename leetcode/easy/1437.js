
// https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/



// time complexity: O(n)
/** @todo check diffrent solution */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    
    let prevIdx = undefined
    let nextIdx = 0
    let answer = true 
    nums.forEach((isOne,idx)=>{
        if(prevIdx===undefined && isOne){
            prevIdx =idx
        }else if(prevIdx!==undefined&&isOne){
            if(idx-prevIdx-1<k){
                answer = false
            }
            prevIdx=idx
        }
    })

    return answer
};