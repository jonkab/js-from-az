/* 
    Quelques fonctionnalités syntaxiques ont été rajoutées aux objets à partir de 2015.
*/

//  Rajouter une fonction classique
const obj = {
  oldVersion: function () {
    //Ancienne syntaxe datant d'avant 2025
  },
  newVersion() {
    //Nouvelle syntaxe de 2015, plus besoin des 2 point ":" ni du mot clé "function"
  },
  arrow: () => {
    //Ainsi que la fonction fléchée sans le mot clé "function"
  }
}



// Rajouter des propriétés facilement.
const userName = "Lucie";
const age = 24;

// création de propriété
const user = {
  userName,
  age
}
console.log(user)//{ userName: 'Lucie', age: 24 }




// Utiliser une expression pour créer une prop
let category = "industry";
const plant = {
  id: 547,
  [category]: "Microship"
}
console.log(plant)