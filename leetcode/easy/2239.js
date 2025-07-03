/**
 * @description time complexity O(n)
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {

    let answer = Infinity
    for(const n of nums){

        let distance = Math.abs(n)
        if(distance<Math.abs(answer)){
            answer = n
        }else if(distance===Math.abs(answer)){
            answer = n > answer ? n : answer    
        }
        
    }
    return answer
};