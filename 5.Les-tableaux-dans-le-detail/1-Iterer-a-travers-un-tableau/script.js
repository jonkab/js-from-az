/* 
    1. Itérer à travers un tableau.

    Vouloir itérer à travers un tableau est très courant et il existe plusieurs moyens d'y arriver.

    La boucle for. // méthode classique, un peu datée, mais très efficace
    La boucle for...of. // méthode plus moderne (2015+)
    Les méthodes des tableaux (forEach, map, etc...). // méthodes classiques et pratiques

    Vous verrez souvent certaines personnes dirent que les boucles sont plus performantes que .forEach(),
    c'est vrai mais seulement notable quand on effectue des milliers d'opérations, ce qui est rarement
    le cas, mais pas impossible.

*/

const animals = ["cat", "dog", "elephant", "lion", "peacock"]

/* Avec une boucle for */
console.log("------- for --------");
for (i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

/* Avec une boucle for...of */
console.log("------- for...of --------");
for (const animalsKey of animals) {
    console.log(animalsKey);
}

/* Avec .forEach */
console.log("------- .forEach() --------");
/**
 * .forEach() prend toujours :
 * ⇨ En 1er paramètre une "callback"
 *      cette callback prend jusqu'à 3 paramètres maximum et au moins 1 minimum
 *      ces paramètres seront toujours géré dans le même ordre, à savoir :
 *       - param 1 : l'élément/la valeur
 *       - param 2 : l'indice
 *       - param 3 : le tableau sur lequel la méthode forEach est appliquée
 *
 * ⇨ En 2e paramètre optionnel "this"
 *      La valeur à utiliser pour this lors de l'exécution de callback.
 */

//Exemple 1 :
//On peut écrire la callback avec la syntaxe d'une fonction fléchée en mode ultra optimisé,
// si on a seulement besoin d'un seul paramètre qui sera toujours "l'élément/la valeur" du tableau
animals.forEach(animal => console.log(animal));//Ici, seule les animaux sont retournés

//Exemple 2 :
//On peut écrire la callback avec la syntaxe d'une fonction fléchée en choisissant jusqu'à 3 paramètres.
//À savoir que même si ces 3 paramètres ont étés passés, il n'est pas obligatoire de tous les retourner
animals.forEach((animal, index, array) => console.log(animal, index, array));

//Exemple 3 :
//On peut écrire la callback avec la syntaxe d'une fonction classique.
animals.forEach(function (animal, index, array) {
    console.log(animal);
    //console.log(index);
    //console.log(array);
}, this)//Ici l'exemple avec le "this" optionnel a été ajouté.