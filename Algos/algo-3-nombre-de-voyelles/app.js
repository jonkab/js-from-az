function getVowelsNumber(txt) {
    const vowelsNumber = txt.match(/[aeiouy]/gi);
    const ERROR_MSG = "Il n'y a aucune voyelle !";

    return vowelsNumber ?  vowelsNumber.length :  ERROR_MSG;
}

const getVowelsNumberOneLiner = txt => txt.match(/[aeiouy]/gi)  ?  txt.match(/[aeiouy]/gi).length :  "Il n'y aucune voyelle !";

/*
    📚ÉNONCÉ
    Créez une fonction qui retourne le nombre de voyelles contenu dans une chaîne de caractères.

    Voyelles : a, e, i, o, u, y
*/


/* 🧪Tests à passer */

console.log(getVowelsNumber("jdhqgdqsghdakzejamazemlqksd"));               // 5
console.log(getVowelsNumber("Lorem ipsum dolor sit amet consectetur."));   // 13
console.log(getVowelsNumberOneLiner("L’imagination gouverne le monde."));          // 13
console.log(getVowelsNumberOneLiner("zzzZZZzz"));                                  // 0