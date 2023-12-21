/* 
    Il existe une flopée de petites méthodes permettant de rajouter ou de supprimer
    un élément d'un tableau.

    Voyons un exemple avec un tableau de nombre
*/

const numbers = [1,2,3];
console.log(numbers);//Retourne -> [ 1, 2, 3 ]

/* 
    Array.prototype.pop()

    Cette méthode supprime le dernier élément d'un tableau.
    Et le retourne si on veut le stocker.
*/
console.log("---------- Array.prototype.pop() ---------")
//.pop() permet en plus de supprimer le dernier élément d'un tableau, d'en faire une copie
// si on le stocke dans une variable
const backupLastNumber = numbers.pop();//Supprime 3 de "numbers" et le retourne dans "backupLastNumber"
console.log(backupLastNumber);//Retourne -> 3
console.log(numbers);//Retourne -> [ 1, 2 ]


/* 
    Array.prototype.shift()

    Celle-ci supprime le premier élément d'un tableau.
    Et le retourne si on veut le stocker.
*/
console.log("---------- Array.prototype.shift() ---------")
//.pop() permet en plus de supprimer le premier élément d'un tableau, d'en faire une copie
// si on le stocke dans une variable
const backupFirstNumber = numbers.shift()//Supprime 1 du tableau et le retourne afin de le stocker si nécessaire
console.log(backupFirstNumber);//Retourne -> 1
console.log(numbers);//Retourne -> [ 2 ]


/* 
    Array.prototype.unshift(element1, element2, ...)

    Rajoute les arguments qu'on lui passe au début d'un tableau.
    Et renvoie la nouvelle longueur du tableau.
*/
console.log("---------- Array.prototype.unshift() ---------")
const arrayLengthSinceAddingBeginning = numbers.unshift(backupFirstNumber);//Ajoute 1 au début du tableau et
// retourne la nouvelle longueur du tableau afin de la stocker si nécessaire
console.log("New array length : ", arrayLengthSinceAddingBeginning);//Retourne -> 2
console.log(numbers);//Retourne -> [ 1, 2 ]


/* 
    Array.prototype.push(element1, element2, ...)

    Cette méthode rajoute les arguments qu'on lui passe à la fin d'un tableau.
*/
console.log("---------- Array.prototype.push() ---------")
const arrayLengthSinceAddingEnd = numbers.push(backupLastNumber);//Ajoute 3 à la fin du tableau et
// retourne la nouvelle longueur du tableau afin de la stocker si nécessaire
console.log("New array length : ", arrayLengthSinceAddingEnd);//Retourne -> 3
console.log(numbers);//Retourne -> [ 1, 2 ,3]


/* 
    La propriété length.

    La propriété length (longueur) indique le nombre d'éléments présents dans le tableau.
    Le calcul du nombre d'éléments étant fait automatiquement par JavaScript cette valeur est dynamique.
    Cela permet si l'on manipule un tableau, de toujours savoir qu'elle est sa longueur.
    À savoir qu'elle est toujours supérieure au plus grand indice du tableau.

    Nous allons voir qu'il est également possible d'intervenir/modifier directement cette propriété pour
    par exemple réduire le nombre d'éléments du tableau, voire complétement vider/supprimer les éléments
    du tableau. Le tableau ne sera pas supprimé, mais vide.

    La propriété length est utilisée dans de nombreux cas, voici des cas d'usages courant :
*/
console.log("---------- .length ---------")
// Connaître la longueur (le nombre d'éléments) du tableau
console.log("Longueur du tableau est : ", numbers.length);//Retourne → 3 | Car il y a bien 3 nombres dans le tableau

// Pour sélectionner le dernier élément.
console.log("Le dernier élément du tableau est : ", numbers[numbers.length - 1]);//Retourne -> 3
/** Explication détaillée de ce qui se passe et de la syntaxe :
 *
 *     On sait que :
 *     1- numbers est un tableau [],
 *     2- que par conséquent les éléments/valeurs sont indéxés numériquement par défaut en partant de l'indice 0 pour être stockés et rangés,
 *     3- et que pour accéder/sélectionner à un élément/une valeur précise, il faut mettre le numéro désiré entre les []
 *     4- et on vient de voir que les tableaux ont des propriétés dont ".length" qui retourne toujours la longueur du tableau
 *     5- et que ce nombre est toujours supérieure au plus grand indice du tableau puisque l'indic de départ commence à 0.
 *
 *     Donc pour sélectionner le dernier élément d'un tableau sans mettre le numéro de l'indice de manière statique
 *     et pour que ce soit dynamique et plus maintenable, on va simplement se servir de la valeur que retourne ".length"
 *     et faire une petite opération de soustraction en lui retirant 1 pour être sûr d'avoir toujours le dernier élément
 *     du tableau.
 *
 *     D'où la syntaxe de l'opération [numbers.length - 1] directement entre les crochets du tableau.
*/

// Raccourcir un tableau
numbers.length = 1;//Modification manuelle/directe de la longueur du tableau en le réduisant à 1 seul élément
console.log("Seul 1 élément du tableau a été gardé : ", numbers);


// suppression de tous les éléments
numbers.length = 0;//Modification manuelle/directe de la longueur du tableau en supprimant tous les éléments
console.log("Les éléments du tableau ont étés supprimés : ", numbers);