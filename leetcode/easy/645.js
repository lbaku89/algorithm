/**
 * @reference time complexity: O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    
    let set = new Set()
    let [duplicated,loss] = [undefined,undefined]  
    for(const n of nums){
        if(set.has(n)){
            duplicated = n
        }else{
            set.add(n)
        }
    }

    for(let i=1; i<=nums.length; ++i){
        if(!set.has(i)){
            loss = i
        }
    }

    return [duplicated,loss]

};