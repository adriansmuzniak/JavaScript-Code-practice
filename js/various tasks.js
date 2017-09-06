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

//------------------

// let moonPhase = "full";

switch (moonPhase) {
  case "full":
    console.log("Howl!");
    break;
  case "mostly full":
    console.log("Arms and legs are getting hairier");
    break;
  case "mostly new":
    console.log("Back on two feet");
    break;
  default:
    console.log("Invalid moon phase");
    break;
 }

 //--------------------

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

//-------------------

let orderCount = 3;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

const getTax = (tax) => {
  return getSubTotal(orderCount) * 0.06;
}

const getTotal = () => {
  return getSubTotal(orderCount) + getTax();
}


console.log(getSubTotal(orderCount));
console.log(getTotal());

//------------------------

const multiplyYouFool = (x, y, z) => {
  let damn = ((x * y) * 1000) / 2000003;
  return damn;
}

const sth = multiplyYouFool(30, 20, 10);
console.log(sth);

//-------------------
