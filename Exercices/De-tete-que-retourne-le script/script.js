/*
*   Tentez de deviner de tête ce que retourne ce script ?
* */

const setUpUserData = (userName, age, height, sayHi : () => console.log("Hello World")) => {userName, age, height, sayHi}

setUpUserData("Victor", 30, 188).sayHi() // ?

/*
    A : SyntaxError
    B : "Hello World"
    C : undefined
    D : Uncaught ReferenceError: sayHi is not defined
*/