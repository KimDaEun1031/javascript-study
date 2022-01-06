// 50. 배열 내의 값 개수 세기

// 풀이
arr = ["1.a", "2.a", "3.b", "4.c"];

let strArr = arr.map(obj => {
	let array = [];
	array.push(obj.split('.')[1]);
	return array;
})

let result = strArr.flat().reduce(function(all, str) {
	if (str in all) {
		all[str]++;
	} else {
		all[str] = 1;
	}
	return all;
}, {});

return result;

