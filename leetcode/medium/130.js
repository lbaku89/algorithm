/**
 * @origin https://leetcode.com/problems/surrounded-regions/
 */


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    
    const [m,n] = [board.length,board[0].length]
    
    const isVisited = Array.from({length:board.length},(_)=>{
        return Array(n).fill(false)
    })

    const dfs =(r,c)=>{
        isVisited[r][c]=true
        const dr =[0,0,1,-1]
        const dc =[1,-1,0,0]

        for(let i=0; i<=3; ++i){
            const [nextR,nextC] = [r+dr[i],c+dc[i]]
            if(nextR>=0 && nextR<m && nextC>=0 && nextC<n && !isVisited[nextR][nextC] && board[nextR][nextC]==='O'){
                dfs(nextR,nextC)
            }
        }

    }

    let r = 0
    for(let c=0; c<n; ++c){   
        if(!isVisited[r][c] && board[r][c]==='O'){
        dfs(r,c)
        }
    }
    r=m-1
    for(let c=0; c<n; ++c){
        if(!isVisited[r][c] && board[r][c]==='O'){
        dfs(r,c)
        }
    }
    let c = 0
    for(let r=0; r<m; ++r){
        if(!isVisited[r][c] && board[r][c]==='O'){
            dfs(r,c)
        }
    }
    c = n-1
    for(let r=0; r<m; ++r){
        if(!isVisited[r][c] && board[r][c]==='O'){
            dfs(r,c)
        }
    }

    for(let row=0; row<m; ++row ){
        for(let col=0; col<n; ++col){
            if(!isVisited[row][col] && board[row][col]==='O'){
                board[row][col]='X'
                isVisited[row][col]=true
            }
        }
    }



    return board

};
