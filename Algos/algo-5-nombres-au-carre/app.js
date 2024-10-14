function squareDigits(num){
    const numSplited = String(num).split('');
    numSplited.forEach((el, index) => numSplited[index] = numSplited[index] * numSplited[index]);
    return Number(numSplited.join(''));
}

function squareDigits2(num){
  return Number((' ' + num).split("").map(val => val * val).join(""));
}

const squareDigits2OneLiner = num => Number((' ' + num).split("").map(val => val * val).join(""));

const squareDigitsUnaryOperator = num => +num.toString().split("").map(val => val * val).join("");

/* 📚ÉNONCÉ

  Retournez chaque chiffre que contient le nombre passé en argument au carré et concaténez-les.
  Retournez le nombre concaténé final.
*/


/* 🧪Tests à passer */

console.log(squareDigits(5225));    // 254425
console.log(squareDigits(5555));    // 2525252525
console.log(squareDigits(1111));    // 1111

console.log("--------squareDigits2---------");
console.log(squareDigits2(5225));    // 254425

console.log("--------squareDigits2OneLiner---------");
console.log(squareDigits2OneLiner(5225));    // 254425

console.log("--------squareDigitsUnaryOperator---------");
console.log(squareDigitsUnaryOperator(5225));    // 254425