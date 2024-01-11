console.log("----- Les méthodes de nombres -----");
/*
    Les nombres, comme les chaînes de caractères, sont des types primitifs.
    Ils n'ont pas de méthode propre par défaut et ne fonctionnent pas par
    référence comme les objets.

    Néanmoins, certaines méthodes liées aux nombres existent, elles sont
    stockées dans le prototype Number qui est attaché aux objets Number
    créés via le constructeur Number.

    Un objet number est créé quand on essaye d'appeler une méthode
    à partir d'un nombre.

    55.5554875.toFixed(2) // '55.56'

    // sous le capot
    new Number(55.5554875).toFixed(2); 

    console.log(new Number(10)) // ouvrez-le dans la console pour voir son prototype
*/
    console.log(55.5554875.toFixed(2))
    console.log(new Number(55.5554875))

    function Person(userName){
        this.userName = userName
        this.age = 99
    }

    console.log(new Person("John"))

console.log("\n\n----- 1. Number.prototype.toFixed(number) -----");
/* 
    1. Number.prototype.toFixed(number)

    Retourne une chaîne correspondant au nombre dont les chiffres après la virgule
    ont été tronqués en fonction de l'argument fourni.

    Attention, le dernier chiffre après la virgule est arrondi à l'entier supérieur
    ou inférieur.
*/

    console.log(123.1234.toFixed(2))// "123.12"
    console.log((123).toFixed(2))// "123.00"


console.log("\n\n----- 2. Number.prototype.toString(baseNumber) -----");
/* 
    2. Number.prototype.toString(baseNumber)

    Doc MDN très bien faite qui en parle : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

    Transforme un nombre en chaîne de caractères.

    Le paramètre optionnel défini une base de conversion qui est par défaut une base décimale.

    // Peut fonctionner avec des nombres à virgules
    784.45.toString() // "784.45"

    // Il faut donc entourer les entiers pour le faire fonctionner,
    car vu que la syntaxe avec un nombre à virgule est possible,
    l'analyseur de la page pense qu'on a oublié la partie après la virgule dans ce cas-là.

    784.toString()    // Error : Unexpected token
    784.(attend une valeur ici)toString()

    // Solution
    (784).toString()  // Ce comportement est similaire à toutes les méthodes liées aux nombres.

*/
    console.log("toString() a convertie le type en", typeof 784.45.toString());// "784.45"
    console.log((784).toString());// "2e9"
    console.log((745).toString(16));  // "310" en Hexadécimal, base 16.
    console.log((784).toString(2));   // "1100010000" en binaire, base 2.


console.log("\n\n----- 3. Number.prototype.toPrecision(digitsNumber) -----");
/* 
    3. Number.prototype.toPrecision(digitsNumber)

    Renvoie une chaîne représentant un nombre ayant une longueur définie par l'argument,
    en arrondissant le dernier chiffre.
*/

    console.log(1075.558.toPrecision(5));  // "1075.6"
    console.log((10750).toPrecision(3));   // '1.08e+4' (notation scientifique 1,08 x 10^4 = 10800)


console.log("\n\n----- 4. Number.parseInt(chaîne, baseNumber) -----");
/* 
    4. Number.parseInt(chaîne, baseNumber)

    Il existe également des méthodes générales directement attachées au constructeur Number.

    console.dir(Number) // Visualisation de cette fonction constructeur.
    
    Celle-ci convertit le premier argument représentant une chaîne en un nombre.
    On peut optionnellement convertir le résultat dans une autre base à l'aide du second argument.

    La méthode vient directement de l'objet Number, c'est un objet proposant des méthodes liées aux nombres.

*/
    // Ici .parseInt() converti la chaine "555" en nombre :
    console.dir(typeof Number.parseInt("555")) // number

    // Ici .parseInt() converti la chaine "10111011" qui représente du binaire, en décimale :
    console.dir(Number.parseInt("10111011", 2))// 187

/*
    Voici une série d'exemples pour contextualiser et expliquer l'usage de ce type de fonction :
*/
/*  Exemple 1 - "Conversion de Chaîne en Nombre pour des Calculs" :
    Si vous avez une valeur numérique sous forme de chaîne de caractères (par exemple,
    provenant d'une entrée utilisateur ou d'un fichier texte) et que vous devez effectuer
    des calculs avec, vous devez d'abord la convertir en nombre.
*/
    let ageText = "30";
    let age = parseInt(ageText);
    console.log(age + 5); // 35, et non "305"

/*
    Exemple 2 - "Extraire un Nombre d'une Chaîne Mixte" :
    Parfois, vous avez une chaîne qui contient à la fois des chiffres et des lettres,
    et vous voulez obtenir uniquement la partie numérique au début de la chaîne.
 */
    let mesure = "200px";
    let largeur = parseInt(mesure);
    console.log(largeur); // 200

/*
    Exemple 3 - "Interpréter des Nombres dans Différentes Bases" :
    .parseInt() permet également de spécifier une base pour la conversion.
    C'est utile pour convertir, par exemple, des chaînes représentant des nombres binaires
    ou hexadécimaux en nombres décimaux.
 */
    let hexString = "1A";
    let decimal = parseInt(hexString, 16);
    console.log(decimal); // 26

/*
    Exemple 4 - "Validation de Données Numériques" :
    Lorsque vous recevez une entrée et que vous voulez vous assurer qu'elle représente
    un nombre entier valide, .parseInt() peut être utilisé pour tenter de la convertir.
    Si la conversion échoue, elle renvoie NaN.
 */
    let userInput = "123abc";
    let number = parseInt(userInput);
    if (isNaN(number)) {
        console.log("Entrée invalide");
    } else {
        console.log("Entrée valide");
    }

/*
    Exemple 5 - "Nettoyage de Données" :
    Si une chaîne commence par un nombre, mais contient d'autres caractères non numériques
    après, .parseInt() nettoiera la chaîne en ne gardant que la partie numérique initiale.
 */
    let data = "123abc45";
    let cleanNumber = parseInt(data);
    console.log(cleanNumber); // 123
/*
    Pour résumer, en somme, dans tous ces exemples, .parseInt() est utilisé pour gérer
    ou manipuler des données sous forme de chaînes de caractères qui représentent
    des nombres, en les convertissant en nombres entiers pour un traitement ultérieur.
*/


console.log("\n\n----- 5. Number.parseFloat(chaîne) -----");
/* 
    5. Number.parseFloat(chaîne)

    Similaire à .parseInt() (converti une chaine "12.34" en nombre)
    mais pour les nombres à virgule.

    Voici quelques points clés sur le fonctionnement de .parseFloat() :

    1- Conversion en Nombre à Virgule Flottante :
        .parseFloat() analyse la chaîne de caractères et convertit autant de caractères
        que possible en un nombre à virgule flottante.
        Cela inclut les nombres décimaux (par exemple, "3.14").

    2- Ignorer les Caractères Non Numériques :
        Comme .parseInt(), .parseFloat() ignore les caractères non numériques qui
        apparaissent après la portion numérique de la chaîne.
        Cependant, elle échoue si la chaîne commence par un caractère non numérique.

    3- Pas de Base Numérique :
        Contrairement à .parseInt(), .parseFloat() n'accepte pas de deuxième argument pour
        spécifier une base numérique. Elle analyse toujours la chaîne comme un nombre décimal.
*/
    //Voici quelques exemples illustrant la différence entre .parseFloat() et .parseInt() :
    let avecDecimales = "12.34";
    console.log(parseFloat(avecDecimales)); // 12.34
    console.log(parseInt(avecDecimales));   // 12

    let avecTexte = "3.14pi";
    console.log(parseFloat(avecTexte)); // 3.14
    console.log(parseInt(avecTexte));   // 3

    let texteDevant = "abc123.45";
    console.log(parseFloat(texteDevant)); // NaN
    console.log(parseInt(texteDevant));   // NaN
/*
    En résumé, .parseFloat() est utilisée pour traiter des nombres décimaux dans des chaînes
    de caractères, tandis que .parseInt() est utilisée pour traiter des nombres entiers.
*/


console.log("\n\n----- 6. Number.isInteger(numberToCheck) -----");
/* 
    6. Number.isInteger(numberToCheck)

    Vérifie si l'argument fourni est un entier et retourne un booléen en conséquence.

    La méthode .isInteger() est utilisée pour vérifier si une valeur donnée est un nombre entier.
    Contrairement à .parseInt() et .parseFloat(), qui sont utilisées pour convertir des chaînes
    de caractères en nombres, .isInteger() est utilisée pour tester si une valeur est
    un entier. Cette méthode est statique et appartient à l'objet Number.

    Voici quelques points clés à propos de Number.isInteger() :

    1- Vérification de Type et de Valeur :
        Number.isInteger() vérifie à la fois le type et la valeur.
        Elle renvoie true si la valeur est de type nombre et est un entier (sans partie décimale).

    2- Renvoie un Booléen :
        La méthode renvoie true si la valeur est un entier, et false dans tous les autres
        cas (y compris si la valeur est une chaîne de caractères qui ressemble à un entier,
        un nombre à virgule flottante, NaN, ou une valeur non numérique).

    3- Pas de Conversion de Type :
        Number.isInteger() ne convertit pas les types. Si vous passez une chaîne de caractères,
        même si elle représente un entier, la méthode renverra false.
*/
    //Voici quelques exemples d'utilisation de Number.isInteger() :
    console.log(Number.isInteger(5));         // true
    console.log(Number.isInteger(5.0));       // true, car 5.0 est équivalent à 5 en JavaScript
    console.log(Number.isInteger(5.5));       // false
    console.log(Number.isInteger("5"));       // false, car "5" est une chaîne de caractères
    console.log(Number.isInteger(NaN));               // false
    console.log(Number.isInteger(Infinity));          // false
    console.log(Number.isInteger(undefined)); // false
    console.log(Number.isInteger(null));      // false
/*
    En résumé, Number.isInteger() est utilisée pour tester si une valeur est
    un nombre entier en JavaScript, ce qui est utile pour la validation des données
    et la vérification de types.
*/



