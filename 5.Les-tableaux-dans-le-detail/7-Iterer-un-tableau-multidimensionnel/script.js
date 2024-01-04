/* 
    Tableau multidimensionnel.

    Un tableau multidimensionnel à plusieurs niveaux.

    Exemple :
    const couples = [["Tom","Lea"], ["Jack", "Sara"], ["Pedro", "Maria"]];

    On peut itérer à travers ce genre de tableau avec :
    - une double boucle for
    - une double boucle for...of (nouvelle méthode depuis 2015)
*/

console.log("------ 1. for(value) ------");
const couples = [["Tom","Lea"], ["Jack", "Sara"], ["Pedro", "Maria"]];

for (let i = 0; i < couples.length; i++) {
    //console.log(couples[i]);
    for (let j = 0; j < couples[i].length; j++) {
        console.log(couples[i][j]);
    }
}


console.log("\n\n------ 2. for...of ------");
for (const arr of couples) {
    for (const names of arr) {
        console.log(names);
    }
}