/**
 * @problemLink https://leetcode.com/problems/minimum-positive-sum-subarray/
 */


/**
 * @description optimized solution
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function(nums, l, r) {
    
    let min = Infinity
    for(let windowSize =l ; windowSize <=r; ++windowSize){

        let sum = nums.slice(0,windowSize).reduce((acc,cur)=>acc+cur,0)
        
        if(sum>0){
            min=Math.min(min,sum)
        }

        for(let i=windowSize; i<nums.length; ++i){
            sum+=nums[i]
            sum-=nums[i-windowSize]

            if(sum>0){
                min=Math.min(min,sum)
            }
        }

    }

    if(min!==Infinity){
        return min
    }
    return -1

};


/**
 * @description solution 1 
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function(nums, l, r) {
    
    let min = Infinity

    for(let i=0; i<=nums.length-l; ++i){
        let sum =0
        let arr = []
        for(let j=i; j<i+r; ++j){
            sum+=nums[j]
            arr.push(nums[j])
            if(sum>0 && arr.length>=l && arr.length<=r){
                min = Math.min(min,sum)
            }
        }
    }

    if(min!==Infinity && min>0){
        return min
    }

    return -1

};

/** @testeCase */
console.log(minimumSumSubarray([3,-2,1,4], 2, 3)) // 6
console.log(minimumSumSubarray([-2,2,-3,1], 2, 3)) // -1
console.log(minimumSumSubarray([1,2,3,4], 2, 4)) // -1