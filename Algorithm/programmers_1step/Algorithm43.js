// 43. 숫자 문자열과 영단어

// 풀이
function solution(s) {
    let num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let str = s;
    
    for (let i = 0; i < num.length; i++) {
      let result = str.split(num[i]);
      str = result.join(i);
    }

    return Number(str);
}

// 정규표현식 사용해서 풀어보기
function solution(s) {
    s = s.replace(/zero/gi, 0)
    .replace(/one/gi, 1)
    .replace(/two/gi, 2)
    .replace(/three/gi, 3)
    .replace(/four/gi, 4)
    .replace(/five/gi, 5)
    .replace(/six/gi, 6)
    .replace(/seven/gi, 7)
    .replace(/eight/gi, 8)
    .replace(/nine/gi, 9)
    return parseInt(s);
}