/*
    1. Array.prototype.forEach(callback(element, index, array))

    Définition : Exécute une fonction callback sur chaque élément d'un tableau.

    La callback est TOUJOURS appelée avec TOUS les paramètres.
    C'est au dev de choisir celui ou ceux qu'il veut utiliser.

    Valeur de retour : undefined

    Cette méthode va donc permettre de modifier et mettre à jour directement le tableau d'origine.

*/
console.log("\n----- 1. Array.prototype.forEach(callback(element, index, array)) -----");
//Un exemple en voulant multiplier par 2 chaque élément du tableau
const numbers = [1,2,3,4,5,6];
console.log("Tableau d'origine : ", numbers);//Retourne -> [ 1, 2, 3, 4, 5, 6 ]
numbers.forEach((el, index) => numbers[index] = numbers[index] * 2);
console.log("Tableau d'origine MAJ x2 : ", numbers);

/*
    2. Array.prototype.map(callback(element, index, array))

    Définition : Permet de retourner un nouveau tableau contenant les résultats du retour d'une
    fonction callback appelée sur chaque élément d'un tableau.


    Valeur de retour : un nouveau tableau contenant le retour de chaque appel de la fonction callback.

*/
console.log("\n----- 2. Array.prototype.map(callback(element, index, array)) -----");
//Un exemple en voulant retourner seulement des noms spécifiques
const people = [
    {
        name: "Pedro",
        age: 25
    },
    {
        name: "Sara",
        age: 26
    },
    {
        name: "Maria",
        age: 27
    }
];
console.log("Tableau d'objet : ", people);
const names = people.map(el => el.name);
console.log("Nouveau tableau contenant uniquement les noms : ", names);

const majAges = people.map((el, index) => {
    //people[index].age = people[index].age +1;
    return el.age +1;
});
console.log("Tableau des ages MAJ +1 : ", majAges);
console.log("Tableau people d'origine intacte : ", people);

/*
    3. Array.prototype.filter(callback(el, index, array))

    Valeur de retour : Un tableau contenant les éléments ayant passé le test du retour de la fonction callback.
    Si la fonction retourne true, on garde l'élément dans le tableau retourné, sinon on l'ignore.
    Et si tout est ignoré, car ne rentre pas dans la condition, un tableau vide est retourné.

    Permet de filtrer les éléments d'un tableau.
*/
console.log("\n----- 3. Array.prototype.filter(callback(el, index, array)) -----");
//Un exemple en filtrant sur les tailles des joueurs d'une équipe de basket
const heights = [170,185,198,162,187,155,178,207,201,189,180];

const above180 = heights.filter(heights => heights > 180);
console.log(above180);

/* 4. Créer un objet leResultDes3Exo qui contient les résultats des 3 exercices :
    1- numbers
    2- names
    3- above180

    Puis modifie l'orthographe du prénom Sara en Sarah,
    Ajoute le nouveau prénom Steeve,
    Ensuite créer une liste des prénoms
*/
console.log("\n----- 4. objet leResultDes3Exo -----");

const leResultDes3Exo = {};
leResultDes3Exo.numbers = numbers;
leResultDes3Exo.names = names;
leResultDes3Exo.above180 = above180;

console.log("leResultDes3Exo : ", leResultDes3Exo)

//MAJ Sarah
leResultDes3Exo.names[1] = "Sarah";
console.log("leResultDes3Exo : ", leResultDes3Exo.names)

//Ajout Steeve
leResultDes3Exo.names.push("Steeve");
console.log("leResultDes3Exo : ", leResultDes3Exo.names)

//Liste prénoms
for (const name of leResultDes3Exo.names) {
    console.log(name);
}