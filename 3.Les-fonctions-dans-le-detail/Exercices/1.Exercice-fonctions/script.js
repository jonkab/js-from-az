/**
    Exercices : Les fonctions
*/
console.log("------------- EXERCICES --------------");
console.log("------------- EXERCICE [1] --------------");
/**
    1. Pure ou pas.

    Écrivez une fonction pure "dividedBy10" qui sert à diviser un nombre
    par 10.
    Écrivez cette fonction sous la forme d'une fonction fléchée puis
    commentez-là et écrivez-là sous la forme d'une fonction classique.
*/
//Version fonction fléchée
//const dividedBy10 = number => number / 10;

//Version fonction classique
function dividedBy10(number) {
  return number / 10;
}

console.log(dividedBy10(100));


console.log("------------- EXERCICE [2] --------------");
/**
    2. this weather

    Créez une méthode getFahrenheit() permettant de retourner la température
    de l'objet weather ci-dessous en utilisant le mot clé this.

    Formule celsius - fahrenheit  :  (celsius * 1.8) + 32
*/

const weather = {
  city: "London",
  temp: 16,
  getFahrenheit() {
    return (this.temp * 1.8) + 32
  }
}
console.log(weather.getFahrenheit());
/**
function getFahrenheit(arr) {
  console.log(arr.temp);
  return (arr.temp * 1.8) + 32;
}*/
//console.log(getFahrenheit(weather));

console.log("------------- EXERCICE [3] --------------");
/**
  3. Ordre supérieur.

  Écrivez une fonction d'ordre supérieur "areFromNationality" permettant de
  tester si toutes les personnes d'un groupe sont d'une certaine nationnalité.

  Cette fonction retournera true ou false.

  On doit pouvoir réutiliser la même fonction pour tester autant de
  nationalités qu'on veut.
*/

const travelers = [
  {
    name: "Jean",
    nationality: "FR"
  },
  {
    name: "Victor",
    nationality: "FR"
  },
  {
    name: "Paul",
    nationality: "FR"
  },
  {
    name: "Jack",
    nationality: "EN"
  },
  {
    name: "Giulia",
    nationality: "IT"
  }
]

function areFromNationality(arr, callback) {

  for (const arrElement of arr) {
    if (!callback(arrElement)) {
      return false;
    }
  }

  return true;
}

console.log(areFromNationality(travelers, group => group.nationality === "FR"));
console.log(areFromNationality(travelers, group => group.nationality === "EN"));
console.log(areFromNationality(travelers, group => group.nationality === "IT"));
