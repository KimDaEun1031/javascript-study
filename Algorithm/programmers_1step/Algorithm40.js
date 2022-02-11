// 40. 비밀지도

// 풀이
function solution(n, arr1, arr2) {
    let map1 = [];
    let map2 = [];

    arr1.forEach(item => {
      let binary = item.toString(2).split('');
      
      if (binary.length !== n) {
        let length = n - binary.length;
        for (let i = 0; i < length; i++) {
          binary.unshift("0");
        }
        map1.push(binary);
      } else map1.push(binary);     
    })
    
    arr2.forEach(item => {
      let binary = item.toString(2).split('');
      
      if (binary.length !== n) {
        let length = n - binary.length;
        for (let i = 0; i < length; i++) {
          binary.unshift("0");
        }
        map2.push(binary);
      } else map2.push(binary);     
    })

    let result = [];
    for (let i = 0; i < n; i++) {
      let arr = [];
      for (let j = 0; j < n; j++) {
        if (map1[i][j] === '0' && map2[i][j] === '0') {
          arr[j] = ' ';  
        } else {
          arr[j] = '#'; 
        }
      }
      result.push(arr.join(''));
    }

    return result;
}

// 간단하게 풀어보기
function solution(n, arr1, arr2) {
    return arr1.map((v, i) => (v | arr2[i]).toString(2).padStart(n, '0').replace(/1|0/g, a => +a ? '#' : ' '));
}

// 내장함수 활용하지 않고 풀어보기
function solution(n, arr1, arr2) {
    let num1, num2, s;
    let answer = [];
    
    for (let i=0; i<n; i++){
        num1 = arr1[i];
        num2 = arr2[i];
        s = '';
        for (let j=0; j<n; j++){
            s = (num1%2 + num2%2) ? '#'+s : ' '+s;
            num1 = Math.floor(num1/2);
            num2 = Math.floor(num2/2);
        }
        answer.push(s);
    }    
    return answer;
}

// 다시 풀어보기 1 - 22/02/11
function solution(n, arr1, arr2) {
  let map1 = forEachItem(arr1);
  let map2 = forEachItem(arr2);
  let result = [];

  for (let i = 0; i < n; i++) {
    let arr = [];

    for (let j = 0; j < n; j++) {

      if (map1[i][j] === '0' && map2[i][j] === '0') {
        arr[j] = ' ';  
      } else {
        arr[j] = '#'; 
      }
    }

    result.push(arr.join(''));
  }

  function forEachItem(arr) {
    let map = [];
    arr.forEach(item => {
      let binary = item.toString(2).split('');
      
      if (binary.length !== n) {
        let length = n - binary.length;

        for (let i = 0; i < length; i++) {
          binary.unshift("0");
        }

        map.push(binary);

      } else map.push(binary);     
    });

    return map;
  }

  return result;
}