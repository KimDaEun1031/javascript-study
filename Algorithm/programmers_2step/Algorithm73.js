// 73. 피로도

// 풀이
function solution(k, dungeons) {
    let check = [];
    let result = 0;
  
    dfs(k, dungeons, 0);
  
    function dfs(k, arr, count) {
      for (let i = 0; i < arr.length; i++) {
        if (!check[i] && arr[i][0] <= k) {
          check[i] = true;
          dfs(k - arr[i][1], arr, count + 1);
          check[i] = false;
        }
      }
  
      result = Math.max(result, count);
    }
  
    return result;
}