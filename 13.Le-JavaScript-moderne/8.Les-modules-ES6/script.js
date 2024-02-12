/* 
    Les modules ES6 permettent de découper son code en plusieurs morceaux.

    Avant, on devait mettre des <script> les uns au-dessus des autres, mais c'était difficilement maintenable.

    Maintenant grâce aux instructions "export" et "import" il est possible de créer des modules dans un
    fichier JS indépendant pour chacun d'eux afin de les exporter puis les importer dans le script final.
*/

/* Import avec le nommage d'origine provenant de l'export nommé */
//import {userName, age} from "./module1.js";

/* Import avec le renommage provenant de l'export nommé d'origine */
import {userName as name, age} from "./module1.js";


/* Import des fonctions (même syntaxe que pour des variables) */
import {add, multiply} from "./module2.js";

/*
    Import venant d'un export par défault.
    On peut même changer le nom de la variable exporté ex :
        - "computer" dans module3.js remplacé ici par "ordinateur"
*/
import ordinateur, { os } from "./module3.js";


//Après avoir renommé "userName" en "name"
console.log(name, age);//John Dpe 45

console.log(add(5,5));//10

console.log(multiply(5,5));//25

//Provenant de l'export default module3.js
console.log(ordinateur);//MacBook

//Provenant de l'export nommé module3.js
console.log(os);//MacOS

