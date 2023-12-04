/**
    1. Les boucles modernes for...in et for...of.

    for...in sert à itérer à travers des objets.

    for...of sert à itérer à travers des éléments itérables, comme les
    tableaux ou les chaînes de caractères.
*/

//Exemple pour "for...in"
const person = {
  name: "Cyril",
  age: 35,
  height: 188,
  weight: 90
}

for (const prop in person) {//Ici "prop" renvoi les propriétés (leurs noms)
  console.log(prop, person[prop]);//Voici la syntaxe pour afficher soit
  //leurs noms, soit leurs valeurs.
}
//Explication sur l'usage de la bracket notation [] :
//A vérifier mais ce qui expliquerai qu'on utilise les [] serait que
//"prop" est une chaîne de caractères


//Exemple pour "for...of"
const fruits = ["🍓","🍇","🍑","🍎","🥭"]

for (const fruit of fruits) {//Ici "fruit" stock les valeurs du tableaux
  console.log(fruit);//On peut donc itérer sur le tableau et afficher les valeurs
}