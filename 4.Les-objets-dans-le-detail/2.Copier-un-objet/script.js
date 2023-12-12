/**
    1. L'erreur classique quand on a une valeur de référence.

    L'erreur classique est d'utiliser l'opérateur "=" pour copier une valeur de
    référence. Ce qui est naturel puisque que c'est la méthode classique
    quand on veut :
        1- assigner une valeur à une variable
        2- stocker/copier une variable dans une autre

    Sauf qu'en JavaScript, il faut bien prendre en compte qu'il y a aussi la notion
    des 2 types de valeurs "primitives" ou "références" et qu'en fonction d'elles
    la façon de stocker/copier une variable dans une autre diffère.

    Voyons un exemple avec comme valeur de type "référence" un tableau qui
    montre qu'en l'assignant avec "=" ça ne fait pas une copie,
    mais seulement une référence à lui.

    Il faut donc voir une référence comme un lien direct à l'objet/tableau d'origine.
 */

const numbers = [1,2,3];//Assignation d'une valeur type "référence" à numbers
const numbersFakeCopy = numbers;//Assignation de numbers à une nouvelle variable
//numbersFakeCopy, JavaScript fait ici référence à numbers et non une copie
//On peut le voir, car en faisant une
numbers.push(4);//maj du tableau en ajoutant une nouvelle valeur
console.log(numbersFakeCopy);//Ici même numbersCopy a été impacté par la maj de numbers
//De cette manière, on ne peut donc pas créer une copie(numbersCopy) sans qu'elle soit
//impactée par une maj de la valeur d'origine(numbers).


console.log("-----------------------------------");
/**
    2. Alors comment copier ?

    Il existe plusieurs manières de le faire, avec :
    - le spread operator (nouveauté 2015) :
        - [...] pour un tableau,
        - {...} pour un objet,
    - la méthode d'objet : Object.assign(),
    - la methode de tableau : Array.from(),
    - la méthode : xxx.concat()

    Néanmoins, toutes ces façons de faire vont créer une copie superficielle,
    c'est-à-dire que seulement les valeurs primitives seront copiées,
    les tableaux ou objets imbriqués seront toujours référencés.

    Vous sentez le bug arriver ?
*/

const letters = ["a", "b", "c", {name: "John"}];
console.log(letters);
// ["a", "b", "c", {name: "John"}]

const lettersCopy = [...letters];//Création d'une copie grâce au spread operator uniquement pour les valeurs primitives
// ["a", "b", "c", {name: "John"}]//l'objet lui est une référence pas une copie.
//lettersCopy[3] = {...letters[3]};//Il faut donc le copier aussi indépendamment avec un spread operator
//Voir explication des lignes 72, 73 et 74
//En attendant si je laisse commenté la ligne 55 et que je maj le tableau d'origine
letters.push("d");//comme ceci par exemple, alors
console.log(lettersCopy);//lettersCopy n'est pas mise à jour, donc c'est une copie non une référence
// ["a", "b", "c", {name: "John"}]

console.log(letters);//letters est maj avec la nouvelle valeur "d"
// ["a", "b", "c", {name: "John"}, "d"]

letters[3].name = "noname";//Maj de l'objet du tableau
console.log(letters);//letters est maj, "john" a "été" remplacé par "noname"
// ["a", "b", "c", {name: "noname"}, "d"]

console.log(lettersCopy);//Et aussi pour "lettersCopy" car name étant dans un objet, c'est donc une référence
// ["a", "b", "c", {name: "noname"}]

// Il faut donc aussi le spread operator sur l'objet pour faire une copie
//lettersCopy[3] = {...letters[3]};//l'objet étant dans un tableau, il faut le sélectionner à son indice
//Si je décommente la ligne 44, alors le log de lettersCopy ligne 58 sera :
// ["a", "b", "c", {name: "John"}]
//car on aura vraiment copié l'objet ce ne sera plus une référence

//À savoir qu'il existe aussi la méthode structuredClone()
const shallowClone = structuredClone(letters);//pour faire une copie
console.log(shallowClone);//Mais c'est à utiliser uniquement si on a des valeurs primitives,
//car ça ne copie pas les valeurs de référence, ça fait seulement une référence.




console.log("----------------- deep copy ------------------");
/**
    3. Faire une copie profonde, deep copy.

    A. On peut faire une copie profonde en copiant chaque niveau d'un objet "à la main".

    B. Seconde manière de faire, utiliser la méthode structuredClone() qui permet de
    deep-clone facilement.
    Malheureusement, cette méthode ne permet pas de cloner des méthodes.
 */
//À savoir que comme c'est un objet avec 2 niveaux de profondeur,
const deepObj = {
    userName: "Tom",//profondeur niv 1
    collection: {//profondeur niv 2
        a: 1,
        b: 2,
        c: 3
    },
}//Dans le jargon, on appelle ça un "deep object" objet profond en anglais,
// s'il a plus d'1 niveau de profondeur.

const objCopy = {
    ...deepObj,//Copie de la valeur primitive de niv 1
    collection: {
        ...deepObj.collection//Copie de la valeur de référence de niv 2
    }
}
//Teste d'une maj sur l'objet d'origine "deepObj"
deepObj.userName = "Tim";//pour la valeur primitive au niv 1
deepObj.collection.a = 0;//pour la valeur de référence au niv 2
console.log(deepObj);//Seul deepObj a été maj
console.log(objCopy);//objCopy est resté intact, c'est bien une copie




console.log("--------------------------- libraryCard -----------------------------");
/**
 * Exemple avec des cartes de bibliothèque :
 * 1- une carte d'origine qui sert de base de référence pour les mises à jour
 *   pour les cartes utilisateurs : libraryCard
 *
 * 2- une copie/sauvegarde indépendante et non une référence de cette carte : libraryCardCopy
 *
 * 3- une carte d'un utilisateur pour tout nouvel utilisateur : johnCard
 *
 * @type {{level: {a: number, b: number, c: number}, card: string}}
 */
let libraryCard = {
        card: "libraryCard",
        level: {//profondeur niv 2
            a: 1,
            b: 2,
            c: 3
        }
    };
console.log(libraryCard);

let libraryCardCopy = {
    ...libraryCard,
    level: {
        ...libraryCard.level
    }
};
console.log(libraryCardCopy);

libraryCard.level.d = 4;
console.log(libraryCard);//La card d'origine est bien MAJ "level 4"
console.log(libraryCardCopy);//La copie est resté intact "level 3"

let johnCard= {
    libraryCard,//Référence à la card d'origine
    user:{
            cardOwner: "John",
            rank: "premium",
            price: 9
        }
};

console.log(johnCard);//Grâce à la référence, John hérite des propriétés de l'objet
//d'origine "libraryCard" et de ses MAJ