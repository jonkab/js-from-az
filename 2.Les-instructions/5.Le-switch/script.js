/* 
    1. L'instruction Switch

    Un Switch permet de créer une série de conditions vérifiant une expression.
    C'est une alternative aux [if...else if() ... else if() etc...].
    Elle est cependant moins utilisée en général.

*/

const tShirtSize = "M";

switch (tShirtSize) {
    case "XL":
        console.log("Prix : 19,99€");
        break;
    case "L":
        console.log("Prix : 17,99€");
        break;
    case "M":
        console.log("Prix : 15,99€");
        break;
    case "S":
        console.log("Prix : 13,99€");
        break;
    default:
        console.log("Taille incorrecte.")
}

/* Version en créant une fonction
function tShirtPrice (tShirtSize) {

    switch (tShirtSize) {
        case "XL":
            return "Prix : 19,99€";
            break;
        case "L":
            return "Prix : 17,99€";
            break;
        case "M":
            return "Prix : 15,99€";
            break;
        case "S":
            return "Prix : 13,99€";
            break;
        default:
            return "Taille incorrecte.";
    }
}

console.log(tShirtPrice("M"));
*/