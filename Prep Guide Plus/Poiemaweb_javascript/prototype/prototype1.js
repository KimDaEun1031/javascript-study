var student = {
    name: 'Lee',
    score: 90
  };
  
  console.log(student.hasOwnProperty('name'));
  
  console.dir(student);
  
  console.log(student.__proto__ === Object.prototype);