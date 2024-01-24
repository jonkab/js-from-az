/* 
    Les éléments retournés par les méthodes de sélection sont des objets.
    On peut donc les comparer pour savoir si on a affaire au même objet, ou pas.

    La comparaison se fera au niveau de la référence dans la mémoire.
    Si deux objets ont la même référence, ils représentent le même objet dans la mémoire.
*/

const secondItem = document.querySelector(".item-2")
const secondLi = document.querySelector("#item-2")

console.log(secondItem === secondLi)// true

const obj1 = {name: "John"}
const obj2 = obj1

console.log(obj1 === obj2)// true