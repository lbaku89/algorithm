// https://leetcode.com/problems/check-if-the-number-is-fascinating/description/

function isFascinating(n: number): boolean {
    
    const list = `${n}${2*n}${3*n}`
    
    if(list.length>=10){
        return false
    }

    const mustContain = Array(9).fill(0).map((_,idx)=>{
        return String(idx+1)
    })

    for(const n of mustContain){
        if(list.includes(n)){
            continue
        }
        return false
    }
    return true 
};