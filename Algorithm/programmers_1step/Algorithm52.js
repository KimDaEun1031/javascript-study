// 52. 체육복

// 풀이
function solution(n, lost, reserve) {
    
    for (let i = 0; i < reserve.length; i++) {
      let hasLost = lost.some(item => item == reserve[i]);
      
      if (hasLost) {
        lost = lost.filter(item => item !== reserve[i]);
        reserve[i] = 0;
      }
    }
  
    reserve = reserve.filter(item => item);
    reserve.sort((a, b) => a - b);
    lost.sort((a, b) => a - b);
      
    for (let i = 0 ; i < reserve.length; i++){
      for (let j = 0 ; j < lost.length; j++){
          if (Math.abs(reserve[i] - lost[j]) <= 1){
              reserve[i] = 0
              lost[j] = 0
              break;
          }
      }
    }
      
    return n - lost.filter(item => item).length
}


// 간단하게 풀어보기
function solution(n, lost, reserve) { 
    const realLost = lost.filter((l) => !reserve.includes(l));
    let realReserve = reserve.filter((r) => !lost.includes(r)); 
    
    realLost.sort((a, b) => a - b);
    realReserve.sort((a, b) => a - b);
    
    return n - realLost.filter(a => { 
        const b = realReserve.find(r => Math.abs(r - a) <= 1) 
        if(!b) return true 
        realReserve = realReserve.filter(r => r !== b) }).length; 
}
