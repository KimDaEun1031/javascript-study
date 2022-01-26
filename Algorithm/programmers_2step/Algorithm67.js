// 67. 프린터

// 풀이
function solution(priorities, location) {

    let count = 0;
  
    while(true) {
      if (priorities[0] < Math.max(...priorities)) {
        location--;
  
        if (location < 0) location = priorities.length - 1;
  
        priorities.push(priorities.shift());
      } else {
        count++;
        location--;
  
        if (location < 0) return count;
        
        priorities.shift();
      }
    }
  
}

// map() 과 some() 사용해서 풀어보기
function solution(priorities, location) {

    let list = priorities.map((element, index) => ({
        isMe: index === location,
        val: element,
    }));

    let count = 0;

    while (true) {
        let firstPage = list.shift();

        if (list.some((element) => element.val > firstPage.val)) {
            list.push(firstPage);
        } else {
          count++;

          if (firstPage.isMe) return count;
        }
    }
    
}