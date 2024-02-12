/* Export aussi pour des fonctions, même syntaxe que pour des variables */
function add(a, b){
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

//Export nommé
export {add, multiply};