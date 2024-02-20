/* 
  Par défaut, tous les objets héritent du prototype du constructeur Object.

  C'est-à-dire que la chaîne de prototypes se terminera toujours par le prototype Object.

  Mais on peut rajouter autant de maillons qu'on veut à cette chaîne.
  
  Le but de cette approche est de faire hériter plusieurs ensembles de méthodes et de propriétés pratiques.

  Par exemple, lorsqu'on construit un tableau, on hérite à la fois du prototype du constructeur Array, mais aussi du constructeur Object.

*/
const arr = ["a", "b", "c"];
console.log(arr)// On peut voir dans la console qu'on a accès au prototype du constructeur Array,
// mais aussi du constructeur Object


/*
    On peut créer une chaîne de prototypes soi-même.
*/
function Human(arm, leg) {
    this.arm = arm;
    this.leg = leg;
}

const human1 = new Human(2, 2);

// Grâce à la propriété prototype, je peux directement en ajouter
Human.prototype.walk = function () {
    console.log("Walk");
}
Human.prototype.think = function () {
    console.log("Think");
}
console.log(human1);/* Retourne ->
Human { arm: 2, leg: 2
[[Prototype]]: Object
    think: ƒ ()
    walk: ƒ ()
}
*/

// Les fonctions étant aussi des objets, elles ont aussi la propriété prototype
function Italian(name){
    this.name = name;
}
/*
    Grâce à la fonction constructeur Object et sa méthode setPrototypeOf() je peux aussi chainer
    des maillons d'un prototype à un autre prototype de sorte qu'ils soient liés :
*/Object.setPrototypeOf(Italian.prototype, Human.prototype);/*
    Ici, j'ai un prototype Italian dans lequel j'ai chainé le maillon du prototype Human car
    les Italiens sont des êtres humains.
*/

Italian.prototype.lang = "Italian";
Italian.prototype.cookingPasta = function () {
    console.log("🍝");
};
Italian.prototype.cookingPizza = function () {
    console.log("🍕");
}



const italian1 = new Italian("Giovanni Madazzo");
console.log(italian1);/* Retourne ->
Italian {
name: 'Giovanni Madazzo'
[[Prototype]]: Human
    cookingPasta: ƒ ()
    cookingPizza: ƒ ()
    lang: "Italian"
    [[Prototype]]: Object
        think: ƒ ()
        walk: ƒ ()
}
*/
