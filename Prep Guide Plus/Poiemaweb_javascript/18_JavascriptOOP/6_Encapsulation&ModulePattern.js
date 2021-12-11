// 6. 캡슐화와 모듈 패턴

// 기본적인 정보 은닉 방법
var person = function(arg) {
    var name = arg ? arg : '';
  
    return {
      getName: function() {
        return name;
      },
      setName: function(arg) {
        name = arg;
      }
    }
}

var me = person('Lee'); /* or var me = new person('Lee'); */

var name = me.getName();

console.log(name);

me.setName('Kim');
name = me.getName();

console.log(name);

// 모듈 패턴
var Person = function() {
    var name;
  
    var F = function(arg) { name = arg ? arg : ''; };
  
    F.prototype = {
      getName: function() {
        return name;
      },
      setName: function(arg) {
        name = arg;
      }
    };
  
    return F;
  }();
  
  var me = new Person('Lee');
  
  console.log(Person.prototype === me.__proto__);
  
  console.log(me.getName());
  me.setName('Kim')
  console.log(me.getName());