var i = Math.random();
console.log(i);
var a = true;
var b = false;
if(i + 2 > 3) {
  console.log(a);
} else {
  console.log(b);
console.log(i);
}

// answer: false;

//-------------------

let moonPhase = "full";
let isFoggyNight = false;

if (moonPhase === "full" || isFoggyNight == true) {
  console.log("Howl");
} else if (moonPhase === "mostly full") {
  console.log("Arms and legs are getting hairier");
} else if (moonPhase === "mostly new") {
  console.log("Back on two feet");
} else {
  console.log("invalid moon phase");
}
