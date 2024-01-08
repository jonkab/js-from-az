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

/* 
    3. "Classe de caractères" : N'importe quel caractère de la liste entre les crochets. 

    /[a7y]/ correspond à la première occurrence de a, ou 7, ou y.
    /[e-l]/ un caractère entre e et l compris.
    /[2-4]/ un caractère entre 2 et 4 compris.


    Il existe des alternatives syntaxiques à ces classes qui permettent de créer une RegExp
    rapidement, mais il faut connaître les symboles par cœur.
    
    \w  Correspond à tous les chiffres, les lettres et les underscores, équivalent à [a-zA-Z0-9_]
    \d  Correspond à un chiffre de 0 à 9, équivalent [0-9];
    \s	Correspond à tous les sauts à la ligne.
    .   Le point seul, correspond à tous les caractères sauf un retour à la ligne. ex : /./
    \r  Correspond à un retour à la ligne quand du texte est déjà écrit (carriage return).
    \n  Correspond à une nouvelle ligne sans carriage return, comme quand on enchaîne plusieurs sauts de ligne sans rien écrire.
    \t  Correspond à un tab

    \W  Correspond à tout ce qui **n'est pas** une lettre, un chiffre ou un underscore, équivalent à [^a-zA-Z0-9_], le ^ (seulement dans une classe) signifant "tout ce qui n'est pas ce qui suit".
    \D  Tout ce qui n'est pas un digit, équivalent à [^0-9];
    \S	Correspond à tout ce qui n'est pas un retour à la ligne(tous les caractères).
*/




/* 
    4. Les caractères échappés.

    Que faire quand on recherche un caractère qui est déjà utilisé dans les symboles des RegExp ? Il faut l'échapper, c'est à dire mettre un anti-slash devant.

    \.  pour rechercher un point
    \\  pour rechercher un antislash
    Ou encore : \? \$ \+ \*
*/


