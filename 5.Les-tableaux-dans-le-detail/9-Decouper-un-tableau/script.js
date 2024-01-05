/* 
    On a souvent envie de découper une partie d'un tableau en JavaScript.
    Il existe deux méthodes dont les noms peuvent porter à confusion : .slice() et .splice()
*/

console.log("------ 1. Array.prototype.splice(start, deleteCount, item1, item2, ...) ------");
/* 
    1. Array.prototype.splice(start, deleteCount, item1, item2, ...)
    Lien MDN pour plus de détails : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

    Définition :
    Cette méthode modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant
    de nouveaux éléments à même le tableau.
    On peut ainsi vider ou remplacer une partie d'un tableau.

    Paramètres :
    - départ : l'indice à partir duquel commencer à changer le tableau
    - nombre d'éléments à supprimer : un entier indiquant le nombre d'anciens éléments à remplacer
    - élément(s) à rajouter :

    Valeur de retour : Un tableau contenant les éléments supprimés.

    Syntaxe : array.splice(début, nbASupprimer, élem1Arajouter, élem2Arajouter, ..., ...)

*/
//Voici un exemple simple pour illustrer :
// - à partir de l'index 0, supprime 2 éléments et insère "🍒"
const fruits  = ["🍓", "🍑", "🍇", "🍊", "🍒"];
console.log("Etat du tableau d'origine : ", fruits);// Retourne -> ['🍓', '🍑', '🍇', '🍊', '🍒']
console.log("Les fruits supprimés : ", fruits.splice(0, 2,"🍒"));// Retourne -> [ '🍓', '🍑' ]
console.log("Etat du tableau d'origine Fruits MAJ : ", fruits);// Retourne -> [ '🍒', '🍇', '🍊', '🍒' ]
//Pour voir l'étendu des possibilités, voir la doc MDN qui est très bien faite.


console.log("\n\n------ 2. Array.prototype.slice(start,end) ------");
/* 
    2. Array.prototype.slice(start,end)

    Définition : Retourne une copie superficielle d'une partie d'un tableau.

    Valeur de retour : Un nouveau tableau représentant la portion extraite.

    Le tableau d'origine n'est pas modifié.
*/

const fruits2  = ["🍓", "🍑", "🍇", "🍊", "🍒"];
console.log("Etat du tableau d'origine : ", fruits2);// Retourne -> ['🍓', '🍑', '🍇', '🍊', '🍒']
console.log("Nouveau tableau des éléments récupéré : ", fruits2.slice(1, 3));// Retourne -> [ '🍑', '🍇' ]
console.log("Etat du tableau d'origine resté intacte : ", fruits2);// Retourne -> ['🍓', '🍑', '🍇', '🍊', '🍒']