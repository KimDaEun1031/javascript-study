// 45. 완주하지 못한 선수

// 풀이
function solution(participant, completion) {

    let result = '';
    participant.sort();
    completion.sort();

    
    for (let i = 0; i < participant.length; i++) {
      if (participant[i] !== completion[i]) {
        result = participant[i];
        return result;        
      }
    }
}

// 다시 풀어보기 1 - 22/02/20
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}