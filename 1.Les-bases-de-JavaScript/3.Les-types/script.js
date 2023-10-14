/* 
    En JavaScript, il existe plusieurs types permettant de
    manipuler des valeurs avec des comportements et des
    caractéristiques différents. Il y a donc des types de
    valeurs qui sont stocké dans les variables.
*/

/* 
    NUMBER : Le type nombre représente un nombre entier ou à
    virgule entre 9007199254740991 et 9007199254740992.
    Au-delà de ces nombres, les calculs ne sont plus fiables
    et nous pouvons utiliser un nouveau type bigInt.
    Source MDN qui en parle :
    - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
*/
let age = 99;
console.log(age + " a pour typeof : " + typeof age);


/*  
    STRING : Le type représentant des chaînes de caractères.
    On peut utiliser la longueur de la chaîne grâce à length.
    On peut accéder à une lettre avec la bracket notation.
*/
const userName = "Paul";// chaque étant indéxé voici leurs indices
                       //0123
console.log("userName = " + userName);
console.log("userName a pour typeof : " + typeof userName);
console.log("userName a pour longeur : " + userName.length);
console.log("userName a comme 1ère lettre : " + userName[0]);
console.log("Chaque lettre de userName est indéxé en partant de 0");


/* 
    BOOLEAN : Un type représentant une valeur vraie(true) ou
    fausse(false).
*/
let isAdult = false;
console.log("isAdult vaut : " + isAdult);
console.log("le typeof de isAdult est : " + typeof isAdult);


/* 
    UNDEFINED : Le type représentant une valeur non-définie,
    typiquement quand une variable n'a pas encore reçue de
    valeurs.
*/
let price;
console.log("le typeof de price vaut : " + typeof price + " | car il n'a pas de valeur affecté");


/* 
    NULL : Ce type représente une valeur qui n'existe pas,
    typiquement quand on essaye d'utiliser une variable non
    créée.
*/
console.log("null vaut : " + typeof null + " | C'est un bug historique ne pouvant être fixé.");


/* 
    BIGINT : Ce type représente des nombres très grands.
    Il a été rajouté récemment pour palier à des problèmes
    assez rares.
*/
console.log(typeof 999999999999999999999999999999n);
// Bien ajouter le n à la fin pour qu'il soit bien catégorisé comme bigint


/* 
    SYMBOL : Un symbole est un identifiant unique qui permet
    d’éviter des collisions entre des valeurs similaires.
    À ce stade de votre apprentissage, il ne vous sert à rien
    de vous pencher dessus.
*/
console.log("Le type symbol sera vu plus tard. Il est récent.")


/* 
    OBJECT : Un objet est un container de propriétés représentant
    des valeurs. On appelle une propriété "méthode" lorsque sa
    valeur est une fonction.
    C'est un type très important, qu'il faut maîtriser et qui
    représente une grande partie du fonctionnement du langage
    JavaScript.
*/
const norway = {
    name : "Norway",
    capital: "Oslo",
    population: 5400000,
    GDP: 482
};
console.log(norway);
console.log("Accès à la propriété name et sa valeur grâce à la dote notation :  " + norway.name);
console.log("La capital de Norway est : " + norway.capital);
console.log("La population ce chiffre à : " + norway.population);
console.log("Le GDP est de : " + norway.population);


/* 
    FUNCTION : Les fonctions sont ... des objets ! Même si typeof
    nous donne le "type" function, ce sont bien des objets
    éxécutables. Nous verrons le fonctionnement des fonctions
    en détail dans ce cours, regardons simplement un exemple
    classique.
*/
// Prenons pour exemple une fonction qui calcul le carré
function getSquare(a) {
    return a * a;
}
console.log("Donne-moi le carré de l'argument nombre passé en paramétre à la fonction getSquare() : " + getSquare(5));
console.log("Le typeof de getSquare est " + typeof getSquare);
// Je peux aussi créer des fonctions directement dans un objet
const lesMaths = {
    definition: "Les maths sont...",
    getSquare: function (a) {
        return a * a;
    }
    // Une fonction intégrée dans un objet est aussi appelé une méthode
    // L'objet lesMaths contient donc la méthode getSquare
    // Grace à la dote notation je pourrai accéder à la méthode
    // getSquare de l'objet lesMaths.
}
console.log("En passant 6 en paramètre j'obtiens son carré qui est : " + lesMaths.getSquare(6));

/* 
    ARRAY : Les tableaux sont ... également des objets ! 
    Mais alors, pourquoi les avoir créés ? Afin d'exploiter
    certaines propriétés et méthodes très pratiques, propres
    aux tableaux, comme la propriété length, ou les méthodes
    .map(), .filter(), etc ...
    Nous reviendrons aussi très en détail sur les tableaux.
*/
const salaries = [1500, 3000, 4000, 5000];
//indice des éléments       0     1     2     3
//Chaque valeur est donc indéxé dans tout le tableau

// On accède aux éléments d'un tableau grâce à l'indice de ce
// dernier qui commence à 0,
// C'est-à-dire que le premier élément est à l'indice 0.
// Ici j'accède à une valeur du tableau grâce à la bracket dotation
console.log("Ici on log la 2éme valeur du tableau qui est : " + salaries[1]);
console.log("Ici on peut voir que le typeof du tableau est : " + typeof salaries);

// Ici grâce à la méthode associée forEach() combiné à un
// fonction fléchée je peux parcourir tout le tableau
salaries.forEach(salary => console.log("salaries.forEach = " + salary));
