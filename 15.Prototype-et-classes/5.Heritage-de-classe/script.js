/* 
    Les classes peuvent hériter d'une autre classe, c'est-à-dire d'un autre prototype.

    C'est le même fonctionnement que l'héritage de prototype des fonctions constructeur que nous avons vu précédemment, et c'est la même chose qui se passe sous le capot.
*/

// Création de la classe "Human"
class Human {
    constructor(arm, leg) {
        this.arm = arm;
        this.leg = leg;
    }

    walk() {
        console.log("Walk");
    }
    think() {
        console.log("Think");
    }
}

const human1 = new Human(2, 2);
console.log(human1);/* Retourne ->
Human {
    arm: 2
    leg: 2
    [[Prototype]]: Object
        constructor: class Human
        think: ƒ think()
        walk: ƒ walk()
        [[Prototype]]: Object
}


/*
    Création de la classe "Italian" + héritage de la classe "Italian"
    Avec le mot clé extends puis super() en lui passant les paramètres à hériter de la classe Human
*/
class Italian extends Human {
    // Passer les propriétés à hériter au constructeur
    constructor(arm, leg, name) {//en respecter bien l'ordre originel
        // Puis héritage des propriétés de Human grâce à super()
        super(arm, leg);// Toujours positionner l'héritage avant l'usage de this

        // Puis créer toutes les propriétés propres à la class Italian à la suite
        this.name = name;
    }

    cookingPasta() {
        console.log("🍝");
    };
    cookingPizza() {
        console.log("🍕");
    }
}

const Italian1 = new Italian(2, 2, "Tony");
console.log(Italian1);/* Retourne ->
Italian {
    arm: 2
    leg: 2
    name: "Tony"
    [[Prototype]]: Human
        constructor: class Italian
        cookingPasta: ƒ cookingPasta()
        cookingPizza: ƒ cookingPizza()
        [[Prototype]]: Object
            constructor: class Human
            think: ƒ think()
            walk: ƒ walk()
            [[Prototype]]: Object
}
*/


