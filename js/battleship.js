//Gra w okręty - początek

// położenie okrętu
var location1 = 3;
var location2 = 4;
var location3 = 5;

// próby zatopienia okrętu
var guess; //wskazanie do sprawdzenia
var guessess = 0; //liczba prób
var hits = 0; //trafione

//wartość - czy okręt został zatopiony?
var isSunk = false;

while (isSunk == true) {
      guess = prompt("Gotów? Cel, pal! (podaj liczbę z zakresu 0-6):"
      if (guess < 0 || guess > 6) {
          alert("Proszę podać prawidłową liczbę z zakresu od 0-6!");
      } else {
          guessess = guessess + 1;
  }
}
