/**@origin https://leetcode.com/problems/merge-intervals/ */

/**
 * @description time-complexity O(nlogn)
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    // O(nlogn)
    intervals.sort((a,b)=>{
        if(a[0]!==b[0]){ 
            return a[0]-b[0]
        }
        if(a[1]!==b[1]){
            return a[1]-b[1]
        }
        return -1
    })

    let answer = []
    let temp = [intervals[0][0],intervals[0][1]]
    
    // O(n) 
    for(let i=0; i<intervals.length; ++i){
        
        const [s,e] = intervals[i]

        if(e<temp[1]){
            
        }else if(e>=temp[1]&&s<=temp[1]){
            temp[1]=e
        }else{
            answer.push([...temp])
            temp[0]=s
            temp[1]=e
        }


        if(i===intervals.length-1){
            answer.push([...temp])
        }
    }
    
    return answer
    
};