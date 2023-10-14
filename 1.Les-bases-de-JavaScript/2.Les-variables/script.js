/* 
    Une variable est le nom d'un emplacement dans la mémoire de votre
    ordinateur permettant de stocker des valeurs et de les utiliser
    dans le code.

    Let et const sont apparu en 2015, avant c'était var.
*/


/* let
* let à l'inverse de const peut être initialisé et donc démarrer
* en undefined. Et on peut lui réassigner une valeur si besoin.
* */
let mainCharacter;
mainCharacter = "Thomas";
mainCharacter = "Nico"
console.log(mainCharacter);
/* ⚠️Impossible d'utiliser let et const avant de les déclarer */
/* ⚠️Impossible de redéclarer une let ou const avec le même nom */


/* const
* Permet de stocker des valeurs qui ne changerons pas.
* On ne peut donc pas écraser une constante à l'inverse de let.
* */
const userName = "John";
// userName = "JohnDoe"; ne fonctionnera pas, car c'est une constante
console.log(userName);
/* ⚠️ Attention, on ne peut pas déclarer de constante sans leur
* affecter une valeur d'office, car const ne peut pas
* être initialisé comme let et var, const userName; ne fonctionnera pas.
* */


/* var
* A le même fonctionnement de base comme let.
* En revanche ce qu'on peut faire avec var qu'on ne peut pas faire
* avec let et const c'est redéclarer var avec le même nom.
* On peut accéder à une var avant sa déclaration. Ça ne généra
* pas d'erreur, mais un undefined et ça ne bloquera pas l'exécution
* du script.
* */
console.log(test)
var test = "test";
var test = "test2";
console.log(test)
