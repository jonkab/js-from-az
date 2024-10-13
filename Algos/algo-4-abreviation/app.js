function abreviation(str) {
    let arrNames = str.split(' ');
    const firstName = arrNames[0];
    arrNames = arrNames[arrNames.length - 1];
    arrNames = arrNames[0];
    return firstName + ' ' + arrNames + '.';
}


function abreviation2(str) {
    const splitName = str.split(' ');
    return `${splitName[0]} ${splitName[1].charAt(0)}.`;
}


/* 📚ÉNONCÉ
 Créez un algorithme qui retourne l'abréviation d'un nom et prénom. */


/* 🧪Tests à passer */

console.log(abreviation("John Doe"));           // John D.
console.log(abreviation("Romy Schneider"));     // Romy S.
console.log(abreviation("Alfred Hitchcock"));   // Alfred H.

console.log(`---------abreviation2------`)
console.log(abreviation2("John Doe"));           // John D.
console.log(abreviation2("Romy Schneider"));     // Romy S.
console.log(abreviation2("Alfred Hitchcock"));   // Alfred H.