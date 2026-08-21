/**
 * @param {number[][]} edges
 * @return {number}
 */
var countGoodNodes = function (edges) {
  const n = edges.length + 1;
  const graph = Array.from({ length: n }, () => []);

  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  let answer = 0;

  const dfs = (root, parent) => {
    let isGood = true;
    let nodeSize = 1;
    const childSize = [];
    for (let i = 0; i < graph[root].length; ++i) {
      const curNode = root;
      const child = graph[root][i];
      if (parent === child) {
        continue;
      }

      const size = dfs(child, curNode);
      childSize.push(size);
      nodeSize += size;
    }
    isGood = childSize.every((n, i, self) => {
      if (i !== 0 && self[i - 1] !== self[i]) return false;
      return true;
    });
    if (isGood) {
      ++answer;
    }

    return nodeSize;
  };

  dfs(0, -1);

  return answer;
};
