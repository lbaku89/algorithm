// https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/description/


//Constraints:
//2 <= nums.length <= 100
//1 < 2 * k <= nums.length
//−1000 <= nums[i] <= 1000

function hasIncreasingSubarrays(nums: number[], k: number): boolean {

    let prevCount = 0, currCount =1;

    for(let i=1; i<nums.length; ++i){

        if(nums[i]>nums[i-1]){
            ++currCount
        }else{
            prevCount = currCount 
            currCount = 1
        }

        if(prevCount>=k&&currCount>=k || currCount >= 2*k ){
            return true
        }
    }
    return false


};

// function hasIncreasingSubarrays(nums: number[], k: number): boolean {
//     if(k===1){
//         return true
//     }
    
//     let queue: number[] = [nums[0]]
//     for(let i=1; i<=nums.length-1-k; ++i){
//         const n = nums[i]
//         const last = queue.at(-1)
//         if(last!==undefined && last>=n){
//             queue = []
//         }
//         queue.push(n)
        
//         if(queue.length===k && i+k < nums.length){
//             const pairSub = [nums[i+1]] 
//             for(let j=i+2; j<=i+k ; ++j){
//                 const n2 = nums[j]
//                 const last2 = pairSub.at(-1)
//                 if(last2!==undefined && last2>=n2){
//                     break
//                 }
//                 pairSub.push(n2)
//             }
//             if(pairSub.length===k){
//                 return true
//             }
//             queue.shift()
//         }   
//     }
//     return false
// };