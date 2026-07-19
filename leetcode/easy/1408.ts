// https://leetcode.com/problems/string-matching-in-an-array/submissions/2073272742/

function stringMatching(words: string[]): string[] {

  // 100 + 99 + ..
  // time complexity O(n^2)

  const set = new Set<string>([])
  words.sort((a,b)=>b.length-a.length)
  
  for(let i=0; i<words.length-1; ++i){
    const word = words[i]
    for(let j=i+1; j<words.length; ++j){
        if(word.indexOf(words[j])>=0){
            set.add(words[j])
        }
    }
  }
  return Array.from(set)
};