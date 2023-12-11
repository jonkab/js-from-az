/**
    1. Valeurs primitives

    Les valeurs primitives sont les :
    - string,
    - number,
    - bigint,
    - boolean,
    - undefined,
    - symbol,
    - null.

    Elles représentent des valeurs "simples" dans la mémoire :
    "abc", 15, true, etc...

    Elles sont stockées directement dans l'emplacement de la
    variable.

*/

let userName1 = "Giovanni";//Cette valeur est primitive et de type string
console.log(userName1);

let userName2 = userName1;//La valeur est copié/sauvegardé dans une autre variable
console.log(userName2);

userName1 = "John";
console.log(userName1);//userName1 a bien été réassigné à "John" vs "Giovanni"
console.log(userName2);//userName2 a toujours en mémoire la valeur d'origine "Giovanni"
/**
    #METAPHORE

    Pensez aux valeurs primitives en JavaScript comme à des maisons
    individuelles, chacune avec son propre jeu de clés.
    Lorsque vous "copiez" une maison (une valeur primitive),
    vous construisez une toute nouvelle maison avec un design similaire,
    mais avec son propre jeu de clés unique.
    Si vous changez la couleur de la peinture dans la nouvelle maison,
    cela n'affecte pas la couleur de la peinture de l'ancienne maison.
    Chaque maison (valeur primitive) est complètement indépendante,
    avec ses propres modifications qui n'impactent pas les autres.
 */


/**
    2. Les valeurs de référence.

    Les objets, les tableaux, et les fonctions sont des valeurs de référence, c'est-à-dire
    qu'ils vont prendre une place spéciale dans la mémoire.

    Si on copie un objet dans une autre variable, nous créons une référence,
    nous ne créons pas une copie indépendante.

    Ils sont stockées quelque part en mémoire et la variable contient
    une référence à cet emplacement.
*/

const dog1 = {
    name: "Tom",
    breed: "Golden"
}

let dog2 = dog1;//La valeur est une référence directe à l'objet
console.log(dog2);//Ce n'est pas une copie

dog1.name = "Max";//Car en changeant le "name" sur l'objet d'origine
console.log(dog1);//La valeur est bien remplacé
console.log(dog2);//Même sur "dog2", donc c'est bien uniquement une référence
//Ce n'est pas une copie à l'inverse d'une variable de valeur "simple(primitives)"
/**
    #METAPHORE

    D'un autre côté, les valeurs de référence sont comme des livres
    dans une bibliothèque.
    Lorsque vous créez une variable qui contient un objet (comme un tableau ou un objet littéral),
    c'est comme si vous obteniez une carte de bibliothèque pour un livre spécifique.
    Si vous partagez cette carte avec quelqu'un d'autre (c'est-à-dire, assignez cette variable à une autre),
    vous ne donnez pas une copie du livre, mais un moyen d'accéder
    au même livre original.
    Si l'un de vous marque une page ou écrit une note dans le livre,
    cette modification est visible pour tous ceux qui ont la carte
    de ce livre.

 */

/**
    3. Pourquoi les chaînes ont des propriétés / méthodes ?

    Les valeurs primitives string, number, boolean et symbol ont
    des propriétés et des méthodes natives auquel on peut accéder
    lorsqu'on utilise :
    - la dote notation "."
    - la bracket notation "[]"

    Comme pour les objets, car JavaScript a des objets
    enveloppants (wrapper objects) pour les valeurs primitives,
    telles que String, Number, Boolean, et Symbol.

    Ces objets enveloppants sont temporaires et créés lorsque vous
    accédez aux propriétés ou aux méthodes de valeurs primitives,
    mais ils ne modifient pas la valeur primitive elle-même.

    Une fois que l'opération est terminée, JavaScript "déballe" l'objet
    enveloppant et retourne la valeur primitive.

    ⚠️Important ⚠️
    Les valeurs primitives conservent leur type de données primitif
    et ne sont pas automatiquement converties en objets.

*/

let str = "Hello";
let strLength = str.length; // Ici, un objet String temporaire
// est créé pour accéder à la propriété "length"
console.log(strLength); // Cela renvoie la longueur de la chaîne de caractères (5)
