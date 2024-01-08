/* 
    1. Les Quantificateurs et les alternances .

    Certains symboles nous permettent de gérer le nombre de répétitions d'une expression.

    On va également utiliser la méthode .match(), qui peut retourner un tableau contenant toutes les expressions rencontrées dans une chaîne, et pas seulement true ou false.

    Attention, au contraire de .test() cette fonction vient du prototype des Strings et pas des RegExp, donc "str".match(/regex/).
*/

const text = "Je mange un osso buco à Milan."
 



/* 
    A. Quantificateur de quantité {n}

    Détermine combien de fois l'expression n doit avoir lieu.
*/

    // console.log("aaa")  // ["aaa"]
    // console.log("aa")   // null
    // console.log("aaa") // comprendre b + a * 3


/* 
    B. Intervalle {x,y}

    Détermine un intervalle d'occurrences possibles.
*/
    // console.log("azzaa,aaaaaaaaaaaaaa")


/* 
    C. Intervalle infini {x,}

    Détermine un intervalle de x à l'infini.
*/
    // console.log("azzaa,aaaaaaaaaaaaaa")


/* 
    D. Le signe + 

    Entre 1 et plus l'infini, équivalent de {1,}.
*/
    // console.log("azzaa,aaaaaaaaaaaaaa")


/* 
    E. Le signe * 

    Zéro ou plus, équivalent à {0,}.
    Attention, les quantifieurs font référence dans ce cas au caractère qui les précède, donc ici : 
    Chaque "ab" suivi d'un ou plusieur 5.
*/
    // console.log("ab5-ab555-ab5555")


/* 
    F. Le signe ?  

    Signifie un ou zéro, équivalent à {0,1}.
    ici : http avec ou sans s.

*/
    // console.log("http")

/* 
    G. Le signe | 

    Le ou logique des regex, permet de créer un modèle comprenant plusieurs correspondances possibles.
*/
    // console.log("rabbit")

/* 
    2. Les groupes (abc).

    Les groupes permettent de rassembler une série de caractères entre parenthèses.
    On peut ainsi combiner les groupes et les quantificateurs vus plus haut pour créer des expressions plus complexes et résoudre plus de problèmes.
*/

    /* 
        A. Quelques exemples de groupes.
    */
        // console.log("15487471354473153447777")
    

    /* 
    Transformons le modèle "prénom.nom" en une regex.

    Résultat : /([A-zÀ-ÿ]+).([A-zÀ-ÿ]+)/ig
    Le premier groupe contient entre 1 et une infinité de caractères
    */
    // console.log("jean.dupont")
    // console.log("julie.andré")
   
/* 
/* 
    B. Les groupes optionnels

    On peut utiliser le ? pour définir des groupes optionnels.
*/

    // console.log("bzbaa")


/*
    C. Les groupes nommés

    On peut nommer des groupes afin de s'y retrouver plus facilement, cette méthode est assez peu utilisée.

    Exemple : /(?<nom>x)/

*/


/* 
    3. Les ancres ^ et $

    L'accent circonflexe permet de chercher une expression qui est au début d'une chaîne, et le dollar permet de chercher un modèle qui termine une chaîne.
*/

    /* A. Un peu de pratique */
    // console.log("Je suis dans de beaux draps.") // [Je]
    // console.log(" Je suis dans de beaux draps.") // null (notez l'espace au début)
    // console.log("Je suis dans de beaux draps.") 



