/**
    1. Les fonctions auto-invoquées (IIFEE).
    EN : Immediately Invoked Function Expression
    FR : Expression de fonction invoquée immédiatement

    Assez rarement utilisées, ce sont des fonctions qui s'exécutent dès qu'elles
    sont définies.

    L'utilisation principale des IIFE était de créer un contexte isolé pour
    éviter les collisions de noms de variables. Cependant, avec
    l'introduction de let et const, qui ont une portée de bloc,
    l'utilisation des IIFE a diminué. Cela dit, elles restent parfois
    utiles dans certaines situations.

*/

// Syntaxe de base 
(function () {
    console.log("Cette fonction est auto-invoquée !");
})();//les parenthèses finales () invoquent immédiatement la fonction

// Avant l'arrivée de let & const qui règlent les problèmes de portée, on pouvait
// déclarer des var dans des IIFEE pour éviter de polluer la portée globale.

//Avec "var" la variable est directement accessible depuis l'objet "window"
var directInWindow = "directInWindow";
//Avec "let" la variable n'est plus directement accessible depuis l'objet "window"
let notDirectlyInWindow = "notDirectlyInWindow";
console.log(window);