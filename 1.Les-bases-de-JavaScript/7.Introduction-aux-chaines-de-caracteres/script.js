/* 
    Les chaînes de caractères, ou string en anglais, permettent de représenter du texte.
*/

/* 
    1. Intégrer des expressions dans des chaînes de caractères.
*/

let money = 457;

const userAccountInfo1 = "Il vous reste " + money + " euros.";
console.log(userAccountInfo1+ " (Ancienne méthode)");//Ancienne façon de faire
/* Compliqué de faire des retours à la ligne \n, d'intégrer des expressions,
    échapper les apostrophes/guillemets, etc...
*/



/* "Nouvelle" façon de faire (2015+), cela permet de prendre en compte
    les retours à la ligne, d'éviter d'échapper les apostrophes, et facilite
    grandement l'intégration d'expression dans les chaînes.
*/
/* On peut faire des calculs et appeler des fonctions dans les accolades. */
/* Template litterals (c'est l'appellation en anglais) */
const userAccountInfo2 = `Il vous reste ${money} euros.`;
console.log(userAccountInfo2 + " (Template litterals)");

/* 
    2. La concaténation, ou l'assemblage de plusieurs chaînes.
*/

const chunk1 = "abc";
const chunk2 = "def";
const chunk3 = chunk1 + chunk2;

console.log(chunk1 + chunk2);// Ici cet assemblage/concaténation de chaines
// équivaut à :
console.log(chunk3);

/* Concaténation d'un type chaine avec un type number  */
console.log(chunk3 + 99); // Ici le type number 99 deviendra une chaine
// le fait de concaténer une chaine avec un nombre va faire que le
// résultat sera converti en chaine.

console.log(typeof (chunk3 + 99));// On peut le vérifier ainsi
// grâce à typeof qui renverra le type string

/* 
    3. Quelques astuces : Sélectionner un caractère, retourner la longueur, etc...
*/

const userName = "Léonard de Vinci";
console.log(userName.length);//Va retourner 16
// Ici, je vais pouvoir récupérer la longeur de la chaine

console.log(userName[2]);// Va retourner o
// Ici, je vais pouvoir récupérer la lettre o qui est à son index 2

console.log(userName.indexOf("d"));// Va retourner 6
// Ici, je vais pouvoir récupérer l'index de la lettre d

// ⚠️ Ce qui se passe, c'est que le moteur JavaScript a prévu que si on utilisait
// la syntaxe "dote notation" ou "bracket notation" alors, il va transformer directement la
// chaine en objet pour accéder à ces différentes propriétés et méthodes


