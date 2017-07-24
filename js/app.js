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
