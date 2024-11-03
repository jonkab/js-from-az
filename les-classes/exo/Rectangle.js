console.log('--------- Rectangle.js ----------');
/*
    Formes géométriques :

    Créer la classe Rectangle :
     - doit être initialisé avec une largeur et une hauteur,
     - avoir un geteur (get) perimeter pour avoir le périmetre du réctangle (2 x largeur + 2 x hauteur),
     - avoir une méthode isValid pour savoir si la forme géométrique est valide (si dimensions sont négatives=false)
 */

class Rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get perimeter() {
        if (this.isValid) {
            return (2*this.width + 2*this.height);
        } else {
            return 'Erreur';
        }
    }

    get isValid() {
        /*
        if (this.width < 0 || this.height < 0) {
            return false;
        } else {
            return true;
        }

         */
        return !(this.width < 0 || this.height < 0);
    }

}

const r = new  Rectangle(10, 20);
console.log(r.perimeter);
console.log(r.isValid);

const r2 = new  Rectangle(-10, 20);
console.log(r2.perimeter);
console.log(r2.isValid);

console.log('--------- Square ----------');
/*
    Créer la classe Square :
    - doit hériter de Rectangle (extend),
    - avoir une méthode isBiggerThan dispo pour les 2 classes qui permet de dire si le périmetre du carré est plus grand que celui du rectangle
 */

class Square extends Rectangle {
    constructor(width, height) {
        super(width, height);
    }

    // To do
}