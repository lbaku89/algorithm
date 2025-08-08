/**
 * @origin https://leetcode.com/problems/count-servers-that-communicate/
 */


// retry -> success
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {

    let [maxRow,maxCol] = [grid.length,grid[0].length]

    const visitMap = Array(grid.length).fill(null).map((v)=>{
        return Array(grid[0].length).fill(false)
    })
    
    const connect=(row,column)=>{
        let connected =1
        visitMap[row][column] = true

        for(let c=0; c<maxCol; ++c){
            if(!visitMap[row][c] && grid[row][c]){
              connected += connect(row,c)
            }
        }

        for(let r=0; r<maxRow; ++r){
            if(!visitMap[r][column] && grid[r][column]){
               connected += connect(r,column)
            }
        }

        return connected   
    }

    let answer = 0

    for(let r=0; r<maxRow; ++r){
        for(let c=0; c<maxCol; ++c){
            if(!visitMap[r][c]&&grid[r][c]){
                let connectedServerCount = connect(r,c)
                if(connectedServerCount>1){
                    answer+=connectedServerCount
                }
            }
        }
    }
    return answer

};



// 1try -> fail
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {

    let [maxRow,maxCol] = [grid.length,grid[0].length]

    const visitMap = Array(grid.length).fill(null).map((v)=>{
        return Array(grid[0].length).fill(false)
    })
    
    const connect=(row,column)=>{
        let connected =1
        visitMap[row][column] = true

        for(let c=0; c<maxCol; ++c){
            if(!visitMap[row][c] && grid[row][c]){
              connected += connect(row,c)
            }
        }

        for(let r=0; r<maxRow; ++r){
            if(!visitMap[r][column] && grid[r][column]){
               connected += connect(r,column)
            }
        }

        return connected   
    }

    let answer = 0

    for(let r=0; r<maxRow; ++r){
        for(let c=0; c<maxCol; ++c){
            if(!visitMap[r][c]){
                let connectedServerCount = connect(r,c)
                if(connectedServerCount>1){
                    answer+=connectedServerCount
                }
            }
        }
    }
    return answer

};


