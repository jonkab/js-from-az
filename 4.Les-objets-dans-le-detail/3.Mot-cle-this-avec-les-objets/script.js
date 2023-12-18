/* 
    1. Le mot-clé this avec les objets.

    Le mot-clé this représente une réfèrence à quelque chose.
    Néanmoins, cette référence est différente suivant les endroits où on l'utilise.
    
    Cela peut être une référence à l'objet appelant quand on est dans une fonction classique,
    ou alors une référence au contexte englobant quand on est dans une fonction fléchée.
    
    Il existe d'autres cas de figure dont nous parlerons plus tard.
*/
//Création d'une maison aux USA
const house = {
    room: 5,//Nombre de pièces
    area: 200,//Surface en unité de mesure "pied" à l'américaine (le Square foot)
    priceWithoutTaxe: 850000,//Montant du prix de la maison hors taxe
    district: 7,//Numéro du quartier où est la maison

    //Une fonction pour avoir le montant de la maison taxe incluse
    getFullPrice(){//Création d'une fonction avec la syntaxe "classique", ce qui fait que
        return this.priceWithoutTaxe * 1.2;//this est une référence à l'objet appelant "house"
        //donc permettant d'accéder à la propriété "priceWithoutTaxe" et sa valeur puis de réaliser le calcul
    },

    //Une fonction pour convertir le pied au carré en mettre carré :
    // - Square foot : SF
    // - Square meters = SM
    convertSFtoSM: () => {//Création d'une fonction avec la syntaxe "fléchée", ce qui fait que
        console.log(this);//this est une référence au contexte englobant qui est l'objet "window"
        return this.area * 0.92;//donc ne permet pas d'accéder à la propriété "area" et sa valeur
        //pour faire le calcul, mais retourne à la place "NaN"
    }
}

console.log(house.getFullPrice());//Retourne le résultat "1020000" pour le montant taxe incluse
console.log(house.convertSFtoSM());//Retourne NaN et non le résultat de la conversion


//Exemple en créant des fonctions directement dans le contexte global "window"
//Peu importe qu'elles soient avec la syntaxe "classique" ou "fléchée"
var fonctionFlecheeDirectementDansLeContexteGlobal = () => {
    return this;//N'étant pas wrappé dans un objet ça retourne également l'objet "window"
}
console.log(fonctionFlecheeDirectementDansLeContexteGlobal());

var fonctionClassiqueDirectementDansLeContexteGlobal = function () {
    return this;//N'étant pas wrappé dans un objet ça retourne également l'objet "window"
}
console.log(fonctionClassiqueDirectementDansLeContexteGlobal());

//le mot clef "var" ici est volontairement utilisé pour voir afficher directement les fonctions
//dans la console. Mais avec "let" et "const" on accède également à l'objet "window"