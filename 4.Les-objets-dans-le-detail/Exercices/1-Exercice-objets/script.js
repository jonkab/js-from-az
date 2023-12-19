/* 
    1. Création d'objet.

    Créez un objet restaurant contenant une méthode fléchée waiter qui exécute
    un console.log("Que désirez-vous ?") lorsqu'elle est appelée.

    Créez également les propriétés theme(thème du restaurant(Japonais, Italien, Libanais, ...))
    et name avec les valeurs que vous souhaitez.
*/
console.log("-------------------- 1. Création d'objet ----------------");
const restaurant = {
    waiter: () => {
        console.log("Que désirez-vous ?");
    },
    theme: "Japonais",
    name: "Duo cai"
}
restaurant.waiter();

/* 
    2. Liste des props.

    Trouvez deux moyens de créer un tableau contenant toutes les props de l'objet
    ci-dessous.
*/
console.log("-------------------- 2. Liste des props ----------------");
const dam = {
    name: "Grand Coulee Dam",
    capacity: 6.809,
    height: 168,
    length: 1592,
    volume: 9155942
}
console.log("### Moyen N.1 ###");
const arrayFromPropsMoyen1 = Object.keys(dam);
console.log(arrayFromPropsMoyen1);

console.log("### Moyen N.2 ###");
const arrayFromPropsMoyen2 = [];
for (const damKey in dam) {
    //console.log(damKey);
    console.log(dam[damKey]);
    arrayFromPropsMoyen2.push(damKey);
}
console.log(arrayFromPropsMoyen2);

console.log("### Moyen N.3 (hors sujet) ###");
//La méthode "entries()" est très bien si l'on veut regrouper chaque clef/valeur
//dans un tableau indépendant
const arrayFromPropsMoyen3 = Object.entries(dam);
console.log(arrayFromPropsMoyen3);//Retourne ->
/*
[
    0: (2) ['name', 'Grand Coulee Dam']
    1: (2) ['capacity', 6.809]
    2: (2) ['height', 168]
    3: (2) ['length', 1592]
    4: (2) ['volume', 9155942]
]
 */

//Maintenant si à partir de là, on veut atteindre l'objectif initial d'avoir un seul
//Tableau pour regrouper seulement toutes les props de l'objet, voici une méthode :
//Cette méthode n'est pas recommandé, car beaucoup moins performante que la
//1ère et la 2ᵉ. Elle est juste là pour illustrer comment parcourir 2 tableaux imbriqués.
//Et comment on peut le faire avec ce que retourne "Object.entries()"
const onlyProps = [];
for (i = 0; i < arrayFromPropsMoyen3.length; i++) {
    //console.log(arrayFromPropsMoyen3[i]);
    for (j = 0; j < arrayFromPropsMoyen3[i].length; j++) {
        if (j === 0) {
            onlyProps.push(arrayFromPropsMoyen3[i][j]);
        }
    }
}
console.log(onlyProps);




  
/*
  3. Copie

  1- Copiez, à l'aide du spread operator, les valeurs du tableau names dans un
  nouveau tableau namesCopy.

  2- Changez la valeur du dernier prénom du tableau names en "Tom".

  Quizz :
  Sans utiliser la console, est-ce qu'il y a un problème de réfèrence, ou pas ?
*/
console.log("-------------------- 3. Copie ----------------");
const names = ["Jack", "Paul", "Lucas"];

const namesCopy = [...names];
console.log(namesCopy);

names[2] = "Tom";
console.log(names);
