console.log("-------------- for.js ----------------");
console.log("- (let i = 1; i >= -2; i--) -");
for (let i = 1; i >= -2; i--){
    //console.log(i);
}

// Inverser le sens de la boucle pour afficher les nombres de 5 à 1.
console.log("- (let i = 5; i >= 1; i--) -")
for(let i = 5; i >= 1; i--) {
    //console.log(i);
}


console.log("- (let i = 10; i <= 100; i+=10) -");
for(let i = 10; i <= 100; i+=10) {
    //console.log(i);
}

console.log("- let sum = 0;  (let i = 1; i <= 5; i++) -");
let sum = 0;
for (let i = 1; i <= 5; i++) {
    //console.log("1- i :", i + "| sum : " + sum);
    sum += i;
    //console.log("2-sum += i : ", sum);
    //console.log("\n\n")
}
//console.log('Somme:', sum);

//Écris une boucle for qui calcule la somme des nombres de 1 à 5 et affiche le résultat.
let somme = 0;
for (let i = 1; i <= 5; i++) {
    somme = somme + i;
    //console.log(somme);
}

//Écris une boucle for qui affiche uniquement les nombres pairs entre 1 et 20.
// Step 1 : affiche les nombre de 1 à 20 (1 <= 20)
// Step 2 : conditionne l'affichage pour afficher que les nb pairs
for(let i = 1; i <= 6; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}



//Écris une boucle for qui affiche les multiples de 5 jusqu'à 100 inclus.
// Step 1 : affiche les nombre de 1 à 100 (1 <= 100)
// Step 2 : conditionne l'affichage pour afficher que les nb pairs
for(let i = 1; i <= 100; i++) {
    if(i % 5 === 0) {
        console.log(i);
    }
}

