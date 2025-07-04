/**
 * @source https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/
 */

/**
 * @description time complexity O(1)
 * @param {string} s
 * @return {string}
 */
var findLatestTime = function(s) {

 let splited = s.split('').map((n)=>String(n))
 
 if(splited[4]==='?'){
    splited[4] = '9'
 }
 
 if(splited[3]==='?'){
    splited[3] = '5'
 }
 
 if(splited[0]==='?'){
    if(splited[1]==='?'){
        splited[0]='1'
        splited[1]='1'
    }else if(Number(splited[1])>1){
        splited[0]='0'
    }else{
        splited[0]='1'
    }
 }else{
    if(splited[0]==='1'&&splited[1]==='?'){
        splited[1]='1'
    }else if(splited[0]==='0'&& splited[1]==='?'){
        splited[1]='9'        
    }
 }


 return splited.join('')
    
};