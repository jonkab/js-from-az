/* 
    1. Les chaînes ont des méthodes ...

    Les chaînes représentent un type primitif, mais un événement se produit lorsqu'on
    essaye d'utiliser une méthode ou une propriété associée à l'objet String,
    elles se font transformer en objet sous le capot.
*/
let str = "Lorem ipsum";
console.log(str);// Retourne -> Lorem ipsum
console.log(str.length);// Retourne -> 11
console.log(str[0]);// Retourne -> L
console.log(new String("Lorem ipsum"));// Retourne -> [String: 'Lorem ipsum']

/* Découvrons certaines méthodes pratiques des chaînes de caractères. */

/* 
    1. String.prototype.includes(value)

    Retourne un booléen en fonction de la présence de l'argument dans la chaîne.
*/

const str2 = "Le chat saute."
console.log(str2.includes("c"));// Retourne -> true


/* 
    2. String.prototype.indexOf(valeurRecherchée)

    Retourne l'index de l'argument dans la chaîne.

    Doc MDN très complète : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
    Syntaxe :
     1- si seulement on cherche la 1ʳᵉ valeur indexOf(valeurRecherchée)
     2- et en optionnel, si on cherche la valeur à partir d'un index précis :
        indexOf(valeurRecherchée, indexDébut)
*/

const str3 = "Le renard saute.";
console.log(str3.indexOf("r"))// Retourne -> 3
console.log(str3.indexOf("r", 4))// Retourne -> 7


/* 
    3. String.prototype.slice([indexStart, indexEnd[)

    Définition : Découpe une partie d'une chaîne et la retourne.
    Similaire à la méthode slice() des tableaux.

    Valeur de retour : une nouvelle chaîne contenant l'extrait choisi.
*/
const str4 = "L'éléphant boit."
console.log(str4.slice(11))//Retourne -> boit.
console.log(str4.slice(0, 5))//Retourne -> L'élé

/* 
    4. String.prototype.toLowerCase() et .toUpperCase()

    Retourne la chaîne en majuscule ou en minuscule.
*/

const str5 = "L'étudiant lit un livre."
console.log(str5.toLowerCase());// Retourne -> l'étudiant lit un livre.
console.log(str5.toUpperCase());// Retourne -> L'ÉTUDIANT LIT UN LIVRE.



/* 
    5. String.prototype.trim()

    Enlève les espaces à l'avant et à l'arrière d'une chaîne.
    Il existe également .trimStart() et .trimEnd() si l'on veut seulement enlever les espaces du début ou de la fin.
*/
const str6 = "       tom         ";
console.log(str6.trim());// Retourne -> tom

