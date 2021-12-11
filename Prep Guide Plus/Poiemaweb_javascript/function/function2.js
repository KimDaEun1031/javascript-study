function calculateArea(width, height) {
    var area = width * height;
    return area;
  }
console.log(calculateArea(3, 5));
console.log(calculateArea(8, 5));
  
function getSize(width, height, depth) {
    var area = width * height;
    var volume = width * height * depth;
    return [area, volume];
  }
  
console.log('area is ' + getSize(3, 2, 3)[0]);
console.log('volume is ' + getSize(3, 2, 3)[1]);