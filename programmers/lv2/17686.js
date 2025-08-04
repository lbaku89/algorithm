/**
 * @origin https://school.programmers.co.kr/learn/courses/30/lessons/17686?language=javascript
 * @todo post하면 좋을 것 같다 (정규식 관려)
*/

/**
 * @note 실패  isNaN(' ') -> false 가 될 수 있다. 
 */
function solution(files) {
    
    files.sort((a,b)=>{
        let [aHead,aNum,aTail] = a.match(/^([^\d]+)(\d{1,5})/).slice(1)
        let [bHead,bNum,bTail] = b.match(/^([^\d]+)(\d{1,5})/).slice(1)
        
        if(aHead.toLowerCase()>bHead.toLowerCase()){
            return 1
        }else if(aHead.toLowerCase()<bHead.toLowerCase()){
            return -1
        }
        
        if(Number(aNum)<Number(bNum)){
            return -1
        }else if(Number(aNum)>Number(bNum)){
            return 1
        }  
        
        return 0
    })
    
    return files
}



/**
 * @note 실패  isNaN(' ') -> false 가 될 수 있다. 
 */
function solution(files) {
    
    files.sort((a,b)=>{
        let [aHead,aNum] = ['','']
        let [bHead,bNum] = ['','']
        for(let i=0; i<a.length; ++i){
            if(isNaN(a[i])&&!aNum){
                aHead += a[i]
            }else if(!isNaN(a[i])&&aNum.length<=4){
                aNum +=a[i]
            }else{
                break
            }
        }
        
        for(let i=0; i<b.length; ++i){
            if(isNaN(b[i])&&!bNum){
                bHead += b[i]
            }else if(!isNaN(b[i])&&bNum.length<=4){
                bNum +=b[i]
            }else{
                break
            }
        }
        
        if(aHead.toLowerCase()>bHead.toLowerCase()){
            return 1
        }else if(aHead.toLowerCase()<bHead.toLowerCase()){
            return -1
        }
        
        if(Number(aNum)<Number(bNum)){
            return -1
        }else if(Number(aNum)>Number(bNum)){
            return 1
        }  
        
        return 0
    })
    
    return files
}