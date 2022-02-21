// 88. 다리를 지나는 트럭

// 풀이
function solution(bridge_length, weight, truck_weights) {
    const bridge = [];
    let result = 0;
    let count = 0;
  
    for (let i = 0; i < bridge_length; i++) {
      bridge.push(0);
    }
  
    let nowTruck = truck_weights.shift();
  
    bridge.unshift(nowTruck);
    bridge.pop();
  
    count += nowTruck;
    result += 1;
  
    while (count) {
      
      count -= bridge.pop();
  
      nowTruck = truck_weights.shift();
  
      if (nowTruck + count <= weight) {
        bridge.unshift(nowTruck);
        count += nowTruck;
      } else {
        bridge.unshift(0);
        truck_weights.unshift(nowTruck);
      }
  
      result += 1;
    }
  
  
    return result;
}

// 시간이 흐르는 것에 중점을 두고 풀어보기 (성능 ↑, 시간복잡도 ↓)
function solution(bridge_length, weight, truck_weights) {
    let time = 0
    let queue = [[0, 0]]
    let weightOnBridge = 0;
  
    while (queue.length > 0 || truck_weights.length > 0) {
  
      if (queue[0][1] === time) weightOnBridge -= queue.shift()[0];
  
      if (weightOnBridge + truck_weights[0] <= weight) {
        weightOnBridge += truck_weights[0];
        queue.push([truck_weights.shift(), time + bridge_length]);
      } else if (queue[0]) {
        time = queue[0][1] - 1;
      }
  
      time += 1;
    }
  
    return time;
}