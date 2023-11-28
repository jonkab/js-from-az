/* 
    1. Une instruction if s'exécute si l'expression de sa condition
    est évaluée comme à true.
    
    Chaque valeur JavaScript est soit truthy, soit falsy.

    Comme moyen mnémotechnique pour vous aider à comprendre, on peut
    dire qu'une valeur truthy est une valeur qui 'existe' et qu'une
    valeur falsy est une valeur qui 'n'existe pas'.
    
    Exemples de valeur truthy : true, "abc", 10, [1,2,3], -999, etc ...

    Toutes les valeurs falsy : undefined, null, NaN, 0, "" (chaîne vide), false.
*/

const nb1 = 200;
const nb2 = 400;

// 👌[TRUTHY]
//Si je teste que nb1 est inférieur(<) à nb2
if(nb1 < nb2) { //ici la condition étant évalué à vrai(truthy) alors on rentre dedans.
    console.log("👌Condition true, instruction exécutée");
}

// 👎[FALSY]
//Si à l'inverse, je teste que nb1 est supérieur(>) à nb2
if(nb1 > nb2) { //ici la condition étant évalué à false(falsy) alors on ni rentre pas.
    console.log("👎Condition false, instruction non exécutable");
}

// 👌[TRUTHY]
if("abc"){
    console.log("👌[TRUTHY]");
}

// 👎[FALSY]
if(""){
    console.log("👎[FALSY]");
}