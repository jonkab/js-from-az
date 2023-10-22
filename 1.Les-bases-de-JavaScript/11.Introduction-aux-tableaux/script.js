/* 
    1. Les tableaux

    Les tableaux permettent de stocker plusieurs valeurs sous la forme
    d'une liste.

    Les tableaux sont, sous le capot, des objets.

    Ils ont été créé, car ils sont très pratiques pour manipuler des listes
    de valeurs, notamment grâce aux méthodes qui sont associées à ces derniers.

    Les indices ou index, c'est-à-dire les positions qui servent à retrouver
    les éléments d'un tableau, commencent à zéro !
    Cela porte à confusion quand on débute.

    const arr = ["a","b","c"]
    index         0   1   2
*/


/*
   Les indices ou index, on peut dire les 2.
*/
const users = ["Paul", "Ana", "Juliette", "Alexandre", "Victor"];
console.log(users[0]);//Ici, grâce à l'index 0 du tableau, je peux
// selection sa valeur
// En effet, ils ont des propriétés (0,1,2,3,4,5...) et on y accède
// via la bracket notation.


/*
    Propriété length très pratique
 */
console.log(users.length);//Ici, ça renvoie le nombre d'éléments dans
//le tableau donc la longueur du tableau.

console.log(users.length - 1);//Ici, je peux accéder au dernier
//élément du tableau par son index

// Pour sélectionner le dernier élément d'un tableau
console.log(users[users.length - 1]);//Ici, ça renvoie la valeur
//du dernier élément du tableau


/*
    push() : Pour insérer un élément dans un tableau
*/
users.push("John");//Ajoute l'élément à la fin du tableau
console.log(users);//Renvoi le tableau complet avec la nouvelle valeur


/*
    pop() : Pour retirer le dernier élément dans un tableau
*/
users.pop();//Retire le dernier élément du tableau
console.log(users);//Renvoi le tableau complet avec la dernière valeur en moins


/*
    indexOf() : Pour retourner l'index d'un élément dans un tableau
*/
console.log(users.indexOf("Ana"));// renvoi uniquement l'index (en lui passant sa valeur)


/*
  ℹ️ À savoir :
    Les tableaux sont des objets !
 */
console.log(typeof users);  // renvoi object
console.log(users);  // renvoi tout l'objet