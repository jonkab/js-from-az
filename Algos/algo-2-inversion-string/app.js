/*
    📚ÉNONCÉ :
    Créez un algorithme qui retourne la chaîne de caractères passée en argument à l'envers.
*/

// Version fonction classique
function reverse(str) {
    return str.split("").reverse().join("");
}

// Version fonction fléchée (one liner)
const oneLinerReverse = str => str.split("").reverse().join("");


function reverse2(str4) {
    return Array.from(str4).reverse().join("");
}

const oneLinerReverse2 = str => Array.from(str).reverse().join("");

/* Tests à passer 🧪 */
console.log(`reverse -> ${reverse("Bonjour à tous")}`);// suot à ruojnoB


console.log(`oneLinerReverse -> ${oneLinerReverse("Bonjour à tous")}`);// suot à ruojnoB

console.log(`reverse2 -> ${reverse2("Toto titi")}`);// itit otoT

console.log(`oneLinerReverse2 -> ${oneLinerReverse2("Toto titi")}`);// itit otoT
