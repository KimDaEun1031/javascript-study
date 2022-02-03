// 74. 순위 검색

// 풀이
function solution(info, query) {
    var answer = [];
    let map = {};
    
    function combination(infos, score, map, start) {
        let key = infos.join("");
        let value = map[key]; 
    
        if(value) { 
            map[key].push(score);
        }else { 
            map[key] = [score];
        }
        
        for(let i=start; i<infos.length; i++){
            let combiArr = [...infos];
            combiArr[i] = '-';
            
            combination(combiArr, score, map, i+1);
        }
    }
    
    function binarySearch(map2, key2, score2){
        let scoreArr = map2[key2];
       
        if(scoreArr){
       
            var start = 0;
            var end = scoreArr.length;
            
            while(start < end){
                var mid = Math.floor((start+end)/2);
                
                if(scoreArr[mid] >= score2) { 
                    end = mid;
                } else if(scoreArr[mid] < score2) {
                    start = mid + 1;
                }
            }
            
            return scoreArr.length - start;
        }
        else return 0
        
    }
    
    
    for(let i=0; i<info.length; i++){
        let infos = info[i].split(" ");
        let score = infos.pop();
        
        combination(infos, score, map, 0);
    }
    
    for(let key in map){
        map[key].sort((o1, o2) => o1 - o2);
    }
    
    for(let i=0; i<query.length; i++){
        let querys = query[i].replace(/ and /g, "").split(" ");
        let score = Number(querys.pop());
      
        answer.push(binarySearch(map, querys.join(""), score));
    }
    
    return answer;
}