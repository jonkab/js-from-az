/* 
    1. Parfois, on a besoin d'enchaîner plusieurs conditions afin d'exécuter
    différentes actions en fonction de différentes conditions;

    On peut donc utiliser les instructions else if(condition){} ou else{}.

    else if(condition){}  est utilisée lorsqu'on a besoin de
    vérifier une autre condition.

    else{} est utilisé à la fin d'une suite de conditions, lorsqu'on
    veut exécuter une instruction pour l'ensemble des conditions restantes.

    🔔🔔 RAPPEL 🔔🔔
    ℹ️Différence entre Expression et Instruction(Statement en anglais) :
      - Une expression, c'est ce qui se fait évaluer en une valeur. Par
        exemple ce que l'on peut logger : console.log()
      - Une instruction, c'est un ordre que vous donner à votre ordinateur.
        Par exemple quand ça retourne une erreur, c'est une instruction.
*/

// Teste de l'age : Majeur & Mineur
let age = 18;

if(age >= 18) {
  console.log("Majeur");
} else if (age >= 0 && age < 18) {
    console.log("Mineur");
}


// Teste du role : Admin & Employee & Moderator
let role = "Employee"

if (role === "Admin") {
    console.log("Admin");
} else if (role === "Employee") {
    console.log("Employee");
} else if (role === "Moderator") {
    console.log("Moderator");
}


// Teste de l'accès : avec un boolean
let isLogged = true

if (isLogged) {
    console.log("Welcome");
} else {
    console.log("Access denied")
}