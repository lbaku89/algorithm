# algorithm

#### 대충 만든 자판
https://school.programmers.co.kr/learn/courses/30/lessons/160586
```js
function solution(keymap, targets) {
    
    let answer=[]
    let idx ={}
    
    for(let keys of keymap){
        [...keys].forEach((key,i)=>{
            if(idx[key]===undefined||idx[key]>i+1){
                idx[key]=i+1
            }
        })
    }
    
    for(let target of targets){
        let count=0
        for(key of target){
            if(idx[key]){
                count+=idx[key]    
            }else{
                count=-1
                break;
            }  
        }
        answer.push(count)
    }
    return answer;
}
```

#### 과일장수
https://school.programmers.co.kr/learn/courses/30/lessons/135808
```js
function solution(k, m, score) {
    let answer = 0;
    if(m>score.length){
        return 0
    }
        
    let scores = score.sort((a,b)=>b-a).map((v)=>{
        return v>k?k:v
    })

    score.forEach((v,i)=>{
        if((i%m)===(m-1)){
            answer+=v*m
        }
    })
    return answer;
}
```

#### 달리기 경주
https://school.programmers.co.kr/learn/courses/30/lessons/178871
```js
function solution(players, callings) {
    
    const a = {}
    players.forEach((v,i)=>{
        a[v]=i 
    })
    
    callings.forEach((v,i)=>{
       a[v]  
       let prevPlayer = players[a[v]-1] // 새로운 랭크 
       let newRank = a[v] -1 // v의 새로운 랭크 
       players.splice(a[v]-1,2,v,prevPlayer)
       a[v]=a[v]-1
       a[prevPlayer]=a[prevPlayer]+1
        
    })
    
    return players
    
}
```
#### [카카오 인턴] 키패드 누르기
https://school.programmers.co.kr/learn/courses/30/lessons/67256
```js
function solution(numbers, hand) {   
    let l =[3,0]
    let r =[3,2]
    let answer = ''
    let converted = numbers.map((s)=>{
        if(s===0){
            return[3,1]
        }else{            
            return [parseInt((s-1)/3),(s-1)%3]
        }
    })
    
    for(let i of converted){
        if(i[1]===0){
            answer+='L'
            l=i
        }else if(i[1]===2){
            answer+='R'
            r=i
        }else if(i[1]===1){
            
           let x =Math.abs(i[0]-l[0])+Math.abs(i[1]-l[1]) // left diff
           let y =Math.abs(i[0]-r[0])+Math.abs(i[1]-r[1]) // right diff
           
           if(x===y){
               if(hand==='right'){
                   r=i
                   answer+='R'
               }else{
                   l=i
                   answer+='L'
               }
           }else if(x<y){
               l=i
               answer+='L'
           }else{
               r=i
               answer+='R'
           }   
        }
    }

    return answer;
}
```

#### 명예의 전당 (1) lv1
https://school.programmers.co.kr/learn/courses/30/lessons/138477
```js
function solution(k, score) {
    
    let stack = [] 
    let answer = []
    
    for(let s of score){
        if(stack.length<k){
            stack.push(s)
            stack.sort((a,b)=>a-b)
            answer.push(stack[0])
        }else{
            stack.push(s)
            stack.sort((a,b)=>b-a)
            answer.push(stack[k-1])
        }
    }
    return answer;
}
```

#### 콜라문제 (lv1)
https://school.programmers.co.kr/learn/courses/30/lessons/132267
```js
function solution(a, b, n) {
    let answer = 0
    while(parseInt(n/a)>=1){
        answer = answer + parseInt(n/a)*b     
        n = n%a + parseInt(n/a)*b
    }
    return answer
}
```


#### 덧칠하기 (lv1)
https://school.programmers.co.kr/learn/courses/30/lessons/161989
```js
function solution(n, m, section) {
    var answer = 0;
    let i=0
    let j=0
    
    while(i<=n){
        if(i>section[j]){
            ++j
        }else if(i===section[j]){
           i=i+m
           ++answer
           ++j
           if(i>n){break;}  
        }else{
           ++i 
        }  
    }
    return answer
}
```


#### 추억점수 (lv1)
https://school.programmers.co.kr/learn/courses/30/lessons/176963
```js
function solution(name, yearning, photo) {

    let na = name 
    let ye = yearning
    let ph = photo
    
    let ob ={}
    na.forEach((name,i)=>{
        ob[name]=ye[i]
    })
    
    let answer = ph.map((photo)=>{
        return photo.reduce((prev,curr)=>{
            return ob[curr]?prev+ob[curr]:prev
        },0)
    })
    
    return answer;
}
```

#### [PCCP 기출문제] 1번 / 붕대 감기 (lv1)
https://school.programmers.co.kr/learn/courses/30/lessons/250137
```js
function solution(bandage, health, attacks) {
    
    let maxHp = health
    let ba = bandage
    let he = health
    let at = attacks

    let i=1 // 시간 stack 
    let j=0 // 몬스터 공격 stack 
    let z=0 // 연속 체력 회복 stack
    let maxTime = at[at.length-1][0]
    
    while(i<=maxTime){
        if(i===at[j][0]){
            z=0
            he = he - at[j][1] 
            ++j
            if(he<=0){ 
                he=-1 
                break;         
            } 
        }else{
           ++z;
           he = he + ba[1]
           if(z===ba[0]){
                he= he + ba[2]
                z=0
            }
            if(he>=maxHp){
                he=maxHp
            }
        }
        ++i
    }
    return he 
}

```

