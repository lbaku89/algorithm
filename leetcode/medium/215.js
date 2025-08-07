/**
 * @origin https://leetcode.com/problems/kth-largest-element-in-an-array/
 */

/**
 * @description time complexity O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

    let [max,min] = [-Infinity,Infinity]
    
    nums.forEach((n)=>{
        max = Math.max(n,max)
        min = Math.min(n,min)
    })

    let map = Array(max-min+1).fill(0)

    nums.forEach((n)=>{
        ++map[n-min]
    })

    for(let i=map.length-1; i>=0; --i){
        k-=map[i]
        if(k<=0){
            return i+min
        }
    }
};