/** 
 * @source https://leetcode.com/problems/backspace-string-compare
*/


/** 
 * @description time complexity: O(s+t) // code simplified
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    const getConvertedStr = (str) =>{
        let stack = []
        
        str.split('').forEach((cha)=>{
            if(cha==='#'){
                stack.pop()
            }else{
                stack.push(cha)
            }
        })

        return stack.join('')
    }
    
    return getConvertedStr(s) === getConvertedStr(t)
    
};


// --------------------------------------------------

/** 
 * @description time complexity: O(s+t) / 첫번째 시도 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    const sArr = s.split('')

    sArr.forEach((cha,idx)=>{
        if(cha==='#'){
            sArr[idx]=null
            for(let i=idx-1; i>=0; --i ){
                if(sArr[i]!==null){
                    sArr[i]=null
                    break;
                }
            }
        }
    })
    const finalS = sArr.filter((cha)=> cha!==null).join('')
    
    const tArr = t.split('')
    tArr.forEach((cha,idx)=>{
        if(cha==='#'){
            tArr[idx]=null
            for(let i=idx-1; i>=0; --i ){
                if(tArr[i]!==null){
                    tArr[i]=null
                    break;
                }
            }
        }
    })
    const finalT = tArr.filter((cha)=> cha!==null).join('')
    

    return finalS===finalT
    
};