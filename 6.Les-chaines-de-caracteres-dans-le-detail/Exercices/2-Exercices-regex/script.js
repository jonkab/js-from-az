/* 
    1. Retournez true dans la console si la chaîne "bouquet" est présente
    au moins une fois.
    Vous utiliserez la méthode .test() pour parvenir à vos fins.
*/

    const str = "Poésie et musique sont les suprêmes, délices des choses. Elles sont le bouquet de toutes les connaissances."
    console.log(/bouquet/.test(str));// true


/* 
    2. Utilisez la méthode .match() pour retourner toutes les occurences
    de la lettre "a" de la phrase suivante dans la console.
*/

    const str2 = "La vita è bella amici miei";
    console.log(str2.match(/a/g));// [ 'a', 'a', 'a', 'a' ]

/* 
    3. Retournez true dans la console si le caractère "5" est enchaîné
    entre deux à quatre fois dans une chaîne.
    Testez-les toutes une par une.
*/

    const str3 = "0542485599"
    //console.log(str3.match(/5{2,4}/g))
    console.log(/5{2,4}/.test(str3))// true

    const str4 = "0555585599"
    console.log(/5{2,4}/.test(str4))// true

    const str5 = "0505050505"
    console.log(/5{2,4}/.test(str5))// false


/* 
    4.

    A. Retournez, dans la console, toutes les occurrences des caractères
    représentant des chiffres dans la chaîne suivante.

    B. Dans un second temps, retournez la chaîne "nettoyée" de tous les
    chiffres qu'elle contient.
*/

    const str6 = "Une4 bonne bala1de dan1245s les bois n478ous permet de q548uitter l'atmosphère anxiogène de la ville."
    console.log(str6.match(/[0-9]/g));
    console.log(str6.match(/\d/g));
/*
    [
      '4', '1', '1', '2',
      '4', '5', '4', '7',
      '8', '5', '4', '8'
    ]
*/

    console.log(str6.replace(/\d/g,""));


/* 
   4. Retournez true dans la console si la chaîne suivante contient
   la lettre "w" entre 0 et 1 fois suivie des caractères "za" deux fois.
*/

    const str7 = "zzz wzaza zzz"
console.log(/w?(za){2}/.test(str7))
//console.log(str7.match(/w+(za)*/))



/* 
    5. Retournez le nombre d'occurences de "Sara" ou "Paul" ou "Pedro"
    de la chaîne suivante dans la console.
*/

    const str8 = "Tom Joe Paul Paul Paul Lucie Pedro Gabriella Marie Bastien Sara";

    console.log(str8.match(/Sara|Paul|Pedro/g))