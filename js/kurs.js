// require("../css/main.css")

var x = 10;
console.log(x);

function Person1(name)
 {
   this.name = name;
 }

var jan = new Person1('Jan');

function Person2(name)
 {
   'use strict';
   this.name = name;
   this.getName = function()
    {
      try {
        return this.name;
      }
      catch (e) {
        console.log (e);
      }
    };
 }

 var jan2 = new Person2('Jan');
 console.log(jan2.getName());

 var jan_name = jan2.getName;
 console.log(jan_name.call(jan2));

 var jan_name2 = jan2.getName.bind(jan2);
 console.log(jan_name2());

//srodowisko leksykalne


var getCzas = function() {
  var d = new Date(); //obecna data
  //zero wiodące
  var zero = function(txt) {
    txt = "" + txt;
    while (txt.length < 2) {
      txt = "0" + txt;
    }
    return txt;
  };

  var t = [];
  t[0] = zero(d.getHours());
  t[1] = zero(d.getMinutes());
  t[2] = zero(d.getSeconds());
  t[3] = zero(d.getMilliseconds());
  console.log(t[2]);
  //podmiana title
  // document.title = t.join(" : ");
  // var xd = d.toLocaleString();
  // console.log(xd);


}

setInterval(getCzas, 100);
