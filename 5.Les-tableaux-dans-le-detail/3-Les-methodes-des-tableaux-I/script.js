/* 
    Les méthodes des tableaux.

    Les méthodes associées à tous les tableaux via leur prototype font partie des raisons de leur existence.
    
    Elles sont très pratiques et il est très important de les connaître.
    On peut les apercevoir dans le prototype des tableaux, en affichant un tableau dans la console.

    Ce prototype est attaché à chaque fois qu'on instancie un tableau.

    Ex : const arr = [1,2,3]

    Découvrons ensemble les principales méthodes des tableaux.
*/

/* 
    1. Array.prototype.forEach(callback(element, index, array))

    Définition : Exécute une fonction callback sur chaque élément d'un tableau.
    
    La callback est TOUJOURS appelée avec TOUS les paramètres.
    C'est au dev de choisir celui ou ceux qu'il veut utiliser.

    Valeur de retour : undefined

    Cette méthode va donc permettre de modifier et mettre à jour directement le tableau d'origine.

*/
console.log("----- 1. Array.prototype.forEach(callback(element, index, array)) -----");
//Un exemple en voulant multiplier par 2 chaque élément du tableau
const numbers = [1,2,3,4,5,6];
console.log("Tableau d'origine : ", numbers);//Retourne -> [ 1, 2, 3, 4, 5, 6 ]

//Rappel sur les valeurs de références
const fakeCopyOfNumb = numbers;//Ici "fakeCopyOfNumb" n'est pas une copie, seulement une référence

//Rappel sur comment faire une vraie copie indépendante grâce au spread operator
const realCopyOfNumb = [...numbers];
numbers.forEach((el, index) => numbers[index] = numbers[index] * 2);
console.log("Tableau d'origine MAJ x2 : ", numbers);//Retourne -> [ 2, 4, 6, 8, 10, 12 ]
console.log("Tableau fakeCopyOfNumb de référence : ", fakeCopyOfNumb);//Retourne -> [ 2, 4, 6, 8, 10, 12 ]
console.log("realCopyOfNumb sauvegarde tableau d'origine : ", realCopyOfNumb);//Retourne -> [ 1, 2, 3, 4, 5, 6 ]


/* 
    2. Array.prototype.map(callback(element, index, array))
    
    Définition : Permet de retourner un nouveau tableau contenant les résultats du retour d'une
    fonction callback appelée sur chaque élément d'un tableau.


    Valeur de retour : un nouveau tableau contenant le retour de chaque appel de la fonction callback.

*/
console.log("----- 2. Array.prototype.map(callback(element, index, array)) -----");
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
const names = people.map((people => people.name));
console.log("Nouveau tableau contenant uniquement les noms : ", names);//Retourne -> [ 'Pedro', 'Sara', 'Maria' ]


/* 
    3. Array.prototype.filter(callback(el, index, array))

    Valeur de retour : Un tableau contenant les éléments ayant passé le test du retour de la fonction callback.
    Si la fonction retourne true, on garde l'élément dans le tableau retourné, sinon on l'ignore.
    Et si tout est ignoré, car ne rentre pas dans la condition, un tableau vide est retourné.

    Permet de filtrer les éléments d'un tableau.
*/
console.log("----- 3. Array.prototype.filter(callback(el, index, array)) -----");
//Un exemple en filtrant sur les tailles des joueurs d'une équipe de basket
const heights = [170,185,198,162,187,155,178,207,201,189,180];
console.log("Tableau de toutes les heights", heights);

const above180 = heights.filter(height => height > 180);
console.log("Au dessus de 1m80", above180);//[ 185, 198, 187, 207, 201, 189 ]

const max180 = heights.filter(height => height <= 180);
console.log("Maximum 1m80", max180);//[ 170, 162, 155, 178, 180 ]