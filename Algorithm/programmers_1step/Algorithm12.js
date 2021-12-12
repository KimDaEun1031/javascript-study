// 12. 문자열 내 p와 y의 개수

// 풀이
function solution(s){
    let p_count = 0, y_count = 0;
    let str = s.split('');   

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'p' || str[i] === 'P') {
            p_count++;
        } 

        if (str[i] === 'y' || str[i] === 'Y') {
            y_count++;
        }   
    }     

    if (p_count === y_count || (p_count === 0 && y_count === 0)) {
        return true;
    }  
    return false;
}