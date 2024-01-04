console.log("------ 1. for(value) ------");
/*
    1. .split(separator)

    Cette méthode permet de transformer une chaîne en tableau à partir d'un séparateur.

    Exemple : 

    "abc".split("") devient ["a","b","c"]
*/

let string = "abc def ijk";

console.log(string.split(""));// Retourne ->
/*
        [
          'a', 'b', 'c', ' ',
          'd', 'e', 'f', ' ',
          'i', 'j', 'k'
        ]
 */

console.log(string.split(" "));// Retourne -> [ 'abc', 'def', 'ijk' ]
console.log(string.split("b"));// Retourne -> [ 'a', 'c def ijk' ]



console.log("\n\n------ 2. .join(separator) ------");
/* 
    2. .join(separator)

    Celle-ci fait l'inverse de .split(), elle transforme un tableau en chaîne.
*/

let arr = ["a","b","c"];

console.log(arr.join(""));// Retourne -> abc
console.log(arr.join(" "));// Retourne -> a b c
console.log(arr.join(999));// Retourne -> a999b999c


console.log("\n\n------ Exercice : inverse une chaine de caractère ------");
let alphabDroit = "abcdef";
console.log(alphabDroit);// Retourne -> abcdef

console.log("\n------ Méthode .reverse() ------");
let alphabToTableAndReverse = alphabDroit.split("").reverse().join("");
console.log(alphabToTableAndReverse);// Retourne -> fedcba


console.log("\n------ Méthode en parcourant la chaîne (tableau) dans le sens inverse ------");
let alphabInverse = "";
for ( let i = alphabDroit.length-1; i >= 0; i--) {
    alphabInverse += alphabDroit[i];
}
console.log(alphabInverse)// Retourne -> fedcba
