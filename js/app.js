// JS snippets from book(Rusz głową! Programowanie w javaScript).

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
