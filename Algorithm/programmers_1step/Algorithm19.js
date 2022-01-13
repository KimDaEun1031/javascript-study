// 19. 로또의 최고 순위와 최저 순위

// 풀이
function solution(lottos, win_nums) {
    let answer = [];
    let min = 0;
    let max = 0;

    let correctAnswer = lottos.filter(lotto => win_nums.includes(lotto)).length;
    let zero = lottos.filter(lotto => lotto === 0).length;
    
    // 순위 지정
    if (zero === 6) {
       min = 6; max = 1;           
    } else if (correctAnswer === 6) {
        min = 1; max = 1;
    } else if (zero === 0 && correctAnswer === 0) {
        min = 6; max = 6;
    } else {
        min = (win_nums.length - correctAnswer) + 1;
        max = (win_nums.length - (correctAnswer + zero) ) + 1;
    }
        
    answer = [max, min]

    return answer;
}

// 다른 사람 풀이 1
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let correctAnswer = lottos.filter(lotto => win_nums.includes(lotto)).length;
    let zero = lottos.filter(lotto => !lotto).length;

    const maxCount = correctAnswer + zero;

    return [rank[maxCount], rank[minCount]];
}

// 다른 사람 풀이 2
// 풀이
function solution(lottos, win_nums) {
    let answer = [];
    let min = 0;
    let max = 0;

    let correctAnswer = lottos.filter(lotto => win_nums.includes(lotto)).length;
    let zero = lottos.filter(lotto => lotto === 0).length;
    
    // 순위 지정
    let min = 7 - correctAnswer >= 6 ? 6 : 7 - correctAnswer;
    let max = min - zero < 1 ? 1 : min - zero;
        
    answer = [max, min]

    return answer;
}

// 다시 풀어보기 1 - 22/01/13
function solution(lottos, win_nums) {
    let answer = [];

    let min = lottos.filter(lotto => win_nums.includes(lotto)).length;
    let max = lottos.filter(lotto => lotto === 0).length + min;

    max !== 0 ? answer.push(7 - max) : answer.push(6);
    min !== 0 ? answer.push(7 - min) : answer.push(6);
    
    return answer;
}