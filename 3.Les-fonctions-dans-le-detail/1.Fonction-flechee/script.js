/**
    1. Les fonctions fléchées.

    Apparues en 2015, elles sont plus concises et pratiques dans certains
    cas, mais moins lisibles dans d'autres.

    Elles ont également quelques différences de fonctionnement avec les
    fonctions classiques.

    Il ne faut pas les opposer, mais les utiliser judicieusement, en fonction
    de leurs caractéristiques.

    Pour info :
    Stocker une fonction fléchée dans une variable améliore la lisibilité,
    la réutilisation et la gestion du contexte this dans votre code,
    en fonction de la situation spécifique.


    Source MDN :
    https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    Deux facteurs sont à l'origine de la conception des fonctions fléchées :
    une syntaxe plus courte et l'absence de this spécifique à la fonction.
    Sur ce dernier point, cela signifie qu'une fonction fléchée ne lie pas
    son propre this au sein de la fonction.

 */

//Rappel sur la syntaxe d'une fonction classique
/*
function getSquareArea(side) {
    return side * side;
}

console.log(getSquareArea(50));
*/


//La syntaxe d'une fonction fléchée
const getSquareArea = (side) => side * side;
console.log(getSquareArea(5));

/**
    Explication de la syntaxe

    1. Il est préférable de mettre une fonction fléchée dans une variable.
    2. Si elle a 1 seul argument passé en paramètre pas la peine de mettre les parenthéses :
        - 1 argument : const getSquareArea = side => side * side
        - 2 arguments : const getSquareAreaAndColor = (side, color) => side * side + color
    3. Puis le "return" est implicite, pas la peine de l'écrire, bien mettre =>

 */
