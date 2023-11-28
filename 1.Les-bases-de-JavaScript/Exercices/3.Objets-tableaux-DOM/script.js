/* 
    1. Déclarer un objet "car" et inventez trois propriétés - valeurs de votre choix.
    Ex: name, price, doors, kilometers, maxSpeed, year, etc ...
*/
let car = {
    name:"BMW X5",
    price: 20000,
    year: 2014
}

console.log(car);

/* 
    2. Vous disposez d'un tableau de fruits ci-dessous.
    A - Loggez le deuxième fruit dans la console.
    B - Loggez le dernier fruit dans la console.
    C - Retournez la longueur du tableau.
*/

const fruits = ["🍇","🍓","🍌"]

console.log("le troisième fruit est : " + fruits[1]);
console.log("le dernier fruit est : " + fruits[fruits.length - 1]);
console.log("la longueur du tableau est : " + fruits.length);

/* 
    3. Loggez l'objet global BOM.
*/
console.log(window);
