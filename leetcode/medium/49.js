/**
 * @origin https://leetcode.com/problems/group-anagrams/description/
 */


/**
 * @time compleixty kLogK * n
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    const map = {}
    
    strs.forEach((v)=>{       
        // v의 길이를 k라고 할때
        // 시간 복잡도 k + kLogk + 1  
        const key = [...v].sort().join('')

        if(map[key]){
            map[key].push(v)
        }else{
            map[key]=[v]
        } 
    })
    
    return Object.values(map)
    
};