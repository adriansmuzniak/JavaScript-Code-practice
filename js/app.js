// JS examples from book(Rusz głową! Programowanie w javaScript).

setTimeout(wakeUpUser, 5000);
function wakeUpUser(){
  // console.log("robimy stronkę?");
}

// -----------------------------------

var price = 28.99;
var discount = 10;
var total = price - (price * (discount/100));
if (total > 35) {
  console.log("o Panie");
} else {
  console.log("a jednak nie");
}

// -------------------------------------

var i;
for(i = 0; i < 10; i++){ }
var x = i;
console.log(x);

//---------------------------------------

matrix = [];
matrix.push([1,2,3])
matrix.push([4,5,6])
matrix.push([7,8,9])

x = matrix[0][2] + matrix[2][1]
// console.log(matrix);

//-------------------------------------
var count = 10;
while (count > 0) {
  setTimeout(juggle,2000);
  count = count - 1;
}
function juggle(){
  setTimeout(1000)
  // console.log("idzie!");
}
//------------------------------------
var dog = {name:"Burek", weight: 35};
if (dog.weight > 30) {
  console.log("HAU HAU");
} else {
  console.log("hau hau");
}

//------------------------------------

var circleRadius = 30;
var circleArea = Math.PI * (circleRadius * circleRadius);
console.log(circleArea);

//----------------------------------

var age = 10;
var name = "Olek";
if (age > 14){
  console.log("Przykro mi, ta strona jest tylko dla dzieci");
} else {
  console.log("witaj " + name);
}
//------------------------------------

var temp = 10;
var resultsum = (9/5) * temp + 32;
console.log(resultsum);

//-----------------------------------

var sumStringNumber = 1000 + "108";
console.log(sumStringNumber);

//----------------------------------

var scoops = 5;
while (scoops > 0){
  document.write("kolejna gałka!<br>");
  scoops = scoops-1;
}
document.write("życie bez lodów nie jest już takie same<br>");

//----------------------------------

if (scoops >= 5) {
  alert("jedz szybciej, lody sie zaraz roztopią!");
} else if (scoops == 3) {
  alert("Lody się kończą");
} else if (scoops == 2) {
  alert("Dwa!")
} else if (scoops == 1) {
  alert("Jeden!")
} else if (scoops == 0) {
  // alert("I koniec");
} else {
  "Mamy jeszcze dużo lodów, przyjdź i skosztuj"
}

//----------------------------------

var i = 0;
var name = "Józek";
while (i < 2) {
  document.write("<br>Sto lat, sto lat.<br>");
  document.write("Niech żyje, żyje nam.<br>");
  i++;
}
document.write("Niech żyje nam " + name + " nam!<br>");

//-----------------------------------------

var word = "butelek";
var count = 99;
while (count > 0) {
  console.log(count + " " + word + " piwa na ścianie");
  console.log(count + " " + word + " piwa,");
  console.log("Jedną weź i podaj w koło,");
  count = count - 1;
  if (count == 4 || count == 3 || count == 2 ) {
    var word = "butelki"
    // console.log(count + " " + word + " piwa na ścianie");
  } else if (count == 1) {
    var word = "butelka"
  } else {
    var word = "butelek";
    console.log("nie ma już " + word + " piwa na ścianie");
  }
}

//------------------------------------------------
var inStock = true;
var inSale = true;
if (inStock == true && (inSale == true || price < 60 )) {
  //to wygląda na świetny interes - kupuj!
  document.write("<br>kupuj, kupuj, kupuj!<br>")
}

//------------------------------------------------

var temp = 81;
var willRain = true;
var humid = (temp > 80 && willRain == true);
console.log(humid);

var guess = 6;
var isValid = (guess >= 0 && guess <= 6);
console.log(isValid);

var kB = 1287;
var tooBig = (kB > 1000);
var urgent = true;
var sendFile = (urgent == true || tooBig == false);
console.log(sendFile);

var keyPressed = "N";
var points = 142;
var level;
if (keyPressed == "Y" || (points > 100 && points < 200)) {
  level = 2;
} else {
  level = 1;
}
console.log(level);

//-------------------------------------------

var dogName = "Burek";
var dogWeight = 23;
if (dogWeight > 20) {
  console.log(dogName + " szczeka HAU HAU");
} else {
  console.log(dogName + " szczeka hau hau");
}

dogName = "Mops";
dogWeight = 13;
if (dogWeight > 20) {
  console.log(dogName + " szczeka HAU HAU");
} else {
  console.log(dogName + " szczeka hau hau");
}

dogName = "Reksio";
dogWeight = 53;
if (dogWeight > 20) {
  console.log(dogName + " szczeka HAU HAU");
} else {
  console.log(dogName + " szczeka hau hau");
}

dogName = "Saba";
dogWeight = 17;
if (dogWeight > 20) {
  console.log(dogName + " szczeka HAU HAU");
} else {
  console.log(dogName + " szczeka hau hau");
}

function bark(name, weight) {
  if (weight > 20) {
    console.log(name + " szczeka HAU HAU");
  } else {
    console.log(name + " szczeka hau hau");
  }
}

bark("Burek", 23);
bark("Mops", 13);
bark("Reksio", 53);
bark("Saba", 17);
bark("Skuter", -1); //"Skuter szczeka hau hau"
bark("Dino", 0, 0); //brak błędu
bark("Fido", "20"); //"Fido szczeka hau hau"
bark("Saba", 10); //"Saba szczeka HAU HAU"
bark("Agent", 21) //"Agent szczeka HAU HAU"

//---------------------------------------------

function whatShallIwear(temp){
  if (temp < 15) {
    console.log("ubierz kurtkę");
  } else if (temp < 25) {
    console.log("ubierz sweter");
  } else {
    console.log("ubierz T-shirt");
  }
}

whatShallIwear(10);
whatShallIwear(15);
whatShallIwear(30);

//---------------------------------------

saveMyProfile("Tomek", 1991, 3.81, false);
function saveMyProfile(name, birthday, GPA, newuser){
  if (birthday > 2004) {
    //kod obsługi dziecka
  }
  //reszta kodu funkcji
}
// _____

var student = "Krzysiu";
var year = 1998;
var GPA = 381/100;
var status = "oczekujący";
var isNewUser = (status == "nowy_użytkownik");
saveMyProfile(student, year, GPA, isNewUser);
saveMyProfile(student, year, 381/100, status == "nowy_użytkownik"); //również dopuszczalne

//-----------------------------------------
// PARAMETR A ARGUMENT

function cook(degrees, mode, duration){
  //ciało funkcji
}
// degrees, mode, duration - to są parametry funkcji

cook(180.0, "pieczenie", 30);
// 180, "pieczenie", 30 - to są argumenty przekazane do funkcji

// Parametry funkcji definiujemy raz, ale do funkcji możemy przekazać różne argumenty!

function doIt(param, name) {
  var jakistest2 = param/2;
  console.log(jakistest2 + " " + name);
}
var jakisTest = 10;
var durneImię = "Tomek"
doIt(jakisTest, durneImię);

//----------------------------------------

function dogYears(dogName, age) {
  var years = age * 7;
  console.log(dogName + " ma " + years + " lata." );
}
var dog = "Adolf";
var dogYear = 11;
dogYears(dog, dogYear);


function makeTea(cups, tea) {
  console.log("Parzę " + cups + " filiżanek herbaty " + tea + ".");
}
var guests = 5;
makeTea(guests); //"Parzę 5 filiżanek herbaty undefinied"
makeTea(guests, "Earl Grey", 8); //"ominięcie nadmiarowych argumentów"

function secret() {
  console.log("Tajemnice bytu jest liczba 42");
}
secret();

// function speak(kind) {
//   var defaultSound = "";
//   if (kind == "pies") {
//     alert("Hau");
//   } else if (kind == "kot") {
//     alert("Miau");
//   } else {
//     alert(defaultSound);
//   }
// }
// var pet = prompt("Podaj rodzaj zwierzaka: ");
// speak(pet);

//--------------------------------

function bake(degrees) {
  var message;

  if (degrees > 200) {
    message = "Daj spokój, nie jestem reaktorem atomowym";
  } else if (degrees < 20) {
    message = "Nie jestem lodówką";
  } else {
    message = "Idealna temperatura";
    // setMode("pieczenie");
    // setTemp(degrees);
  }
  return message;
}
var status = bake(200);
console.log(status);

//-----------------------------------
// Śledzenie wykonania funkcji z instrukcją Return

function calculateArea(r) {
  var area;

  if (r <= 0) {
    return 0
  } else {
    area = Math.PI * r * r;
    return area;
  }
}

var radius = 5.2;
var theArea = calculateArea(radius);
console.log("Pole koła wynosi: " + theArea);

//-----------------------------------

var avatar = "ogólny";
var skill = 1.0;
var pointsPerLevel = 1000;
var userPoints = 2008;

function getAvatar(points) {
  var level = points/pointsPerLevel;

  if (level == 0) {
    return "Niedźwiadek Yogi";
  } else if (level == 1) {
    return "Kot"
  } else if (level >= 2) {
    return "Goryl";
  }
}

function updatePoints(bonus, newPoints) {
  var i = 0;
  while (i < bonus) {
    newPoints = newPoints + skill * bonus;
    i = i + 1;
  }
  return newPoints + userPoints;
}

userPoints = updatePoints(2, 100);
avatar = getAvatar(2112);
console.log(userPoints);
console.log(avatar);

//---------------------------------

function playerTurn(player, location) {
  points = 0; //zmienna globalna!
  if (location == 1) {
    points = location + 100;
  }
  return points;
}
var total = playerTurn("Wilk", 1);
// alert(total);

//---------------------------------
// Przesłonięcie zmiennej globalnej

var beanCounter = 10;

function getNumberOfItems(ordertype) {
  var beanCounter = 3;
  if (ordertype == "zamówienie") {
    beanCounter = beanCounter * 8;
  }
  return beanCounter;
}
var someRes = getNumberOfItems("zamówienie");
console.log(someRes);

//-----------------------------------

var x = 32;
var y = 44;
var radius = 5;

var centerX = 0;
var centerY = 0;
var width = 600;
var height = 400;

function setup(width, height) {
  centerX = width/2;
  centerY = height/2;
}

function computeDistance(x1, y1, x2, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  var d2 = (dx * dx) + (dy * dy);
  var d = Math.sqrt(d2);
  return d
}

function someArea(r) {
  var area = Math.PI * r * r;
  return area;
}

setup(width, height);
var area = someArea(radius);
var distance = computeDistance(x, y, centerX, centerY);
// alert("Pole: " + area);
// alert("Odległość: " + distance);

//-------------------------------------

function clunk(times) {
  var num = times;
  while (num > 0) {
    display("brzęk");
    num = num - 1;
  }
}

function kodoskryptoinator(size) {
  var facky = 1;
  clunkCounter = 0;
  if (size == 0) {
    display("brzęk");
  } else if (size == 1) {
    display("biiip");
  } else {
    while (size > 1) {
      facky = facky * size;
      size = size - 1;
    }
    clunk(facky);
  }
}

function display(output) {
  console.log(output);
  clunkCounter = clunkCounter + 1;
}

var clunkCounter = 0;
kodoskryptoinator(5);
console.log(clunkCounter);

//----------------------------------

var balance = 10500; //ZMIENNA GLOBALNA
var camerOn = true;

function steal(balance, amount) { //PRZESŁONIĘCIE PARAMETRU BALANCE - BŁĄD
  cameraOn = false;
  if (amount < balance) {
    balance = balance - amount;
  }
  return amount;
  cameraOn = true;
}

var amount = steal(balance, 1250);
// alert("Złodziej: ukardłem Ci " + amount + "!");

//---TABLICE W JAVASCRIPT--------------

var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54];
var solution2 = scores[2];
console.log("Płyn do baniek nr 2 wynik: " + solution2);

var flavors = ["waniliowe", "truskawkowe", "czekoladowe", "malaga", "jabłkowe"];
var iceCreams = flavors[3];
console.log(iceCreams);
flavors[3] = "jagodowe"
var iceCreams = flavors[3];
console.log(iceCreams);
console.log(flavors);
console.log(flavors.length);
var iceCreamLength = flavors.length;
console.log(iceCreamLength);
// -----------------------------------

function makePhrases() {
  var words1 = ["nieprzerwane", "wielowarstwowe", "tysiącmetrowe", "biznesowe", "niepowstrzymane"];
  var words2 = ["wspomagane", "wartościowe", "zorientowane", "skoncentrowane", "wyrównane"];
  var words3 = ["procesy", "rozwiązania", "punkty", "strategie", "wizje"];

  var rand1 = Math.floor(Math.random() * words1.length);
  var rand2 = Math.floor(Math.random() * words2.length);
  var rand3 = Math.floor(Math.random() * words3.length);

  var phrase = "<br>" + words1[rand1] + " " + words2[rand2] + " " + words3[rand3] + "<br>";
  document.write(phrase);
}

makePhrases();
makePhrases();
makePhrases();
makePhrases();
makePhrases();

//--------------------------------------

console.log( 1 || ["element1", "element2"]);
console.log( 0 || ["element1", "element2"]);
console.log( 1 && ["element1", "element2"]);
console.log( 0 && ["element1", "element2"]);
console.log( 1 || ["element1", "element2"]);
console.log( 0 || ["element1", "element2"]);
console.log( 1 || false);
console.log( 0 || false);
console.log( 1 || true);
console.log( 0 || true);
console.log( 1 && true);
console.log( 0 && true);
console.log( 1 && false);
console.log( undefined && 1);
//-----------------------------------------

//-----------------------------------------

var products = ["Czu-czu-Lada", "Miętowy Chłód", "Ciasto naleśnikowe", "Guma Balonowa"];
var hasBubbleGum = [false, false, false, true];
var i = 0;

// Pętla while

// while (i < hasBubbleGum.length) {
//   if (hasBubbleGum[i]) {
//     console.log(products[i] + " zawiera gumę do żucia.");
//       }
//   i = i + 1;
// }

for (i = 0; i < hasBubbleGum.length; i++) {
  if (hasBubbleGum[i]) {
    console.log(products[i] + " zawiera gumę do żucia.");
  }
}
// Usuwanie z tablicy elementów, prototypowanie, strict mode, pobranie ID i data-setu z DOM, funkcje, operatory logiczne, hoisting...

var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 58, 87, 57, 48, 38, 58, 48, 69, 37, 48, 47, 27, 75, 63, 46, 58, 85, 87, 67, 36, 57, 84, 75, 39, 85, 74];
var costs = [.34, .23, .53, .65, .75, .23, .76, .34, .76, .23, .56, .67, .12, .67, .45, .89, .65, .43, .32, .21, .45, .34, .12, .87, .65, .45, .34, .23, .34, .43, .32, .21, .45, .34, .12, .87];
var output;
var highScore = 0;
// Pętla While

// var i = 0;
//   while (i < scores.length) {
//   output = "Płyn do baniek nr: " + i +
//   " wynik: " + scores[i];
//   console.log(output);
//   i = i + 1;
// }

// for (i=0; i<scores.length; i++) {
//   output = "Płyn do baniek nr: " + i + " wynik: " + scores[i];
//   console.log(output);
//   if (scores[i] > highScore) {
//     highScore = scores[i]
//   }
// }
// console.log("Liczba testów: " + scores.length); //liczba testów
// console.log("Największa liczba wytworzonych baniek: " + highScore); //najwyższy wynik
//
// var bestSolutions = [];
// for (i=0; i<scores.length; i++) {
//   if (scores[i] == highScore) {
//     bestSolutions.push(i)
//   }
// }
// console.log("Płyny z najlepszym wynikiem to: " + bestSolutions);


//------------------------------------------

function printHighScores(scores) {
  var highScore = 0;
  var output;
  for (var i=0; i < scores.length; i++) {
    output = "Płyn do baniek nr " + i + " wynik: " + scores[i];
    console.log(output);
    if (scores[i] > highScore) {
      highScore = scores[i];
    }
  }
  return highScore;
}

function getBestResults(scores, highscore) {
  var bestSolutions = [];
  for (var i=0; i<scores.length; i++) {
    if (scores[i] == highScore) {
      bestSolutions.push(i);
    }
  }
  return bestSolutions
}

var highScore = printHighScores(scores);
console.log("Najwyższy wynik: " + highScore);

var bestSolutions = getBestResults(scores, highScore);
console.log("Płyny z najlepszym wynikiem: " + bestSolutions);

function getMoreEffectiveSolution(scores, costs, highscore) {
  var cost = 100;
  var index;
  for (var i=0; i<scores.length; i++) {
    if (scores[i] == highscore) {
      if (cost > costs[i]) {
        index = i;
        cost = costs[i];
      }
    }
  }
  return index;
}

var mostCostEffective = getMoreEffectiveSolution(scores, costs, highScore);
console.log("Płyn numer: " + mostCostEffective + " jest najbardziej opłacalny.");

//-----------------------------------------------
// OBIEKTY

var chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "czerwony",
  passengers: 2,
  convertible: false,
  mileage: 1021
};

console.log(chevy.model);

var cadi = {
  make: "Cadillac",
  model: "Thunder",
  year: 1955,
  color: "lightbrown",
  passengers: 5,
  mileage: 12892,
  convertible: false,
  "comfortable Seats": true
}

cadi.hornSound = "buuuum"

var miles = cadi.mileage;
if (miles < 13000) {
  // buyIt();
  console.log(cadi);
}

//---------------------------------

var malyFiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "szaroniebieski",
  passengers: 2,
  convertible: false,
  mileage: 80000,
  needWashing: true,
}

var doggy = {
  name: "Burek",
  weight: 20.3,
  age: 4,
  breed: "mieszaniec",
  activity: "przonoszenie piłki"
}
var bark;
if (doggy.weight > 20) {
  bark = "HAU HAU HAU"
} else {
  bark = "hau hau hau";
}
var speak = doggy.name + " szczeka " + bark + " kiedy ma ochotę na " + doggy.activity;
console.log(speak);

console.log(doggy);
delete doggy.age; //usunięcie właściowości "age"
console.log(doggy);

//------------------------------

var lookMaNoProsp = {};
lookMaNoProsp.age = 5;
if (lookMaNoProsp.age < 10) {
  lookMaNoProsp.school = "podstawowa";
};

//-----------------------------

var taxi = {
  make: "SieMoCorp",
  model: "Taxi",
  year: 1955,
  color: "żółty",
  passengers: "yellow",
  convertible: false,
  mileage: 281341
};

function prequal(car) {
  if (car.mileage > 10000) {
    return false;
  } else if (car.year > 1960) {
    return false;
  }
  return true;
}

var worthToLook = prequal(taxi);
if (worthToLook) {
  console.log("Powinieneś zainteresować się tym " + taxi.make + " " + taxi.model);
} else {
  console.log("Ten " + taxi.make + " " + taxi.model + " możesz sobie podarować");
}

var worthToLook2 = prequal(chevy);
if (worthToLook2) {
  console.log("Powinieneś zainteresować się tym " + chevy.make + " " + chevy.model);
} else {
  console.log("Ten " + chevy.make + " " + chevy.model + " możesz sobie podarować");
}

var worthToLook3 = prequal(cadi);
if (worthToLook3) {
  console.log("Powinieneś zainteresować się tym " + cadi.make + " " + cadi.model);
} else {
  console.log("Ten " + cadi.make + " " + cadi.model + " możesz sobie podarować");
}

var worthToLook4 = prequal(malyFiat);
if (worthToLook4) {
  console.log("Powinieneś zainteresować się tym " + malyFiat.make + " " + malyFiat.model);
} else {
  console.log("Ten " + malyFiat.make + " " + malyFiat.model + " możesz sobie podarować");
}

//-----------------------------------

var fido = {
  name: "Burek",
  weight: 48,
  breed: "mieszaniec",
  loves: "spacery"
}

function loseWeight(dog, amount) {
  dog.weight = dog.weight - amount;
  return dog.weight;
}

var goodDoggy = loseWeight(fido, 10);
console.log(goodDoggy);
console.log(fido.name + " waży teraz " + fido.weight + " kg");

//----------------------------------

var superSecretFile = {
  level: "tajne",
  opened: 0,
  password: 2,
  contents: "Następne spotkanie z dr. Zatanem odbędzie się w Katowicach."
};

function getSecret(file, secretPassword) {
  file.opened = file.opened + 1;
  if (secretPassword == file.password) {
    return file.contents;
  } else {
    return "Złe hasło, brak dostępu!";
  }
}

function setSecret(file, secretPassword, secret) {
  if (secretPassword == file.password) {
    file.opened = 0;
    file.contents = secret;
  }
}

var secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Następne spotkanie z dr. Zatanem odbędzie się w Żywcu.");
secret = getSecret(superSecretFile, 2);

//------------------------------------------

function makeCar() {
  var makes = ["Chevy", "GM", "Fiat", "SieMoCorp", "Tucker"];
  var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
  var years = [1955, 1957, 1948, 1954, 1961];
  var colors = ["czerwony", "niebieski", "jasnobrązowy", "żółty", "biały"];
  var convertible = [true, false];

  var rand1 = Math.floor(Math.random() * makes.length);
  var rand2 = Math.floor(Math.random() * models.length);
  var rand3 = Math.floor(Math.random() * years.length);
  var rand4 = Math.floor(Math.random() * colors.length);
  var rand5 = Math.floor(Math.random() * 5) + 1;
  var rand6 = Math.floor(Math.random() * 2);

  var car = {
    make: makes[rand1],
    model: models[rand2],
    year: years[rand3],
    colors: colors[rand4],
    passengers: rand5,
    convertible: convertible[rand6],
    mileage: 0,
  }
  return car;
}

function displayCar(car) {
  console.log("Twoim nowym samochodem jest: " + car.make + " " + car.model + " z roku " + car.year + " a jego kolor to " + car.colors
  + "." + " Liczba pasażerów jaka wejdzie: " + car.passengers);
}

var carToSell = makeCar();
displayCar(carToSell);

//------------------------------------------------
var myAge = 31;
var mySalary = 3000;
var myRaise = mySalary * 0.05;

function calculateSalary(age, pension, raise) {
  myRaise = mySalary * 0.05;
  for (var i = myAge; i < 68; i++) {
    mySalary = mySalary + myRaise;
    myRaise = mySalary * 0.05;
    myAge++;
    console.log(myAge);
    console.log(mySalary);
  }
    return mySalary;
}

var oblicz = calculateSalary(myAge, mySalary, myRaise);
console.log(oblicz);

//--------------------------------------------
