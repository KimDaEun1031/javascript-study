// 15. 폰켓몬

// 풀이
function solution(nums) {
    let max = nums.length / 2;
    let result = nums.sort().reduce((acc, cur) => {
    
    const length = acc.length;
    
    if (length === 0 || acc[length-1] !== cur) {
        acc.push(cur);
    }
    
    return acc;
    }, []);
    
    return result.slice(0, max).length;
}