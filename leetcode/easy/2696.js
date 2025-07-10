/** 
 * @source  https://leetcode.com/problems/minimum-string-length-after-removing-substrings/
*/


/**
 * @description time complexity: O(n)
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {

    let arr = s.split('')

    const stack = []

    for(let i=0; i<arr.length; ++i){
    
        const char = arr[i]
        stack.push(char)

        while(stack.length>=2){
            const last = stack.at(-1)
            const secondLast = stack.at(-2)

            let lastTwo = secondLast +last
            
            if(lastTwo === 'AB' || lastTwo === 'CD'){
                stack.pop() 
                stack.pop()
            }else{
                break
            }
        }
    }
    return stack.length


};