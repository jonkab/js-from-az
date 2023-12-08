/*
    1. Le mot clé delete.

    On peut supprimer une propriété d'un objet à l'aide du mot clé delete.
*/

const city = {
  name: "Bratislava",
  population: 424000
}





/* Attention, utiliser delete avec la propriété d'un tableau va remplacer l'élément supprimé par un élément empty */




/* 
    2. Bracket et dot notation.

    On peut sélectionner des propriétés en utilisant deux notations.
   
    A. Le point : obj.prop
    La dot notation, en utilisant directement le nom d'une propriété.
    La dot notation n'est pas disponible avec une chaîne de caractère ou un nombre, dans ce cas il faut utiliser la bracket notation.

    B. Les crochets [] : obj["prop"]
    C'est la bracket notation.
    Si vous utilisez un autre type qu'une chaîne entre les crochets, il sera converti en chaîne. obj[1] donnera obj["1"]

*/

const dog = {
  name: "Riki",
  legs: 4
}


/* 
    3. Form raccourcie des méthodes.

    On peut utiliser des fonctions classiques et les fonctions fléchées dans les objets, voyons ensemble les différentes syntaxes.
*/




/* 
    4. Les tableaux sont des objets.

    Les tableaux sont des objets spéciaux permettant de manipuler plusieurs valeurs facilement et contenant toute une floppée de méthodes très pratiques.

    Chaque élément est accessible par son index, nous sommes donc en présence d'une propriété - valeur. 

    // Cela ressemble beaucoup à un objet n'est-ce pas ?
    [
      0: "🍓",
      1: "🍌",
      2: "🍇"
    ]

    Ils ont également une propriété length.
    On accède aux propriétés d'un tableau via la bracket notation, avec des nombres (les index).

*/

const fruits = ["🍓","🍌","🍇"]




/* 
    5. Les fonctions sont des objets.

    En JavaScript, on dit que les fonctions sont des first-class objets, car elles peuvent être appelées, passées à d'autres fonctions(paramètres-arguments), et quelles contiennent aussi des propriétés.
    Les fonctions sont des objets créés à partir du constructeur Function.

*/

