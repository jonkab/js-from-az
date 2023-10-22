/* 
    1. Les objets.

    Les objets sont des containers à propriétés.
    Chaque propriété est associée à une valeur.
    On parle d'une collection de clés-valeurs. (keyed collection)

*/

const store = {//Ici, cette syntaxe permet de créer un objet.
  customers: 278,//Ici, les propriétés peuvent aussi s'écrire entre "customers"
  turnover: 451200,//en chaîne de caractère. Néanmoins, généralement
  employees: 3,//la convention veut que l'on ne l'écrive pas en chaîne de caractère
  rent: 3500//On peut aussi avoir des numéros comme clés à la place des mots si besoin.
}//Si la clé d'une propriété doit être composé de plusieurs mots elle doit être
//écrite en camelCase et non avec des - de séparation car JS ne le permet pas.

/*
  ℹ️ À savoir :
  Créer un objet spécifiquement avec cette syntaxe ce dit
  être un objet littéral. C'est important de comprendre cela car il
  existe différente façon de créer des objets et donc avec d'autres
  appellations.
* */

// On accède aux valeurs grâce à deux notations, la dot et la bracket notation

// dot notation
console.log(store.customers);

// bracket notation
console.log(store["customers"]);//Ici, même si dans l'objet store initial
//la syntaxe de la propriété customers n'est pas écrite en chaîne de caractère
//JS permet d'y accéder avec la bracket notation

// On peut modifier la valeur d'une propriété
store.turnover = 999;
console.log(store.turnover);

// Imbrication d'objets

// C'est assez complexe quand on débute de s'y retrouver, pour l'instant
// ne vous posez pas trop de question, mais appréciez juste la syntaxe,
// et tentez de retrouver des valeurs et d'exécuter des fonctions.

const player = {
  spells: {
    fire() {//Ici, c'est la syntaxe ES6 pour les fonctions (donc sortie en 2015)
      return "fire";
    },
    freeze: function(){//Ici, c'est la syntaxe en ES5
      return "freeze";
    }
  },
  bag: [//Ici, avec des crochets je cré un tableau bag
    {//Ici, je cré les objets du tableau bag
      id: 1,
      name: "bow",
      description: "deals 3 damage"
    },
    {
      id: 2,
      name: "shield",
      description: "increases armor by 5"
    },
    {
      id: 3,
      name: "healing potion",
      description: "heals 10 HP"
    }
  ]//Je suis donc dans un tableau d'objet
}
console.log(player.spells.fire());//Ici, je vois la syntaxe pour accéder
//à une fonction incluse dans un objet et l'exécuter

console.log(player.bag[0].name);//Ici, je vois la syntaxe pour accéder
//à un tableau inclut dans un objet et récupérer une de ses valeurs

//Ici, je vois qu'un objet a des propriétés associées comme .find()
console.log(player.bag.find(element => element.name === "shield"));
//Grâce à des propriétés associées, je peux accéder aux valeurs de l'objet
//selon des comparaisons d'égalité par exemple.