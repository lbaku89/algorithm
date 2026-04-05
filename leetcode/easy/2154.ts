// https://leetcode.com/problems/keep-multiplying-found-values-by-two/description/
// O(n) time complexity and O(n) space complexity solution

function findFinalValue(nums: number[], original: number): number {
    
    let answer = original
    const set = new Set(nums)

    while(set.has(answer)){
        answer *=2
    }

    return answer    
};