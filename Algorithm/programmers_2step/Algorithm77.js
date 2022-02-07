// 77. 스킬트리

// 풀이
function solution(skill, skill_trees) {
    let arr = skill.split('');
    let count = 0;
  
    for (let i = 0; i < skill_trees.length; i++) {
      let str = skill_trees[i].split('').filter(item => arr.includes(item)).join('');
      
      if (str === skill.substring(0, str.length)) count++;
    }
  
    return count;
}

// 정규식으로 풀어보기
function solution(skill, skill_trees) {
    let regex = new RegExp(`[^${skill}]`, 'g');

    return skill_trees.map((x) => x.replace(regex, '')).filter((x) => {
            return skill.indexOf(x) === 0 || x === "";
        }).length;
}