/**
    1. Fonction pure.

    Une fonction pure a deux caractéristiques principales :

    A. Elle retourne toujours la même chose en fonction des mêmes paramètres :
    Cela signifie que le résultat de la fonction dépend uniquement de ses
    arguments. Si vous appelez une fonction pure avec les mêmes paramètres
    plusieurs fois, vous obtiendrez toujours le même résultat.

    B. Elle n'utilise aucune valeur en dehors de sa portée et n'a pas d'effets
    secondaires en dehors de son bloc : Cela signifie que la fonction ne
    dépend pas de l'état global du programme, et elle ne modifie pas l'état
    global non plus. Elle n'a pas d'effets secondaires tels que la modification
    de variables en dehors de son propre scope.

    Les fonctions pures sont importantes en programmation fonctionnelle, car
    elles facilitent la compréhension du code, réduisent les erreurs potentielles
    et facilitent les tests automatisés.
*/
//Exemple d'une fonction pure
function addition(a, b) {//les paramètres sont toujours les mêmes
    return a + b;//Ils sont dans le bloc de la fonction uniquement
}
console.log(addition(5,5));


//Exemple d'une fonction impure
let VAT = 20;
function getFinalPrice(rawPrice) {//Le paramètre est bien toujours le même, mais
    return rawPrice * (100 + VAT) / 100;//"VAT" vient de l'extérieur du bloc de la fonction,
    // seul "rawPrice" est dans le bloc de la fonction uniquement
}
console.log(getFinalPrice(100));


//Autre exemple d'une fonction impure
function getViewPortWidthImpure (){
    return window.innerWidth;//la valeur retournée vient de l'objet widows qui vient de l'extérieur.
}
console.log(getViewPortWidthImpure());

//Si nous voulions la rendre pure voici comment :
function getViewPortWidth(windowWidth) {
    return windowWidth;
}

// Utilisation de la fonction avec la largeur actuelle de la fenêtre
const currentWindowWidth = window.innerWidth;
const width = getViewPortWidth(currentWindowWidth);
console.log(width);
