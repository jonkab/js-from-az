/* 
    Les objets contiennent des méthodes pratiques venant de leur
    prototype(objet attaché à tous les objets sauf exception).
*/
const rocket = {
  model: "Falcon Heavy",
  price: 97,
  weight: 549,
  height: 70,
  diameter: 3.7,
  fuel: "Kerosene" 
}
//Dans la console, on voit bien l'objet natif JS rattaché "prototype"
console.log(rocket);//Retourne l'objet "rocket" et son objet "prototype"


/* 
    1. Méthode hasOwnProperty()

    Retourne un booléen indiquant la présence d'une propriété précise passé en argument.
*/
console.log(rocket.hasOwnProperty("model"));//Retourne → true
console.log(rocket.hasOwnProperty("cats"));//Retourne → false


/* 
    2. Méthode Object.keys()

    Retourne un tableau contenant les propriétés d'un objet sous forme de
    chaînes de caractères.
*/
console.log(Object.keys(rocket));



/* 
    3. Object.values()

    Retourne un tableau contenant les valeurs d'un objet.

*/
console.log(Object.values(rocket));


/* 
    4. Object.entries()

    Retourne un tableau contenant les propriétés-valeurs d'un objet sous
    forme d'un tableau contenant des sous-tableaux.
*/
console.log(Object.entries(rocket));


/* 
    5. Object.freeze()

    Cette méthode permet de "geler" un objet, rendant toute modification
    impossible.

    Attention, une fois gelé, on ne peut plus le dégeler.

*/
Object.freeze(rocket);
rocket.color = "gray";//Ici, j'essaie de le modifier en lui ajoutant la propriété color
console.log(rocket);//Mais impossible car .freeze() juste avant l'a gelé.


/*
* Voici un exemple qui montre comment créer une fonction qui sert de constructeur d'objet
* une fois combiné avec le mot clé new
* */
function Test (name, value) {
  this.name = name;
  this.value = value;
}

const obj1 = new Test("test", 99);
console.log(obj1);//Retourne -> Test {name: 'test', value: 99}

//Et ceci équivaut à ce que fait de manière native la fonction Object()
//Exemple
const obj2 = new Object({name: "test", value: 99});
console.log(obj2);//Retourne -> {name: 'test', value: 99}
// Sans le mot Test avant