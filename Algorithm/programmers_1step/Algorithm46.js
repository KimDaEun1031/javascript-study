// 46. 신규 아이디 추천

// 풀이
function solution(new_id) {

    let first = new_id.toLowerCase();

    let regSecond = /[^a-z0-9_.-]/g;
    let second;
    if (regSecond.test(first)) {
      second = first.replace(regSecond, "");
    } else {
      second = first;
    }


    let regThird = /[.]+/g;
    let third;
    if(regThird.test(second)) {
      third = second.replace(regThird, ".") 
    } else {
      third = second;
    }


    let regFourth = /^[.]|[.]$/g;
    let fourth;
    if(regFourth.test(third)) {
      fourth = third.replace(regFourth, "");
    } else {
      fourth = first;
    }


    let fifth;
    if (fourth === "") {
      fifth = fourth.replace("", "a");
    } else {
      fifth = fourth;
    }
    

    let sixth;
    if (fifth.length >= 16) {
      sixth = fifth.slice(0, 15);
        
      if (/[.]$/g.test(sixth)) {
        sixth = sixth.replace(/[.]$/g, "");
      }
    } else {
      sixth = fifth;
    }


    let result;
    if (sixth.length <= 2) {
      result = sixth.repeat(3);
        
      if (sixth.length === 2) {
        result = sixth.padEnd(3, sixth[1]);
      }
    } else {
      result = sixth;
    }

    return result;
}


// 더 간결하게 풀어보기
function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}