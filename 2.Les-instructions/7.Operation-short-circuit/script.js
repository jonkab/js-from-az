/* 
    1. Les opérations "Short circuit", cour-circuit en FR.

    Les expressions utilisant des opérateurs logiques (||, &&) retournent des valeurs.

    Le ET logique retourne le second opérande si le premier et le second opérande sont
    évalués comme truthy.

    Le OU logique retourne le premier opérande s'il est évalué comme truthy,
    ou le second si c'est ce dernier qui est truthy.
*/
// -- Avec l'exemple d'origine -- //
let isAuthenticated = true;
//const user = null;
const user = {
  name: "Hanz",
  level: 99
}
console.log(isAuthenticated || user);


// -- Avec mon exemple -- //
/**
 * Court-circuit avec && (et logique) :
 *
 * Si l'opérande de gauche est falsy, l'expression retourne immédiatement l'opérande de
 * gauche sans évaluer l'opérande de droite, car l'opération && nécessite que les deux
 * opérandes soient truthy pour retourner true.
 *
 * Exemple : a && b retourne a si a est falsy, sinon retourne b.
 */
//Pour le test avec une fonction foo()
function foo(){console.log("Short circuit")}
let a = false;
let result = a && foo(); // foo() ne sera pas appelée si a est falsy.
console.log(result);//renvoi false

/**
 * Court-circuit avec || (ou logique) :
 *
 * Si l'opérande de gauche est truthy, l'expression retourne immédiatement l'opérande de
 * gauche sans évaluer l'opérande de droite, car l'opération || nécessite que l'un des
 * opérandes soit truthy pour retourner true.
 *
 * Exemple : a || b retourne a si a est truthy, sinon retourne b.
 */
//Pour le test avec une fonction foo2()
function foo2(){console.log("Short circuit")}
let a2 = false;
let result2 = a2 || foo2(); // foo2() sera appelée si a est falsy.
console.log(result2);//renvoi Short circuit

/*
🔔🔔 RAPPEL [TRUTHY] 🔔🔔
    ℹ️ Voici une liste des valeurs considérées comme truthy en JavaScript :
        - Les nombres non nuls : Tous les nombres différents de zéro (1, -1, 0.5, etc.)
          sont truthy.
        - Les chaînes de caractères non vides : Toute chaîne de caractères qui contient
          au moins un caractère est truthy ("hello", "123", etc.).
        - Les valeurs booléennes true : La valeur booléenne true est truthy.
        - Les objets : Tout objet, y compris les objets construits par l'utilisateur et
          les objets intégrés, est truthy.
        - Les tableaux non vides : Un tableau contenant au moins un élément est truthy.
        - Les fonctions : Une fonction définie (avec du code à exécuter) est truthy.
        - Les instances de types d'objets particuliers : Par exemple, les instances de
          Date, RegExp, etc., sont généralement truthy.

    Il est important de noter que les valeurs truthy et falsy sont utilisées dans des
    contextes où une valeur booléenne est attendue, comme dans les conditions des
    instructions if, while, et autres. Cela permet de simplifier la logique
    conditionnelle dans le code.

🔔🔔 RAPPEL [FALSY] 🔔🔔
    ℹ️ Voici une liste des valeurs considérées comme falsy en JavaScript :
        - false : La valeur booléenne false.
        - 0 : Le nombre zéro.
        - "" (chaîne de caractères vide) : Une chaîne de caractères ne contenant aucun
          caractère.
        - null : Une valeur spéciale qui signifie l'absence de valeur ou la non-définition
          d'un objet.
        - undefined : Une valeur spéciale qui signifie que la variable n'a pas été définie
          ou qu'elle n'a pas de valeur.
        - NaN : Not a Number, résultat d'opérations mathématiques incorrectes.
        - document.all : Une propriété spécifique au navigateur, falsy dans la plupart des
          navigateurs modernes.

    Ces valeurs sont évaluées comme false lorsqu'elles sont utilisées dans des contextes
    où une valeur booléenne est attendue, comme dans des instructions conditionnelles
    (if, while, etc.).

    Toutes les autres valeurs sont considérées comme truthy.
 */