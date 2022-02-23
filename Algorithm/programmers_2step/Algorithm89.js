// 89. 압축

// 풀이
function solution(msg) {
    let dictionary = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
                      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const result = [];
  
    const LZW = function (arr, str) {
  
      for (let i = 0; i < arr.length; i++) {
        let subStr = str.substring(0, i + 1); 
  
        if (!arr.includes(subStr)) {
          dictionary.push(subStr);
          result.push(arr.findIndex(el => el === str.substring(0, i)) + 1);
          LZW(arr, str.substring(i));
          break;
        } else if (i + 1 === str.length) {
          result.push(arr.findIndex(el => el === str.substring(0, i + 1)) + 1);
        }  
      }
  
      return result;
    }
  
    return LZW(dictionary, msg);
}

// while 문, 정규표현식 이용해서 풀어보기
function solution(msg) {
    let answer = [],
        dictionary = [''].concat([...Array(26).keys()].map(v => String.fromCharCode(v + 65)));
  
    while (msg.length) {
      for (let i = dictionary.length - 1; i >= 0; i--) {
        let characters = dictionary[i];
  
        if (new RegExp('^' + characters).test(msg)) {
          let newCharacter = msg.substr(0, characters.length + 1);
  
          if (dictionary.indexOf(newCharacter) < 0) dictionary.push(newCharacter);
  
          msg = msg.substr(characters.length);
          answer.push(i);
          break;
        }
      }
    }
  
    return answer;
}