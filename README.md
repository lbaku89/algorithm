# algorithm

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

