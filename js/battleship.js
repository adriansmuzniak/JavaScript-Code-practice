//Gra w okręty - początek

// położenie okrętu
var location1 = 3;
var location2 = 4;
var location3 = 5;

// próby zatopienia okrętu
var guess; //wskazanie do sprawdzenia
var guesses = 0; //liczba prób
var hits = 0; //trafione

//wartość - czy okręt został zatopiony?
var isSunk = false;

  while (isSunk == false) {
      guess = prompt("Gotów? Cel, pal! (podaj liczbę z zakresu 0-6):");
      if (guess < 0 || guess > 6) {
          alert("Proszę podać prawidłową liczbę z zakresu od 0-6!");
      } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
          hits = hits + 1;
          alert("TRAFIONY!!");
          if (hits == 3) {
            isSunk == true;
            alert("Hej, zatopiłeś mój okręt!");9
          }
        } else if (guess == null || guess == false) {
          alert("Ej, podaj jakąś liczbę")
        } else {
          alert("PUDŁO!")
        }
      }
  }
  var stats = "Potrzebowałeś " + guesses + " ruchów, aby zatopić okręt. Twoja efektywność strzelecka wynosi: " + (3/guesses) + ".";
  alert(stats);
