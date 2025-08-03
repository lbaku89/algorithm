/** @reference https://leetcode.com/problems/regions-cut-by-slashes/solutions/5616179/beginner-friendly-solution-with-depth-first-search-step-explanation/ */


/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
  
  const n = grid.length;
  const matrix = Array(n *3).fill(null).map((_)=> Array(n *3).fill(0));


  const dfs =(r,c)=>{
    matrix[r][c]=1

    const dr=[0,0,1,-1]
    const dc=[1,-1,0,0]

    for(let i=0; i<4; ++i){
      const [nx,nc] = [r+dr[i],c+dc[i]]
      if(nx<0 || nx>=n*3 || nc<0 || nc>=n*3 || matrix[nx][nc] === 1){
          continue
      }
      dfs(nx,nc)
    }
  }

  for(let row=0; row<n; ++row){
    for(let col=0; col<n; ++col){
        if(grid[row][col]==='/'){
          matrix[row*3][col*3+2]=1
          matrix[row*3+1][col*3+1]=1
          matrix[row*3+2][col*3]=1
        }else if(grid[row][col]==='\\'){
          matrix[row*3][col*3]=1
          matrix[row*3+1][col*3+1]=1
          matrix[row*3+2][col*3+2]=1
        }
    }
  }
  let count = 0


  for(let row=0; row<n*3; ++row){
    for(let col=0; col<n*3; ++col){
      if(matrix[row][col]===0){
        dfs(row,col)
        ++count
      }
    }
  }

  return count

};


// test case
console.log(regionsBySlashes(["/\\","\\/"]))