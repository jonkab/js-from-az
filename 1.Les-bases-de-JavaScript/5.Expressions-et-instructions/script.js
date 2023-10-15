/* EXPRESSION
    Une expression est une unité de code valide qui est
    résolue en une valeur(number, string, boolean, object, etc...)
    par votre ordinateur.
    Une expression peut être un calcul, une comparaison ou
    un simple morceau de code "abc".

    80 + 60       // Calcul évalué à 140 
    50 === 50     // cette comparaison(expression) retourne true
    "abc"         // Code évalué par votre machine en "abc"(chaîne de caractères)

    ⚠️Si vous pouvez le console.log(), c'est une expression.
    ⚠️Si ça retourne une erreur, c'est une instruction.
*/

console.log(100 > 50);
console.log(80 + 60 === 140);
console.log(45 + 10 + 40);
// Ces 3 logs évaluent une valeur, ceci ce dit être une expression.

function foo(){
    return 10 * 10;
}
console.log(foo());

const num = foo(); // Ici ma fonction va être executé,
// et donc elle va retourner un résultat qui sera stocké
// dans la variable num ceci ce dit être une expression.
// Pour faire simple la fonction foo retourne une expression


/* INSTRUCTION
Une instruction (en anglais le terme utilisé est "statement"), est une action que doit réaliser
la machine qui exécute le code en question.

Il existe différents types d'instructions.

Les instructions de contrôle de flux :
if...else, switch, try...catch

Les déclarations :
var, let, const

Les fonctions et les classes :
function, class, return, async function

Les itérations : 
for, do...while, while, for...in/of

⚠️Etant donnée qu'une instruction ne peut pas se console.log()
A l'inverse d'une expression alors ceci ce dit être une instruction
Par exemple, si je fais un console.log(function) ceci n'est pas possible
ainsi ça retournera une erreur donc c'est bien une instruction.
*/

// Instruction if
if(50 > 10) { // Ceci est une instruction
    console.log("50 est supérieur à 10")
}

// Déclaration de function
function foo(){ // Déclarer une fonction est une instruction
    return 10 * 10;
}
console.log(foo());

// Déclaration d'une constante
const userName = "Thomas";// Déclarer une variable est une instruction

// Tenter de logger une déclaration ne fonctionne pas et retourne une erreur
//console.log(const userName = "Thomas");
// Ceci est donc une instruction.