/* 
    1. Qu'est-ce qu'une RegEx ou RegExp ? Ce sont juste des mots qui veulent dire la même chose.
    Libre à chacun de choisir l'appellation qu'il préfère.

    Les expressions régulières (ou rationnelles) représentent des modèles de chaîne de caractères.
    Elles vont permettre de détecter la présence d'un certain modèle dans une chaîne, ou pas.

    On peut s'en servir pour valider un email, un numéro de téléphone, une adresse,
    ou simplement pour retrouver un mot dans un texte.

    On peut construire une RegExp de deux façons différentes.

    I. const regex = new RegExp("/abc/")

    II. const regex = /abc/  
    
    La seconde est plus populaire, mais ne peut utiliser d'expressions JS, donc à voir au cas par cas.
*/
console.log("----- 1. Qu'est-ce qu'une RegEx ou RegExp ? -----");
const regex = /abc/;
console.log(regex.test("abc"));// Retourne -> true
console.log(regex.test("bac"));// Retourne -> false
console.log(typeof regex);// Retourne -> object
console.log(regex);// Retourne -> /abc/
console.dir(regex);// Retourne -> structure compléte de l'objet à savoir : Méthodes et [[Prototype]]: Object
//console.dir(document.body);// Retourne -> structure compléte de l'objet à savoir : Méthodes et [[Prototype]]: HTMLBodyElement


console.log("\n\n----- 2. Les options (drapeaux) -----");
/*    
    2. Les options (drapeaux ou marqueur).

    On peut rajouter des lettres à la fin d'une RegExp afin de lui rajouter des
    fonctionnalités supplémentaires.

    Par exemple avec la méthode match() cette fois directement sur la chaîne de caractère (objet string),
    à l'inverse des méthodes test() ou exec() par exemple qui sont sur l'objet regExp.

    On va pouvoir utiliser les lettres "g" ou "i" en guise d'option intégré à la regExp.

    Ces options vont nous permettre :

    g =>
    La lettre "g" signifie qu'on teste la chaîne globalement, et qu'on ne s'arrête
    pas après la première correspondance.
    Cela ne va pas avoir d'effet sur certaines méthodes, mais la méthode match()
    renverra par exemple l'ensemble des correspondances.
*/
console.log("----- La lettre `g` -----");
console.log("aaa".match(/a/));// Sans la lettre "g" match() retourne ->
// [ 'a', index: 0, input: 'aaa', groups: undefined ]

console.log("aaa".match(/a/g));// Avec la lettre "g" match() retourne -> [ 'a', 'a', 'a' ]
// Ce qui est très pratique si l'on veut avoir/savoir qu'elles sont toutes les occurrences concernées
// par le motif de regExp définit.
// match() nous retourne un tableau les contenants toutes et dons permet de les compter.

console.log("\n\n----- La lettre `i` -----");
/*  i =>
    La lettre "i" permet de rendre la recherche non sensible à la casse.
    À savoir que par défaut, les expressions régulières en JavaScript sont sensibles à la casse,
    ce qui signifie qu'elles font une distinction entre les lettres majuscules et minuscules.
    Donc grâce à "i" ça signifie que, peu importe qu'une lettre soit en majuscule ou en minuscule,
    le résultat sera true.
    Et à l'inverse, si l'on ne met pas "i" alors c'est sensible à la casse et le résultat sera false.

    Exemple de la syntaxe pour la lettre "i" :
    /a/i.test("a") // true
    /a/i.test("A") // true

    En résumé, la sensibilité à la casse détermine si une expression régulière traite différemment
    les majuscules et les minuscules.
    Le marqueur "i" rend l'expression régulière insensible à la casse, lui permettant de chercher
    des correspondances sans considérer la différence entre majuscules et minuscules.

    Il existe encore bien d'autres options. Se référer à la doc.
*/
console.log(/a/i.test("A"));// Rend insensible à la casse et donc retourne => true
console.log(/a/i.test("a"));// Rend insensible à la casse et donc retourne => true
console.log(/a/.test("A"));// Par défaut sensible à la casse et donc retourne => false
console.log(/a/.test("a"));// Par défaut sensible à la casse et donc retourne => true

console.log("\n\n----- 3. Classe de caractères -----");
/* 
    3. "Classe de caractères" : N'importe quel caractère de la liste entre les crochets. 

    /[a7y]/ correspond à la première occurrence de a, ou 7, ou y.
    /[e-l]/ un caractère entre e et l compris.
    /[2-4]/ un caractère entre 2 et 4 compris.
*/
console.log("----- Test Classe de caractères [a-c] -----");
//En testant le motif [a-c], pour que ça retourne "true",
// il faut qu'au minimum une lettre allant de "a" à "c" soit en minuscule.
// À l'inverse si elles sont toutes en Majuscule alors ça retourne "false"
const classRegexTestac = /[a-c]/;
console.log("abc", classRegexTestac.test("abc"));//[a-c] Retourne -> true
console.log("aBc", classRegexTestac.test("aBc"));//[a-c] Retourne -> true
console.log("ABC", classRegexTestac.test("ABC"));//[a-c] Retourne -> false
console.log("d", classRegexTestac.test("d"));//[a-c] Retourne -> false
console.log("3", classRegexTestac.test("3"));//[a-c] Retourne -> false

console.log("\n----- Test Classe de caractères personnalisé [^a-cA-C]  -----");
console.log(`Valeur type -> abc | classe [^a-cA-C] retourne :`, /[^a-cA-C]/.test("abc"));//Retourne -> false
console.log(`Valeur type -> abc | classe [a-cA-C] retourne :`, /[a-cA-C]/.test("abc"));//Retourne -> true
console.log(`Valeur type -> aBc | classe [^a-cA-C] retourne :`, /[^a-cA-C]/.test("aBc"));//Retourne -> false
console.log(`Valeur type -> def | classe [^a-cA-C] retourne :`, /[^a-cA-C]/.test("def"));//Retourne -> true
console.log(`Valeur type -> dEf | classe [^a-cA-C] retourne :`, /[^a-cA-C]/.test("dEf"));//Retourne -> true
console.log(`Valeur type -> aBcdEf | classe [^a-cA-C] retourne :`, /[^a-cA-C]/.test("aBcdEf"));//Retourne -> true


console.log("\n----- Test des alternatives syntaxiques des Classes -----");
/*
    Il existe des alternatives syntaxiques à ces classes qui permettent de créer une RegExp
    rapidement, mais il faut connaître les symboles par cœur.
    
    \w  Correspond à tous les chiffres, les lettres et les underscores, équivalent à [a-zA-Z0-9_]
    \d  Correspond à un chiffre de 0 à 9, équivalent [0-9];
    \s	Correspond à tous les sauts à la ligne.
    .   Le point seul, correspond à tous les caractères sauf un retour à la ligne. ex : /./
    \r  Correspond à un retour à la ligne quand du texte est déjà écrit ou pas (carriage return).
    \n  Correspond à une nouvelle ligne sans carriage return, comme quand on enchaîne plusieurs sauts de ligne sans rien écrire.
    \t  Correspond à un tab

    \W  Correspond à tout ce qui **n'est pas** une lettre, un chiffre ou un underscore, équivalent à [^a-zA-Z0-9_], le ^ (seulement dans une classe) signifant "tout ce qui n'est pas ce qui suit".
    \D  Tout ce qui n'est pas un digit, équivalent à [^0-9];
    \S	Correspond à tout ce qui n'est pas un retour à la ligne(tous les caractères).
*/
console.log("----- Test alternative \"/\\w/\"([a-zA-Z0-9_]) -----");
let stringTest = "Test_des-10ᵉ de caractère !\\t\\s\\n\\r \t\s\n\r";

console.log(`Valeur type -> ${stringTest} retourne :`, /\w/.test(stringTest));//Retourne -> true
console.log(`Valeur type -> \\s retourne :`, /\w/.test("\s"));//Retourne -> true
console.log(`Valeur type -> \\n retourne :`, /\w/.test("\n"));//Retourne -> false
console.log(`Valeur type -> \\n\\s retourne :`, /\w/.test("\n\s"));//Retourne -> true
console.log(`Valeur type -> \\t retourne :`, /\w/.test("\t"));//Retourne -> false
console.log(`Valeur type -> \\r retourne :`, /\w/.test("\r"));//Retourne -> false

console.log("\n----- Test alternative \"/\\W/\"([^a-zA-Z0-9_]) -----");
console.log(`Valeur type -> ${stringTest} retourne :`, /\W/.test(stringTest));//Retourne -> true
console.log(`Valeur type -> \\s retourne :`, /\W/.test("\s"));//Retourne -> false
console.log(`Valeur type -> \\n retourne :`, /\W/.test("\n"));//Retourne -> true
console.log(`Valeur type -> \\n\\s retourne :`, /\W/.test("\n\s"));//Retourne -> true

console.log("\n----- Test alternative \"/\\d/\"([0-9]) -----");
console.log(`Valeur type -> 4 retourne :`, /\d/.test("4"));//Retourne -> true
console.log(`Valeur type -> 4\\t retourne :`, /\d/.test("4\t"));//Retourne -> true
console.log(`Valeur type -> \\t retourne :`, /\d/.test("\t"));//Retourne -> false

console.log("\n----- Test alternative \"/\\D/\"([^0-9]) -----");
console.log(`Valeur type -> aB retourne :`, /\D/.test("aB"));//Retourne -> true
console.log(`Valeur type -> a9 retourne :`, /\D/.test("a9"));//Retourne -> true
console.log(`Valeur type -> 007 retourne :`, /\D/.test("007"));//Retourne -> false

console.log("\n----- Test alternative \"/\\s/\" tout type de retour à la ligne -----");
console.log(`Valeur type -> aB retourne :`, /\s/.test("\s"));//Retourne -> false
console.log(`Valeur type -> \\r retourne :`, /\s/.test("\r"));//Retourne -> true
console.log(`Valeur type -> \\n retourne :`, /\s/.test("\n"));//Retourne -> true
console.log(`Valeur type -> a\\nb retourne :`, /\s/.test("a\nb"));//Retourne -> true
console.log(`Valeur type -> a\\rb retourne :`, /\s/.test("a\rb"));//Retourne -> true

console.log("\n----- Test alternative \"/./\" tous les caractères sauf un retour à la ligne -----");
console.log(`Valeur type -> a retourne :`, /./.test("a"));//Retourne -> true
console.log(`Valeur type -> ! retourne :`, /./.test("!"));//Retourne -> true
console.log(`Valeur type -> a\\r retourne :`, /./.test("a\r"));//Retourne -> true
console.log(`Valeur type -> \\r retourne :`, /./.test("\r"));//Retourne -> false
console.log(`Valeur type -> \\n retourne :`, /./.test("\n"));//Retourne -> false

console.log("\n----- Test alternative \"/\\r/\" retour à la ligne -----");
console.log(`Valeur type -> \\r retourne :`, /\r/.test("\r"));//Retourne -> true
console.log(`Valeur type -> \\n retourne :`, /\r/.test("\n"));//Retourne -> false
console.log(`Valeur type -> \\s retourne :`, /\r/.test("\s"));//Retourne -> false

console.log("\n----- Test alternative \"/\\n/\" nouvelle ligne -----");
console.log(`Valeur type -> \\n retourne :`, /\n/.test("\n"));//Retourne -> true
console.log(`Valeur type -> \\r retourne :`, /\n/.test("\r"));//Retourne -> false
console.log(`Valeur type -> \\s retourne :`, /\n/.test("\s"));//Retourne -> false


console.log("\n\n----- 4. Les caractères échappés -----");
/* 
    4. Les caractères échappés.

    Que faire quand on recherche un caractère qui est déjà utilisé dans les symboles des RegExp ?
    Il faut l'échapper, c'est-à-dire mettre un anti-slash devant.

    \. pour rechercher un point
    \\ pour rechercher un antislash (se dit aussi backslash)
    Ou encore : \? \$ \+ \*
*/

const escapeRegExpAntiSlash = /\\/;
console.log(`escapeRegExpAntiSlash pour 777\\998 retourne :`, escapeRegExpAntiSlash.test("777\\998"));
//Retourne -> true

const escapeRegExpSlash = /\//;
console.log(`escapeRegExpSlash pour 777/998 retourne :`, escapeRegExpSlash.test("777/998"));
//Retourne -> true

const escapeRegExpPoint = /\./;
console.log(`escapeRegExpPoint pour 777.998 retourne :`, escapeRegExpPoint.test("777.998"));
//Retourne -> true

const escapeRegExpPointInterrogation = /\?/;
console.log(`escapeRegExpPointInterrogation pour Quoi ? retourne :`, escapeRegExpPointInterrogation.test("Quoi ?"));
//Retourne -> true
console.log(`escapeRegExpPointInterrogation pour Quoi ! retourne :`, escapeRegExpPointInterrogation.test("Quoi !"));
//Retourne -> false