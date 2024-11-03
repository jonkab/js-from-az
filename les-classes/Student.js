console.log("----------- Student.js ----------");
import {moyenne} from "./calculs/moyenne.js";


// Création de la classe Student qui sert de modèle pour toutes les instances créées avec new
class Student {

    // À la racine de la class, on peut créer des champs de propriété publique
    school = "Jules ferry";

    /* Underscore (`_`) au début du nom d'une propriété ou d'une méthode est une convention couramment utilisée pour indiquer que cette propriété ou méthode est destinée à être privée ou protégée.

        Cette convention n'est qu'une indication pour les développeurs et n'est pas appliquée par le langage lui-même.
        Toutes les propriétés et méthodes sont publiques par défaut.

        Pour réellement encapsuler des données et les rendre privées, il est possible d'utiliser des symboles ou des champs privés introduits dans les classes ES6 avec le préfixe #.

        Dans cet exemple :
        #notes = [];

        #notes est réellement privé et ne peut pas être accédé ou modifié directement en dehors de la classe Student.
     */
    _notes = [];

    // La méthode constructor() permet de créer et d'initialiser un objet lorsque la classe est instanciée->(new Student(arg1, arg2))
    constructor(firstname, lastname) {
        //dans le constructeur, on peut également créer des champs de propriété publique
        this.firstname = firstname;
        this.lastname = lastname;
    }

    /*L'opérateur set :
        Set permet de définir la valeur d'une propriété.
        Il permet de lier une propriété d'un objet à une fonction qui sera appelée à chaque tentative de modification de cette propriété.
     */
    set notes (value) {
        if(Array.isArray(value)) {
            this._notes = value;
            // La version réellement privé serait : this.#notes = value;
        }
    }

    /* L'opérateur get :
        Get permet de récupérer la valeur d'une propriété.
        Il permet de lier une propriété d'un objet à une fonction qui sera appelée lorsqu'on accédera à la propriété.
     */
    get canPass () {
        return moyenne(this._notes) >= Student.moyenne;
        // La version réellement privé serait : return moyenne(this.#notes) >= Student.moyenne;
    }

    get userName () {
        return `${this.firstname} ${this.lastname}`;
    }
    /* Le mot-clé static :
        Static permet de définir une propriété ou une méthode statique d'une classe.
        Les propriétés ou méthode statiques ne sont pas disponible sur les instances d'une classe, mais sont appelées sur la classe elle-même.
     */
    static moyenne = 10;
    // moyenne représente une valeur globale par défaut que l'on peut définir pour tous les objets Student sans que cette propriété ne soit modifiable directement sur chaque instance.

    static hello () {
        console.log('Bonjour !');
    }
}

const jon = new Student('Jon','Doe');
const jane = new Student('Jane','Doe');


jon.notes = [20];
jane.notes = [9];

jon.school = "Henri IV";

console.log(jon)

console.log(jon.canPass, jane.canPass, jon.userName, jane.userName);

Student.hello();

console.log(Student.moyenne);