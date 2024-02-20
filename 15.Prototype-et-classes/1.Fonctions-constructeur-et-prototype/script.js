/* 
  Le mot-clé new :
  Les fonctions constructeur permettent de créer des instances d'objets lorsqu'elles sont appelées avec
  le mot-clé new.

  Convention de nommage :
  - La convention de nommage quand on en crée, veut que l'on commence avec une majuscule, aussi bien pour
  les fonctions constructeur que pour les classes(qui seront vu dans un prochain chapitre dédié).

  - Cette convention aide à distinguer visuellement les fonctions constructeur et les classes des fonctions
  ordinaires, rendant le code plus lisible et plus facile à comprendre. Si on en met pas ça fonctionne pareil,
  mais on perd en lisibilité et compréhension.

  Le contexte de this :
  Comme vu précédemment, le contexte de this fait référence à l'objet dans lequel il est, et ce sera le cas
  aussi mais vu qu'on est cette fois dans une fonction constructeur de l'objet alors ici this fera référence à
  l'objet qui sera créé.
  Cela permet d'assigner des propriétés et des méthodes à l'objet en cours de création en utilisant this.
*/
function Book(title, author, price){
    this.title = title;
    this.author = author;
    this.price = price;
    this.getTitle = function(){
        return this.title;
    }
}
const book1 = new Book("Le portrait", "Oscar Wilde", 10);
console.log(book1);/* Retourne ->
Book {
  title: 'Le portrait',
  author: 'Oscar Wilde',
  price: 10,
  getTitle: [Function (anonymous)]
}
*/
console.log(book1.getTitle());// Le portrait


/*
  Chaque fonction est un objet, et chaque fonction possède une propriété appelée "prototype".

  N'oubliez pas que chaque fonction est un objet "appelable", et que vous pouvez lire ses propriétés avec console.dir(function test(){})
*/
function Car(brand, price){
    this.brand = brand;
    this.price = price;
    this.doors = 5;
}
const audi = new Car("Audi", 50000);
console.dir(Car);// ƒ Car(brand, price)
console.log(audi);// Car {brand: 'Audi', price: 'Audi', doors: 5}

/*
  Ce prototype est un objet, et il est partagé, par référence, à toutes les instances créées à partir de cette fonction constructeur.

  Une instance est un objet créé à partir d'un constructeur.

  Chaque instance va donc se voir attribuer une propriété spéciale "prototype", qui sera une référence à l'objet "prototype" de la fonction constructeur qui a servi à le construire.
*/
Car.prototype.condition = "new";
Car.prototype.honk = function (){
    console.log("Honk !");
}
console.dir(Car);
/*
  Comment utiliser ce prototype ?  

  Lorsqu'on appelle une propriété située dans le constructeur depuis un objet, le moteur JS va avoir un comportement spécial.

  Il va d'abord la chercher dans l'objet en lui-même, puis il remontera dans le prototype.

  Attention :
  Si dans l'objet en lui-même, il y a une propriété qui porte le même nom qu'une propriété présente dans son
  prototype alors celle du prototype ne sera pas appelé, mais c'est celle dans l'objet lui-même en priorité.

  Ici la méthode honk() est présente uniquement dans le prototype, c'est donc celle du prototype qui est appelé.
*/audi.honk();// Honk !



/*
    Cet héritage de prototype par référence est donc très bon en termes de performance.

    Cela évite de recréer toutes les propriétés du prototype originel dans chaque nouvelle instance.
    
    Une simple propriété spéciale "prototype" est créée et elle référence l'objet originel de la fonction constructeur.
*/ 
const obj = {
    foo: function () {
        console.log(this);
    }
}
obj.foo();// { foo: [Function: foo] }

// Ce qui est génial, c'est que le this de chaque fonction définie dans le prototype d'une fonction constructeur est égal à l'objet qui appelle lesdites fonctions.

// Souvenez-vous qu'un objet qui appelle une méthode devient la valeur de son this (dans le cas d'une fonction classique)
