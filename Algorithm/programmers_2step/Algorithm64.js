// 64. 가장 큰 정사각형 찾기


// 풀이
function solution(board) {
    let y = board.length;
    let x = board[0].length;
    let max = 0;

    if (y < 2) {
        for(let i = 0 ; i < y ; i++){
            for(let j = 0;  j < x ; j++) {
                if (board[i][j] === 1) {
                    max = 1;
                }
            }
        }
    } else {
        for(let i = 1 ; i < y ; i++){
            for(let j = 1;  j < x ; j++) {
                if(board[i][j] === 1 ){
                    board[i][j] = Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;

                    if (board[i][j] > max) {
                        max = board[i][j];
                    }
                }
            }
        }
    }

    return Math.pow(max, 2);
}

// 다이나믹 프로그래밍으로 풀어보기
function solution(board) {
    let max = 0;
    let x = board.length;
    let y = board[0].length;

    if(x <= 1 || y <= 1) return 1;

    for(let i  =1; i < x; i++){
        for(let j = 1; j < y; j++){
            if(board[i][j] >= 1){
                let min = Math.min(board[i - 1][j], board[i - 1][j - 1], board[i][j - 1]);

                board[i][j] = min + 1;
                max = Math.max(max, min + 1);
            }
        }
    }

    return max * max;
}