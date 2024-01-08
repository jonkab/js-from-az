/* 
    1. Les chaînes ont des méthodes ...

    Les chaînes représentent un type primitif, mais un évenement se produit lorsqu'on essaye d'utiliser une méthode ou une propriété associée à l'objet String, elles se font transformer en objet sous le capot.

*/


/* Découvrons certaines méthodes pratiques des chaînes de caractères. */

/* 
    1. String.prototype.includes(value)

    Retourne un booléen en fonction de la présence de l'argument dans la chaîne.
*/

const str2 = "Le chat saute."



/* 
    2. String.prototype.indexOf(index)

    Retourne l'index de l'argument dans la chaîne.
*/

const str3 = "Le renard saute."


/* 
    3. String.prototype.slice([indexStart, indexEnd[)

    Définition: Découpe une partie d'une chaîne et la retourne.
    Similaire à la méthode slice() des tableaux.

    Valeur de retour: une nouvelle chaîne contenant l'extrait choisi.
*/


const str4 = "L'éléphant boit."


/* 
    4. String.prototype.toLowerCase() et .toUppercase()

    Retourne la chaîne en majuscule ou en minuscule.
*/

const str5 = "L'étudiant lit un livre."



/* 
    5. String.prototype.trim()

    Enlève les espaces à l'avant et à l'arrière d'une chaîne.
    Il existe également .trimStart() et .trimEnd() si l'on veut seulement enlever les espaces du début ou de la fin.
*/


