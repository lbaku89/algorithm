// https://leetcode.com/problems/create-target-array-in-the-given-order/

function createTargetArray(nums: number[], index: number[]): number[] {
    
    const arr:number[] = []

    for(let i=0; i<nums.length; ++i){
        
        const targetIdx = index[i]
        const n = nums[i]

        arr.splice(targetIdx,0,n)
        
    }
    return arr
};