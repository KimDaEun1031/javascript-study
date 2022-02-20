// 87. [3차] 방금그곡

// 풀이
function solution(m, musicinfos) {
 
    function getPlayTime(musicinfos) { 
      const musicinfo = musicinfos.split(','); 
      let start = musicinfo[0].split(':'); 
      let end = musicinfo[1].split(':');
      
      return ( (end[0] * 60 + end[1] * 1) - (start[0] * 60 + start[1] * 1) ); 
    } 
    
    function makeMelody(musicinfos) { 
      const section = musicinfos.split(',')[3]; 
      const playtime = getPlayTime(musicinfos); 
      let melody = '';
      let i = 0;
      let count = 0; 
      
      while(count < playtime) { 
        i %= section.length; 
        melody += section[i]; 
        
        if (section[i + 1] == '#') { 
          melody += section[i + 1]; 
          ++i; 
        }
        
        ++i; ++count; 
      } 
      
      return melody; 
    }
     
    const matchedIdx = musicinfos.reduce((acc, cur, i) => { 
      let melody = makeMelody(cur); 
      
      if (m[m.length - 1] != '#') 
        melody = melody.replace(RegExp(m + '#', 'g'), ''); 
      
      if (RegExp(m).test(melody)) acc.push(i);
      
      return acc; 
    }, []); 
    
    if (matchedIdx.length == 0) return '(None)'; 
    if (matchedIdx.length == 1) return musicinfos[matchedIdx[0]].split(',')[2]; 
    
    const max = matchedIdx.reduce((acc, cur) => getPlayTime(musicinfos[acc]) <= getPlayTime(musicinfos[cur]) ? cur : acc);
    const maxTitle = matchedIdx.filter(idx => getPlayTime(musicinfos[idx]) == getPlayTime(musicinfos[max])); 
    
    return musicinfos[maxTitle[0]].split(',')[2];
}

// replace() 간편화, map(), filter() 사용해서 풀어보기
function solution(m, musicinfos) {
    const getMinutes = s => s.substr(0, 2) * 60 + +s.substr(3);

    m = m.replace(/\w#/g, a => a[0].toLowerCase());

    let answer = musicinfos
        .map(info => {
            info = info.split(',');

            let playMinutes = getMinutes(info[1]) - getMinutes(info[0]),
                melody = info[3].replace(/\w#/g, a => a[0].toLowerCase());

            melody = playMinutes > melody.length
                ? melody.padEnd(playMinutes, melody) : melody.substr(0, playMinutes);

            return {playMinutes: playMinutes, melody: melody, name: info[2], startTime: getMinutes(info[0])};
        })
        .filter(info => new RegExp(m).test(info.melody));

    if (answer.length) {
        if (answer.length > 1) {
            answer = answer.filter(v => v.playMinutes >= Math.max(...answer.map(val => val.playMinutes)));

            if (answer.length > 1) {
                answer = answer.filter(v => v.startTime <= Math.min(...answer.map(val => val.startTime)));
            }
        }

        return answer[0].name;
    }

    return "(None)";
}
