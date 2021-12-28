// 6. 같은 숫자는 싫어

// 풀이
function solution(arr)
{
    var answer = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1]) {
            answer.push(arr[i]);
        } 
    }
    return answer;
}

// filter()를 사용해서 풀어보기
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}

// 다시 풀어보기 1 - 21/12/28
function solution(arr) {
    let result = arr.reduce((acc, cur) => {
      let length = acc.length;
      if (length === 0 || acc[length-1] !== cur) {
        acc.push(cur);
      }
      return acc;
    }, []);
    
    return result;
  }