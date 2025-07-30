/** 
 * @origin https://leetcode.com/problems/word-search/ 
 * @time complexity O(m*n*4^word.length)  
 * */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    let answer = false
    const [m,n] = [board.length,board[0].length];

    const dfs =(r,c,passed,i)=>{
        ++i
        if(i>=word.length){
            answer=true
            return
        }

        const dr = [0,0,1,-1]
        const dc = [1,-1,0,0]


        for(let index=0; index<4; ++index){
            const nr = r + dr[index]
            const nc = c + dc[index]
            if(nr>=0 && nr<=m-1 && nc>=0 && nc<=n-1 &&
             !passed.includes(String(nr+','+nc)) && board[nr][nc] === word[i] ){
                dfs(nr,nc,[...passed,String(nr+','+nc)],i)
            }
        }
    }

    for(let r=0; r<board.length; ++r){
        for(let c=0; c<board[0].length; ++c){
            if(board[r][c]===word[0]){
                dfs(r,c,[r+','+c],0)
            }
        }
    }



   return answer
};


console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")) // false