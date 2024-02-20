/* 
    Un système de classe a été rajouté en 2015 en JavaScript.

    Le but est d'utiliser une syntaxe plus simple et compréhensible que les fonctions constructeur, tout en faisant la même chose sous le capot.

    Le terme "sucre syntaxique" est beaucoup utilisé pour définir ce genre d'ajout.

    Mot clé class:
    La déclaration class crée une nouvelle classe avec le nom fourni en utilisant l'héritage à base de prototypes pour émuler le fonctionnement de classe.

    Méthode constructor :
    La méthode constructor est une méthode qui est utilisée pour créer et initialiser un objet lorsqu'on utilise le mot clé class.
*/
class Planet{
    constructor(name, radius, color) {
        this.name = name;
        this.radius = radius;
        this.color = color;
    }
    spin(){
        console.log("spinning");
    }
}
const mars = new Planet("Mars", 3400, "red");
console.log(mars);/* Retourne ->
Planet {
name: 'Mars',
radius: 3400,
color: 'red'
[[Prototype]]: Object
    constructor: class Planet
    spin: ƒ spin()
}
*/

mars.spin();// spinning