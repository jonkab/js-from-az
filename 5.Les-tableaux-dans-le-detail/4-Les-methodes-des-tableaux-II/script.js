/* 
    1. Array.prototype.reduce(callback(accumulator, currentValue, currentIndex, array), valeurInitiale)

    Définition : Accumule chaque valeur d'un tableau à une valeur initiale.
    Si une valeur initiale n'est pas fournie, le premier élément du tableau est utilisé.
    
    Exemples : Permet de faire des moyennes, d'accumuler des valeurs et de résoudre toutes sortes de problèmes.


    Valeur de retour : l'accumulateur après toutes les opérations.

*/
console.log("\n----- 1. Array.prototype.reduce(callback(accumulator, currentValue, currentIndex, array), valeurInitiale) -----");
const marks = [18,5,17,12,20,16,14];
console.log(marks);

const moyenne = Math.trunc(marks.reduce((acc, mark) => acc + mark, 0) / marks.length);
console.log(moyenne);



/* 
    2. Array.prototype.sort(callback(firstEl, secondEl))

    Définition : Permet de trier des chaînes de caractères, des nombres, des objets, etc...

    Valeur de retour : Le même tableau trié.

    Utilise un algo d'insertion implémenté différemment suivant chaque navigateur.

    Exemple : 

    base
    [10,4,12]

    Étape 1
    |partie triée|
    [|4,10|,12]

    Étape 2
    Si 12 est plus grand que 10 il est à sa place, fin du tri.
    [|4,10,12|]

    Définition MDN https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort :
    La méthode sort() trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau.
    Par défaut, le tri s'effectue sur les éléments du tableau convertis en chaînes de caractères et
    triées selon les valeurs des unités de code UTF-16 des caractères.

    Lien d'un tableau des codes UTF-16 : https://asecuritysite.com/coding/asc2

*/
console.log("\n----- 2. Array.prototype.sort(callback(firstEl, secondEl)) -----");
const letters = ["z","b","a","d","e"];
letters.sort();// Ici le trie des chaînes de caractère est fait automatiquement
console.log("letters : ", letters);// Retourne -> [ 'a', 'b', 'd', 'e', 'z' ]

const numbers = [10,55,2,250,500,85]
numbers.sort((a,b) => a - b);//Ici le trie se fait par ordre croissant
console.log("numbers : ", numbers);// Retourne -> [ 2, 10, 55, 85, 250, 500 ]

//Pour trier par ordre décroissant, il suffit d'inverser l'ordre de a et b dans l'opération
numbers.sort((a,b) => b - a);//Ici le trie se fait par ordre décroissant
console.log("numbers : ", numbers);// Retourne -> [ 500, 250, 85, 55, 10, 2 ]

// On peut aussi trier des tableaux d'objets
const store = [
    {
        item: "Cahier",
        price: 20
    },
    {
        item: "Sac",
        price: 60
    },
    {
        item: "Stylo",
        price: 2
    },
]

store.sort((a,b) => a.price - b.price);
console.log(store);/*Retourne le tableau d'objet par prix croissant ->
 [
   { item: 'Stylo', price: 2 },
   { item: 'Cahier', price: 20 },
   { item: 'Sac', price: 60 }
 ]

*/