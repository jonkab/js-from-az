/* 
    1. Les Quantificateurs et les alternances.

    Certains symboles nous permettent de gérer le nombre de répétitions d'une expression.

    On va également utiliser la méthode .match(), qui peut retourner un tableau contenant
    toutes les expressions rencontrées dans une chaîne, et pas seulement true ou false.

    Le drapeau "global" g :
    Dans la plupart des exemples illustrés ci-dessous, le g à la fin -> /regex/g
    est le drapeau "global", ce qui signifie que l'expression régulière cherchera toutes
    les correspondances possibles dans la chaîne, et pas uniquement la première.

    Attention, au contraire de .test() la fonction .match() vient du prototype des Strings et
    pas des RegExp, donc "str".match(/regex/).

    Voici la doc MDN qui décrit très bien chaque type de quantifieurs :
    https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers
*/
console.log("----- Exemple d'usage d'une classe de caractère [A-Z] sans drapeau puis avec drapeau g -----");
const text = "Je mange un osso buco à Milan.";

//Sans drapeau g :
console.log("/[A-Z]/ | -> ", text.match(/[A-Z]/));
/* Cherche uniquement la 1ʳᵉ correspondance possible, Retourne ->
[
  'J',
  index: 0,
  input: 'Je mange un osso buco à Milan.',
  groups: undefined
]
* */
//Avec drapeau g :
console.log("/[A-Z]/g | -> ", text.match(/[A-Z]/g));
/* Cherche toutes les correspondances possibles, Retourne ->
[ 'J', 'M' ]
 */

console.log("\n\n----- 1. Les Quantificateurs '{}', les alternances '* + ?' et le ou logique '|' -----");
/* 
    A. Quantificateur de quantité {n}

    S'écrit entre accolade {}.
    Détermine combien de fois l'expression n doit avoir lieu et donc correspondre.
*/
console.log("\n\n----- A. Quantificateur de quantité {n} -----");
console.log("/a{3}/g | -> ", "aaa".match(/a{3}/g));// [ 'aaa' ]
console.log("/a{3}/g | -> ", "aa".match(/a{3}/g));// null
console.log("/ba{3}/g | -> ", "aaa".match(/ba{3}/g));// comprendre b + a * 3 -> null
console.log("/ba{3}/g | -> ", "Au zoo ? Baaah oui !".match(/Ba{3}/g));// comprendre b + a * 3 -> [ 'baaa' ]


/* 
    B. Intervalle {x,y}

    Détermine un intervalle d'occurrences possibles.
    Par exemple ci-dessous, pour un intervalle allant de 2 à 4 inclus
*/
console.log("\n\n----- B. Intervalle {x,y} -----");
console.log("/a{2,4}/g | -> ", "azzaa,aaaaaaaa a a aa aaa".match(/a{2,4}/g));// Retourne ->
// [ 'aa', 'aaaa', 'aaaa', 'aa', 'aaa' ]



/* 
    C. Intervalle infini {x,}

    Détermine un intervalle de x à l'infini.
    Par exemple ci-dessous, pour un intervalle allant de 1 à l'infini.
    On remarque qu'il y a bien une virgule, mais sans rien après.
*/
console.log("\n\n----- C. Intervalle infini {x,} -----");
console.log("/a{1,}/g | -> ", "azzaa,aaaaaaaaaaaaaa".match(/a{1,}/g))// Retourne ->
// [ 'a', 'aa', 'aaaaaaaaaaaaaa' ]


/* 
    D. Le signe + 

    Cette fois sans accolade {}, seul le signe + suffit même si
    entre 1 et plus l'infini et équivalent à {1,}.
*/
console.log("\n\n----- D. Le signe + -----");
console.log("/a+/g | -> ", "azzaa,aaaaaaaaaaaaaa".match(/a+/g))// Retourne ->
// [ 'a', 'aa', 'aaaaaaaaaaaaaa' ]


/* 
    E. Le signe * 

    Zéro ou plus, équivalent à {0,}.
    Attention, les quantifieurs font référence dans ce cas au caractère qui les précède, donc ici : 
    Chaque "ab" suivi d'un où plusieurs 5.
*/
console.log("\n\n----- E. Le signe * -----");
console.log("/ab5*/g | -> ", "ab5-ab555-ab5555".match(/ab5*/g));// Retourne ->
// [ 'ab5', 'ab555', 'ab5555' ]

/* 
    F. Le signe ?  

    Signifie un ou zéro, équivalent à {0,1}.
    Voici un exemple ici pour http avec ou sans s.

    L'expression régulière /https?/g est conçue pour correspondre à la chaîne
    de caractères "http", suivie éventuellement par un "s".
    Le ? dans https? signifie que le caractère "s" est facultatif/optionnel.
    Cela signifie que cette expression régulière correspondra à "http" ou à "https".

*/
console.log("\n\n----- F. Le signe ? -----");
console.log("/https?/g | -> ", "http://udemy.com".match(/https?/g))// Retourne -> ['http']
/* Dans cette chaîne, "http" est présent, et il correspond à l'expression régulière /https?/.
Par conséquent, le résultat est ['http'], car c'est la partie de la chaîne qui correspond.
 */

console.log("/https?/g | -> ", "https://udemy.com".match(/https?/g))// Retourne -> ['https']
/* Examinons ce qui se passe dans le détail :
L'expression régulière /https?/g fonctionne comme suit :
- http : Correspond à la séquence de caractères "http".
- s? : Indique que le caractère "s" est facultatif. Il peut y être zéro ou une fois.

Dans la chaîne "https://udemy.com", l'expression régulière trouve une correspondance avec "https".
Le "http" correspond à la partie obligatoire de l'expression régulière,
et le "s" correspond à la partie facultative s?.
 */

console.log("/https?/g | -> ", "htt://udemy.com".match(/https?/g))// Retourne -> null
/* Dans cette chaîne, il y a "htt", mais pas "http".
L'expression régulière /https?/ cherche spécifiquement "http" suivi éventuellement par un "s".
Puisque "http" n'est pas présent dans cette chaîne (il manque le "p"),
la correspondance échoue, et le résultat est null.
 */

/*
* Pour résumer, bien que "htt" soit présent dans les 3 chaînes, l'expression régulière
* ne cherche pas juste "htt". Elle cherche "http" a minima et avec un "s" facultatif.
* C'est pourquoi elle ne trouve pas de correspondance dans la chaîne "htt://udemy.com".
* */


console.log("\n\n----- G. Le signe | -----");
/* 
    G. Le signe | 

    Le ou logique des regex, permet de créer un modèle comprenant plusieurs correspondances possibles.
*/
console.log("/cat|dog|fish/g | -> ", "rabbit".match(/cat|dog|fish/g));// Retourne ->
// null

console.log("/cat|dog|fish/g | -> ", "rabbit & dog".match(/cat|dog|fish/g));// Retourne ->
// [ 'dog' ]

console.log("/cat|dog|fish/g | -> ", "fish & rabbit & dog & cat".match(/cat|dog|fish/g));// Retourne ->
// [ 'fish', 'dog', 'cat' ]


console.log("\n\n\n----- 2. Les groupes (abc) -----");
/* 
    2. Les groupes (abc).

    Les groupes permettent de rassembler une série de caractères entre parenthèses.
    On peut ainsi combiner les groupes et les quantificateurs vus plus haut pour
    créer des expressions plus complexes et résoudre plus de problèmes.
*/

console.log("----- A. Quelques exemples de groupes. -----");
/*
    A. Quelques exemples de groupes.
*/
console.log("----- Exemple 1 : Un groupe pour une série de nombre -----");
// Un groupe avec les () cherche puis retourne la série de fois que 47 est trouvé
console.log("12227335447315344777747471114747".match(/(47)/g))// Retourne ->
// [ '47', '47', '47', '47', '47', '47' ]

// Un groupe avec les () cherche puis retourne la série de fois que 47 est trouvé
// mais aussi si suivi de + cherche puis retourne la série consécutive de fois que 47 est trouvé
console.log("12227335447315344777747471114747".match(/(47)+/g))// Retourne ->
// [ '47', '47', '4747', '4747' ]

console.log("\n----- Exemple 2 : Avec 2 groupes pour un modèle -----");
/*
Transformons le modèle "prénom.nom" en une regex.

Résultat : /([A-zÀ-ÿ]+).([A-zÀ-ÿ]+)/g
Le premier groupe contient entre 1 et une infinité de caractères
*/
console.log("jean.dupont".match(/([A-zÀ-ÿ]+).([A-zÀ-ÿ]+)/g));
console.log("julie.andré".match(/([A-zÀ-ÿ]+).([A-zÀ-ÿ]+)/g))


console.log("\n----- B. Les groupes optionnels -----");
/* 
    B. Les groupes optionnels

    On peut utiliser le ? pour définir des groupes optionnels.
*/

    // console.log("bzbaa")


console.log("\n----- C. Les groupes nommés -----");
/*
    C. Les groupes nommés

    On peut nommer des groupes afin de s'y retrouver plus facilement, cette méthode est assez peu utilisée.

    Exemple : /(?<nom>x)/

*/


console.log("\n\n\n----- 3. Les ancres ^ et $ -----");
/* 
    3. Les ancres ^ et $

    L'accent circonflexe permet de chercher une expression qui est au début d'une chaîne, et le dollar permet de chercher un modèle qui termine une chaîne.
*/

    /* A. Un peu de pratique */
    // console.log("Je suis dans de beaux draps.") // [Je]
    // console.log(" Je suis dans de beaux draps.") // null (notez l'espace au début)
    // console.log("Je suis dans de beaux draps.") 



