/* 
    En JavaScript, les opérateurs servent à effectuer des calculs,
    assigner ou réassigner des valeurs, comparer, etc ...

    Exemple : 5 + 10
    5 et 10 sont des opérandes, et + est un opérateur d'addition.

    Découvrons les principaux opérateurs.
*/

/* 
    1. Les opérateurs mathématiques. 

    +  Addition
    -  Soustraction
    () Parenthèses 
    *  Multiplication
    /  Division 
    %  Modulo 
    ** Exponentiel

*/
console.log(55 % 10); // Grace au modulo j'ai le reste de la division
console.log(2**4 + " équivaut à 2*2*2*2");

/* 
    2. Les opérateurs de comparaison.

    Comparent deux opérandes et sont évalués à true ou false.

    >   Supériorité stricte.
    <   Infériorité stricte.
    <=  Inférieur ou égal.
    >=  Supérieur ou égal.
*/


/* 
    3. Les opérateurs d'égalité.

    Comparent l'égalité ou l'inégalité de deux opérandes et sont évalués true ou false.

    ==   Égalité simple.
    !=   Inégalité simple.
    ===  Égalité stricte.
    !==  Inégalité stricte.
*/
console.log("10" == 10); // Ici la string sera convertie en number
// pour résoudre l'opération qui passera à true grâce à la convertion

console.log("10" === 10); // Ici l'opération sera stricte pas de
// conversion possible et donc sera false
// ⚠️Il est donc recommandé d'utiliser les opérateurs d'égalité/inégalité stricte

/* 
    4. Les opérateurs logiques.

    Permettent de comparer plusieurs opérandes.

    && ET  logique
    || OU  logique
    !  NON logique

*/
console.log(10 > 2 && 5 > 1); // Ici les 2 comparaisons sont vrai,
// donc elles sont bien évalué et retourne true

console.log(1 > 2 && 5 > 1); // Ici la 1ère comparaison étant false
// la seconde comparaison ne sera même pas évalué
// ⚠️Ceci est la particularité du fonctionnement du && ET logique,
//   et les 2 comparaisons doivent être true pour retourner true

let test1 = true;
let test2 = true;
if (test1 && test2){ // Ici on test le && logique dans une condition
    console.log("Elles sont true");
}

console.log(10 > 5 || 10 < 5);// Ici seule la 1ère comparaison est true
// et suffie pour que ça retourne true
// ⚠️La particularité du fonctionnement du || OU logique à l'inverse
//   du && c'est qu'une seule des comparaisons doit être true
//   pour que ça retourne true même si l'une d'elle est false

console.log(50 > 500 || 10 < 5);// Ici les 2 sont false alors ça retournera false

console.log(!true);// Ici je compare un boolean

let test3 = false;
if(!test3){ // Une condition est faite pour tester à true afin de rentrer dedans
    console.log("test3 est pourtant false");//Dans cet exemple test3 est bien affecté à false
    // donc s'il on veut rentrer dans la condition pour que le test
    // de la variable test3 retourne true on doit tester l'inverse de false
    // et alors ça permettre de dire que c'est true et de rentrer dans la condition
}

/* 
    5. Les opérateurs d'affectation.

    Permettent d'affecter des valeurs après un calcul.

    let num = 10;

    ++, ex num++ équivaut à num = num + 1 // 11
    --, ex num-- équivaut à num = num - 1 // 9
    +=, ex num += 20 équivaut à num = num + 20 // 30
    -=, ex num -= 20 équivaut à num = num - 20 // -10
    *=, ex num *= 10 équivaut à num = num * 10 // 100

*/
let num = 10;
num++;// Ceci équivaut à : num = num + 1;
console.log(num);

/*
    Il existe beaucoup d'opérateurs plus confidentiels, mais il n'est
    pas utile de tous les passer en revue à ce stade de votre apprentissage.
*/