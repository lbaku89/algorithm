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

    const dfs =(r,c,i)=>{

        if(r<0 || r>=m || c>=n || c<0 || board[r][c] ==='#'|| board[r][c] !== word[i]){
            return false
        } 

        if(i === word.length-1 && board[r][c] === word[i]){
            return true
        }


        const dr = [0,0,1,-1]
        const dc = [1,-1,0,0]

        const temp = board[r][c]
        board[r][c] = '#' // mark as visited

        const found = dfs(r+dr[0],c+dc[0],i+1) || dfs(r+dr[1],c+dc[1],i+1) ||
                      dfs(r+dr[2],c+dc[2],i+1) || dfs(r+dr[3],c+dc[3],i+1)

        board[r][c] = temp 

        return found
    }

    for(let r=0; r<board.length; ++r){
        for(let c=0; c<board[0].length; ++c){
            if(board[r][c]===word[0] && dfs(r,c,0)){
                answer = true
            }
        }
    }



   return answer
};


console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")) // false