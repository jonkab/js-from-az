/* 
    1. Spread operator

    La syntaxe de décomposition permet d'utiliser les valeurs d'un élément itérable, comme un tableau, une chaîne ou un objet.
    C'est très pratique pour effectuer une copie superficielle ou afficher une liste.
*/

/*
  EXEMPLE Tableau Array
*/console.log("------------- EXEMPLE Tableau Array -------------")
const array = [1,2,3]
console.log(...array)

const shallowArrayCopy = [...array, 4, 5, 6]
//Copie dans une nouvelle variable, plus ajout nouvelles valeurs
console.log(shallowArrayCopy)//[1, 2, 3, 4, 5, 6]
//La variable d'origine n'a pas bougé
console.log(array)//[1, 2, 3]


/*
  EXEMPLE Objet
*/console.log("\n\n------------- EXEMPLE Objet et deepCopy -------------")
const obj = {
  name: "Laura",
  age: 26,
  array: [1,2,3]
}
console.log(obj)

const shallowObjCopy = {...obj, dogName: "Tim"}
//Copie dans une nouvelle variable, plus ajout nouvelles valeurs
console.log(shallowObjCopy)//{name: 'Laura', age: 26, array: Array(3), dogName: 'Tim'}
//La variable d'origine n'a pas bougé
console.log(obj)//{name: 'Laura', age: 26, array: Array(3)}


// si une propriété est rajoutée alors qu'elle provient d'un objet copié, elle sera remplacée.
//const shallowObjCopy2 = {...obj, name: "Anna", array: [...obj.array]}
const shallowObjCopy2 = {...obj, name: "Anna"}
//Laura a été remplacé par Anna
console.log(shallowObjCopy2)//{name: 'Anna', age: 26, array: Array(3)}

//Array n'a pas été copié vu que c'est une référence, donc une MAJ de array
//dans shallowObjCopy2 va MAJ obj
shallowObjCopy2.array.push(707)
console.log(obj)//{name: 'Laura', age: 26, array: Array(4)}

//Array étant une valeur de référence, je dois donc également spread array
// pour aussi le copier indépendamment c'est ce qu'on appel une copie
// profonde "deepCopy" car c'est un array imbriqué dans un objet
const deepCopyObj = {...obj, array: [...obj.array]}
console.log(deepCopyObj)//{name: 'Laura', age: 26, array: Array(4)}

//Maintenant que la deepCopy est faite si je la MAJ alors shallowObjCopy2
//et obj ne seront pas impactés
deepCopyObj.name = "John"
console.log(deepCopyObj)//{name: 'John', age: 26, array: Array(4)}
console.log(shallowObjCopy2)//{name: 'Anna', age: 26, array: Array(4)}
console.log(obj)//{name: 'Laura', age: 26, array: Array(4)}

deepCopyObj.array.push(2024)
console.log(deepCopyObj)//{name: 'John', age: 26, array: Array(5)}
console.log(shallowObjCopy2)//{name: 'Anna', age: 26, array: Array(4)}
console.log(obj)//{name: 'Laura', age: 26, array: Array(4)}


/*
  EXEMPLE chaînes de caractères
*/console.log("\n\n------------- EXEMPLE chaînes de caractères -------------")
// Fonctionne également avec les chaînes de caractères
const str = "Hello !"
const strCopy = [...str]
console.log(strCopy)//(7) ['H', 'e', 'l', 'l', 'o', ' ', '!']



/* 
    2. Destructuring.
  
    L'affectation par décomposition consiste à créer des variables à partir des propriétés d'un objet ou des éléments d'un tableau.

*/console.log("\n\n------------- EXEMPLE Destructuring -------------")
console.log("------------- A. Affecter les propriétés d'un objet -----------")

/* A. Affecter les propriétés d'un objet en leur créant des variables(const ou let)  */
const userObj = {
  userName: "Karl",
  age: 44,
  country: "Germany"
}
const {userName, age, country} = userObj
console.log(userName, age, country)//Karl 44 Germany


// Donner un nom différent aux constantes existantes
const {userName: mainName, age: exactAge, country: origin} = userObj
console.log(mainName)//Karl


// Donner des valeurs par défaut, au cas où les props n'existent pas.
let {city, sport = "Football", team = "Arsenal"} = {city: "London"}
console.log(city, sport, team)//London Football Arsenal


// Combiner à la fois : donner un nom différent et donner des valeurs par défaut si la propriété n'existe pas, ça fonctionne.
const {firstName: name = "John"} = {height: 180}
console.log(name)//John

//Si la propriété existe sa valeur est bien retourné
const {lastName: famillyName = "unknow"} = {lastName: "Doe"}
console.log(famillyName)//Doe


// Affecter les props d'un objet attendu en paramètre d'une fonction
// En faisant ce qu'on appelle du destructuring de paramètre à la création d'une fonction
// Cette méthode est notamment utilisé par les frameworks JS
function foo({num1, num2}) {// destructuring de paramètre
  return num1 + num2
}
const numbers = {
  num1: 50,
  num2: 100
}
console.log(foo(numbers))//150


console.log("\n------------- B. Affecter les valeurs d'un tableau -----------")
/* B. Affecter les valeurs d'un tableau en faisant du destructuring. */

const animals = ["cat","dog","mouse","lion"];
const [cat, dog, mouse, lion] = animals
console.log(cat, dog)//cat dog

// valeur par défaut et ignorer des valeurs en mettant quand même la virgule
// puis passer à la valeur suivante ,, ne provoquera pas d'erreur
const fruits = ["strawberry","grapes","banana","apple"];
const [strawberry = "red", grapes = "violet",, apple, orange= "orange"] = fruits
console.log(strawberry, grapes, apple, orange)

// Affecter le reste d'un tableau avec le spread operator ... plus un nom de variable
const [student, ...marks] = ["Adrien", 10,10,12,14,15,17];
console.log(student)//Adrien
console.log(marks)//[10, 10, 12, 14, 15, 17]


