/**
 * @origin https://leetcode.com/problems/find-the-number-of-good-pairs-ii/
 */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {

  
   let map = {}

   nums2.forEach((n)=>{
    map[n*k] = (map[n*k] || 0 ) + 1;
   })

    let answer = 0;

    nums1.forEach((n)=>{
      for(let i=1; i<= Math.sqrt(n); ++i){        
        if(n%i===0){
            if(i===n/i){
                answer += (map[i] || 0 )
            }else{
                answer += (map[i] || 0)
                answer += (map[n/i] || 0)   
            }
        }        
      }
    })
    
    return answer 
}; 