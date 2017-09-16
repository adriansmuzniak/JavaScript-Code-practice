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
const sths = multiplyYouFool(30, 20, 100);
console.log(sth);

//-------------------

const color = 'blue'

const colorOfSky = () => {
  let color = "yellow";
  return color; // blue
};

console.log(colorOfSky()); // blue
console.log(color);
//-------------------

const satellite = 'The Moon';
const galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = () => {
  stars = "Sirius";
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
}
console.log(stars);
myNightSky();
console.log(stars);

//-------------------

const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';
    if (region === 'The Arctic') {
      let lightWaves = 'Northern Lights';
      console.log(lightWaves);
    }
  console.log(lightWaves);
};

visibleLightWaves();

//-------------------------

const starCount = () => {
  let i = 5 ;
  console.log(i);
    for (let i = 0; i < 12; i++) {
      console.log(i);
    }
};

starCount();
console.log(i);

//----------------------------

const starCounts = (a, b, c) => {
  let ind = 5;
  let bind = a;
  let cind = b;
  let dind = c;

  console.log(ind * (bind + cind) / dind)
 }

starCounts(30, 34, 23);

//------------------------------

let newYearsResolutions = ["Denzel Washington", "Will Smith", "Michael Jordan"];
console.log(newYearsResolutions);

let listItem = newYearsResolutions[0];
console.log(listItem);

console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]);
console.log(newYearsResolutions);

newYearsResolutions[1] = "Learn a new language";
console.log(newYearsResolutions.length);

newYearsResolutions.push("Johnny Wayne", "Tom Cruise");
console.log(newYearsResolutions);

newYearsResolutions.pop();
console.log(newYearsResolutions);

let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
groceryList.unshift('popcorn');
console.log(groceryList);
console.log(groceryList.slice(1,4));

//----------------------------------------------

// Array methods

/*
.push(); - add an item to the end of an array;
.pop();
.join();
.slice();
.splice();
.shift(); - removes first item of the array;
.unshift(); - add item at first place of an array;
.concat(); - add two arrays to each other;

*/

//----------------------------------------------------

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments.push('Mayo');
console.log(condiments);

condiments = ["Sraciatella"];
console.log(condiments);

utensils.pop();
// utensils = ['Spork'];
console.log(utensils);

//----------------------------------------------------

let cookies = ['chocolate chip', 'raisin', 'macadamia nut', 'sugar'];

for (let i = 0; i<cookies.length; i++) {
  console.log('I would love to eat a ' + cookies[i] + ' cookie right now!');
}
