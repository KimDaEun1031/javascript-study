// 38. 실패율

// 풀이
function solution(N, stages) {
    let answer = [];
    let  total = [];
    
    for(let i = 1;i <= N; i++){
        let count = 0;
        let players = 0;
        for(let j = 0; j < stages.length; j++){
            if(stages[j] >= i){
                players++;
            }
            if(stages[j] === i){
                count++;
            }
        }
        answer.push({stage:i, percent:count/players});
    }
    answer.sort((a, b)=>{
        if(a.percent === b.percent){
            return a.stage - b.stage;
        }else{
            return b.percent - a.percent;
        }
    })

    return answer.map(item => item.stage)
}

// filter() 사용해서 풀어보기
function solution(N, stages) {
    let answer = [];
    let length = stages.length;
    for (let i = 1; i <= N+1; i++) {				
        let tmp = stages.filter(n => n === i).length;			
        answer.push([i, tmp / length]);			
        length -= tmp;
    }
		
    answer.pop();		
    answer = answer.sort((a,b) => b[1] - a[1]);
    
    return answer.map( a => a[0]);
}

// 다시 풀어보기 1 - 22/02/09
function solution(N, stages) {
    let result = [];
  
    for (let i = 1; i <= N; i++) {
      let denominator = stages.filter((x) => x >= i).length;
      let numerator = stages.filter((x) => x === i).length;
      result.push([i, numerator / denominator]);
    }
  
    result.sort((a, b) => b[1] - a[1]);
    return result.map(item => item[0]);
}
