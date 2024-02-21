/* 
    Il existe plusieurs types de champ qu'on peut créer avec les classes.

    Un champ peut être une propriété, une méthode, un getter, un setter, etc...

    1. Les champs statiques :
    Ils sont stockés dans la fonction constructeur de la classe, ce sont des méthodes/props utilitaires.
    Ils ne sont pas disponibles dans les objets créés à partir de cette classe !

    2. Les propriétés publics :
    Elles sont ajoutées en tant que propriété à chaque instance créée à partir de la classe en question.
    On peut les créer de deux façons différentes.

    3. Les champs privés :
    Ils sont seulement utilisables dans les méthodes d'une instance.
*/
class Course {
    // Champ statique
    static author = "";

    // Champ privé
    #privatePrice = 55;

    // Champ public
    school = "École ....";

    constructor(name, price) {

        // Les champs publics référencés via les paramètres
        this.name = name;
        this.price = price;

        // Champ public non lié à un paramètre
        this.ceo = "John";

        // Méthode public
        this.foo = function (){
            //Je peux accéder à un champ privé dans une méthode non privée du constructeur
            return this.#privatePrice;
        }
    }

    // Méthode privé
    #test() {
        console.log("Méthode privé");
    }
    getPrivate() {
        //Je peux accéder à une méthode privée dans une méthode non privée
        this.#test();

        //Je peux accéder à un champ privé dans une méthode non privée aussi
        return this.#privatePrice;
    }
}

//console.dir(Course);
const JSCourse = new Course("JS AZ", 40);

//console.log(JSCourse.#privatePrice);// Renvoi une erreur →
/*
    EN : Uncaught SyntaxError: Private field '#privatePrice' must be declared in an enclosing class.
    FR : Erreur de syntaxe non interceptée : le champ privé '#privatePrice' doit être déclaré dans une classe englobante.
*/

console.log(JSCourse);/* Retourne ->
Course {
    ceo: "John",
    foo: ƒ (),
    name: "JS AZ",
    price: 40,
    school: "École ....",
    #privatePrice: 55,
    [[Prototype]]: Object,
    [[PrivateMethods]]: PrivateMethods[1]
        0: #test() { console.log("Méthode privé"); },
            name: "#test",
            value: ƒ #test()
}
*/

console.log(JSCourse.getPrivate());// 55 | Méthode privé

console.log(JSCourse.foo());// 55