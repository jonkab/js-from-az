/* 📚ÉNONCÉ

 Créez un algorithme qui va calculer la factorielle d'un nombre qu'on lui passe en argument.
 Par exemple, la factorielle de 5 est égale à :  1 * 2 * 3 * 4 * 5 = 120.
 C'est le produit de tous les entiers qui précèdent ou qui sont égaux à N.
 La factorielle de 0 et de 1 est égale à 1.
*/
function factorial(num) {
    if(num === 0 || num === 1) return 1;

    for(let i = num - 1; i >= 1; i--) {
        //num *= i;// équivaut à num = num * i;
        console.log("1- num : " + num + " | i :" + i);
        num = num * i;
        console.log("2- num : " + num + " | i :" + i);
    }
    return num;
}



/* 🧪Tests à passer  */

console.log(factorial(5));  // 120
/*
console.log(factorial(7));  // 5040
console.log(factorial(9));  // 362880
console.log(factorial(1));  // 362880
console.log(factorial(0));  // 362880



// Cette fonction factorielle n'est pas du tout un bonne exemple car pas optimisé
// il n'est pas du tout nécessaire de passer par un tableau pour faire ce calcul.
// J'ai seulement voulu m'amuser à le faire avec un tableau tout en utilisant reduce().
function factorialTestReduce(num) {
    if (num === 0 || num === 1) return 1;
    let arrNumber = [];

    for (let i = 0; i < num; i++) {
        arrNumber.push(i+1);
    }

    return arrNumber.reduce((a, b) => a * b);
}

console.log("--------- factorialTestReduce ----------")
console.log(factorialTestReduce(5));  // 120



*/