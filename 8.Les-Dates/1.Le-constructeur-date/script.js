console.log("----- Introduction de l'objet Date() -----")
/*
    En JavaScript, on peut construire un objet date à l'aide du constructeur Date().
*/
    const date = new Date()
    //On peut voir que ça créer bien un objet :
    console.log(typeof date)//Object
    //Et ça renvoi la date compléte :
    console.log(date)// retourne ->
    // Fri Jan 12 2024 09:35:22 GMT+0100 (heure normale d’Europe centrale)

    //Grâce à la méthode .dir() de l'objet "console", je peux afficher le Prototype
    //de l'objet que je lui passe en argument :
    console.dir(date)// Retourne la date complète ainsi que son [[Prototype]]:Object

console.log("\n----- 1. Date.prototype.getDate(), .getDay(), .getHours() etc ... -----")
/* 
    1. Date.prototype.getDate/Day/FullYear/Hours/Millisecondes/Minutes/Month/Seconds()

    Retourne le jour, l'heure, l'année, les minutes, etc ... en fonction de la méthode utilisée.
*/
    console.log(".getDate() ->", date.getDate())// retourne le jour du mois
    console.log(".getDay() ->", date.getDay())// renvoie le jour de la semaine
    console.log(".getFullYear() ->", date.getFullYear())// renvoie l'année
    console.log(".getHours() ->", date.getHours())// renvoie l'heure
    console.log(".getMilliseconds() ->", date.getMilliseconds())// renvoie les millièmes de secondes
    console.log(".getMinutes() ->", date.getMinutes())// renvoie les minutes
    console.log(".getMonth() ->", date.getMonth())// retourne le mois, à savoir le 1er mois de l'année commence à 0
    console.log(".getSeconds() ->", date.getSeconds())// renvoie les secondes


console.log("\n\n----- 2. Date.now() -----")
/* 
    2. Date.now() 

    A partir de l'objet "Date" je peux utiliser des méthodes comme .now() et
    Date.now() retourne le nombre de millisecondes écoulées depuis le 1er Janvier 1970.
    C'est une date arbitraire qui a été choisie pour faciliter les calculs.

    On constate que "Date" est un objet intégré en JavaScript qui contient son propre
    ensemble de méthodes et propriétés statiques. Ces méthodes et propriétés peuvent être
    utilisées sans créer une instance de Date.
*/

    console.log(Date.now())//1705051924753
    console.dir(Date)//affiche toutes les propriétés et méthodes (length, name, .now() etc ...)

console.log("\n\n----- 3. Modifier une date avec Date.prototype.setHours/Minutes/Secondes() etc ...  -----")
/* 
    3. Modifier une date avec Date.prototype.setHours/Minutes/Secondes() etc ... 
*/
    date.setHours(6)
    date.setMinutes(52)
    date.setFullYear(1999)
    console.log(date)// Tue Jan 12 1999 06:52:07 GMT+0100 (heure normale d’Europe centrale)

console.log("\n\n----- calculs avec les objets Date et valeur des millisecondes avec Date.prototype.valueOf() -----")
/*
    4. On peut directement faire des calculs avec les objets Date.
    La valeur en millisecondes de ces dates sera utilisée.

    On peut également accéder à cette valeur avec Date.prototype.valueOf().
*/
console.log(new Date(1988, 5, 13))// Mon Jun 13 1988 00:00:00 GMT+0200 (heure d’été d’Europe centrale)
console.log(new Date(1988, 5, 13).valueOf())// 582156000000
console.log(new Date(1995, 2, 24).valueOf())// 795999600000

// Je peux faire une opération puisqu'à chaque fois les dates sont renvoyées en millisecondes
console.log(new Date(1995, 2, 24) - new Date(1988, 5, 13))
// Equivaut à 795999600000 - 582156000000 = 213843600000
