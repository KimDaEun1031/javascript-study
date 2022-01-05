// 47. 크레인 인형뽑기 게임

// 풀이
function solution(board, moves) {
    const arr = moves.map(a => a - 1);
    let result = [];
    let answer = 0;

    arr.forEach(x => {
      if (result.length >= 2) {
        result.filter((arr, index) => {
          if(arr === result[index + 1]) {
            result.pop(arr);
            result.pop(result[index + 1]);
            answer += 2;
          }
        });
      }

      for (let i = 0; i < board.length; i++) {
        if (board[i][x] === 0) continue;
        else {
          result.push(board[i][x]);
          board[i][x] = 0;
          break;
        }
      }
    });

    return answer;
}