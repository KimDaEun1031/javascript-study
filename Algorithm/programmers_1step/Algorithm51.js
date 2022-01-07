// 51. 직사각형 별찍기

// 풀이
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for (let i = 0; i < b; i++) { 
        let str = "";
        
        for (let j = 0; j < a; j++) { 
            str = str + '*';
        } 
        
    console.log(str);
    }
});

// repeat() 이용해서 풀어보기
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const str = '*'.repeat(a);
    
    for(let i =0; i < b; i++){
        console.log(str);
    }
});