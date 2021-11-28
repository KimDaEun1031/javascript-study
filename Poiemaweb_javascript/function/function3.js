function parent(param) {
    var parentVar = param;
    function child() {
      var childVar = 'lee';
      console.log(parentVar + ' ' + childVar); 
    }
    child();
    console.log(parentVar + ' ' + childVar);
  }
  parent('Hello');