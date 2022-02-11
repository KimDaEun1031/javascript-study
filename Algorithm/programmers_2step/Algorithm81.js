// 81. 구명보트

// 풀이
function solution(people, limit){
    let result = 0; 
    let count = 0;
    let len = people.length - 1;
  
    people.sort((a, b) => b - a);
    
    while(count < len) {
      let sum = people[count] + people[len];
  
      if(sum > limit){
        count++;
      } else {
        count++;
        len--;
      }
  
      result++;
    }
  
    if(count === len) result++;
    
    return result;
}