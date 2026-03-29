// https://leetcode.com/problems/contains-duplicate-ii/

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    
    const seen = new Set()
    
    for(let i=0; i<nums.length; ++i){
        const n = nums[i]

        if(seen.has(n)){
            if(seen.size<=k){
                return true
            }
        }else{
            seen.add(n)
            if(seen.size>k){
                seen.delete(nums[i-k])
            }
        }
    }
    return false   
};