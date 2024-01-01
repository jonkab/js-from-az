/**
 Exercices : Les fonctions
 */
console.log("------------- EXERCICES --------------");
console.log("------------- EXERCICE [1] --------------");

/*
    1. Pure ou pas.

    Écrivez une fonction pure "dividedBy10" qui sert à diviser un nombre par 10.
    Écrivez cette fonction sous la forme d'une fonction fléchée puis commentez-là et écrivez-là sous la forme d'une fonction classique.
*/

const dividedBy10 = number => number / 10;
console.log("fléchée dividedBy10 : ", dividedBy10(200));

function dividedBy10v2 (number) {
    return number / 10;
}
console.log("classique dividedBy10v2 : ", dividedBy10v2(300));

console.log("\n------------- EXERCICE [1.2] --------------");
/*
    1.2 Pure et boucle sur un tableau

    Écrivez une fonction pure "getMoyenne" qui sert à calculer la moyenne des notes du tableau.
 */
const notesTable = [18, 16, 20, 20, 18];

const getMoyenne = notesTable => {
    const notesTotal = notesTable.length;
    let sommes = 0;

    for (let i = 0; i < notesTotal; i++) {
        sommes += notesTable[i];
    }

    return sommes / notesTotal;
}
console.log("fléchée getMoyenne : ", getMoyenne(notesTable));

function getMoyenneV2(notesTable) {
    const notesTotal = notesTable.length;
    let sommes = 0;

    for (let i = 0; i < notesTotal; i++) {
        sommes += notesTable[i];
    }

    return sommes / notesTotal;
}

console.log("classique getMoyenneV2 : ", getMoyenneV2(notesTable));

console.log("\n\n------------- EXERCICE [2] --------------");
/*
    2. this weather

    Créez une méthode getFahrenheit () permettant de retourner la température de l'objet weather ci-dessous en utilisant le mot clé this.

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


console.log("\n\n------------- EXERCICE [3] --------------");
/*
  3. Ordre supérieur.

  Écrivez une fonction d'ordre supérieur "areFromNationality" permettant de tester si
  toutes les personnes d'un groupe sont d'une certaine nationnalité.

  Cette fonction retournera true ou false.

  On doit pouvoir réutiliser la même fonction pour tester autant de nationalités qu'on veut.
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
    },
]

function areFromNationality(traveler, callback) {
    for (let i = 0; i < traveler.length; i++) {
        if(!callback(traveler[i].nationality)) {
            return false
        }
    }
    return true
}

console.log(areFromNationality(travelers, nationality => nationality === "tt"));

console.log("\n\n------------- EXERCICE [4] --------------");
/*
  4. Incrémentation en préfixe et en postfixe.

* Démontrer la différence entre les opérateurs d'incrémentation en préfixe (++number) et
* en postfixe (number++).
*
* En préfixe, la variable est incrémentée avant que sa valeur soit utilisée dans l'expression,
* tandis qu'en postfixe, la variable est incrémentée après que sa valeur actuelle a été utilisée.
* */
let number = 0;
console.log(++number);
console.log(number++);
console.log(number);
