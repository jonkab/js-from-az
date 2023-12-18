/*
    1. Le mot clé delete.

    On peut supprimer une propriété d'un objet à l'aide du mot clé delete.
*/

const city = {
  name: "Bratislava",
  population: 424000
}

console.log(city);//retourne -> {name: 'Bratislava', population: 424000}
delete city.name;//supprime la propriété "name" et sa valeur "Bratislava"
console.log(city);//retourne -> {population: 424000}

//Où ajouter nouvelle une propriété à un objet
city.surface = "150000";
console.log(city);//retourne -> {population: 424000, surface: '150000'}

/* Attention, utiliser delete avec la propriété d'un tableau va remplacer l'élément supprimé par un élément empty */
let montableau = [1, 2, 3];
console.log(montableau)//retourne -> [1, 2, 3]
delete montableau[1]//supprime seulement la valeur "2" mais l'index 1 reste
console.log(montableau)//retourne -> [1, vide, 3]



/* 
    2. Bracket et dot notation.

    On peut sélectionner des propriétés en utilisant deux notations.
   
    A. Le point : obj.prop
    La dot notation, en utilisant directement le nom d'une propriété.
    La dot notation n'est pas disponible avec une chaîne de caractère ou un nombre, dans ce cas il faut utiliser la bracket notation.

    B. Les crochets [] : obj["prop"]
    C'est la bracket notation.
    Si vous utilisez un autre type qu'une chaîne entre les crochets, il sera converti en chaîne. obj[1] donnera obj["1"]

*/

const dog = {
  name: "Riki",
  legs: 4,
  10: 999
}
//dot notation
console.log(dog.name);
//bracket notation
console.log(dog["name"]);

//Pour accéder à une propriété qui a comme nom un nombre dans un objet,
console.log(dog["10"]);//Il faut obligatoire utiliser la bracket notation[]


/* 
    3. Form raccourcie des méthodes.

    On peut utiliser des fonctions classiques et les fonctions fléchées
    dans les objets, voyons ensemble les différentes syntaxes.
*/
const robot = {
  // fonction classic
  aim: function () {
    console.log("Aiming");
  },
  // fonction classique raccourcie (2015+)
  shoot() {
    console.log("Bang");
  },
  // fonction fléchée
  run: () => console.log("Running")
}



/* 
    4. Les tableaux sont des objets.

    Les tableaux sont des objets spéciaux permettant de manipuler plusieurs
    valeurs facilement et contenant toute une flopée de méthodes très pratiques.

    Chaque élément est accessible par son index, nous sommes donc en présence
    d'une propriété - valeur.

    // Cela ressemble beaucoup à un objet n'est-ce pas ?
    [
      0: "🍓",
      1: "🍌",
      2: "🍇"
    ]

    Ils ont également une propriété length.
    On accède aux propriétés d'un tableau via la bracket notation,
    avec des nombres (les index).

*/

const fruits = ["🍓","🍌","🍇"];

console.log(fruits);
console.log(typeof fruits);
console.log(fruits[1], fruits[1]);

//Il est possible aussi d'ajouter des propriétés à des tableaux sans passer
//par la méthode ".push()" directement avex la dote notation.
//Cette méthode n'est néanmoins pas couramment utilisée.
fruits.item = "nom d'un item";
console.log(fruits)//Retourne -> ['🍓', '🍌', '🍇', item: "nom d'un item"]


/* 
    5. Les fonctions sont des objets.

    En JavaScript, les fonctions sont des first-class objets,
    car elles peuvent être appelées, passées à d'autres fonctions(paramètres-arguments)
    et qu'elles contiennent aussi des propriétés.

    D'ailleurs, il est aussi possible de leur créer des propriétés.

    Les fonctions sont des objets créés à partir du constructeur Function.

*/

function foo(){
  console.log("Hello !");
}
console.dir(foo);//Affiche la déclaration de la fonction

//Où ajouter nouvelle une propriété à l'objet function :
foo.customProperties = "une nouvelle propriété";//Ajoute la propriété "customProperties"
console.dir(foo);//Affiche la déclaration de la fonction
// avec la MAJ de la nouvelle propriété "customProperties"
