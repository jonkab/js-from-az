/* 
    1. En JavaScript, certaines valeurs vont être converties en
    valeurs d'un autre type lorsqu'on les utilise dans des
    opérations ou des conditions, c'est la coercition de type.
    En anglais : type coercion.
*/

const nb1 = 10;//Type Number
const nb2 = "10";//Type String

//Coercition de type en comparant avec égalité simple.
if (nb1 == nb2) {//Ici, je compare uniquement les valeurs pas le type.
    console.log("Instruction exécuté");//L'évaluation retournant true alors,
    //je rentre dans la condition, car nb1 est converti en string ce qui
    //rend nb1 et nb2 100% identique.
    //Ceci est donc un exemple de Coercition.
}

//En comparant avec égalité stricte, il n'y a pas de coercition.
if (nb1 !== nb2) {//Ici, je compare les valeurs et également le type.
    console.log("Instruction exécuté");//L'évaluation retournant true alors,
    //je rentre dans la condition, car nb1 est strictement différent de nb2.
    //Comme ceci, je peux éviter l'inconvénient dans ce cas précis que
    //provoquerait une Coercition, parce qu'il n'y a pas de conversion de type.
}


//➕Coercition de type avec la concaténation
console.log(nb1 + nb2);//Ici nb1 est converti en chaine de caractère puis concaténé,
//le résultat donne une string qui vaut 1010.

//✳️Coercition de type avec l'opérateur de multiplication
console.log(nb1 * nb2);//Ici nb2 est converti en number puis effectue la multiplication,
//le résultat donne un number qui vaut 100.

//➗Coercition de type avec l'opérateur de division
console.log(nb1 / nb2);//Ici nb2 est converti en number puis effectue la division,
//le résultat donne un number qui vaut 1.

//Coercition de type avec 2 booleans dans ce cas précis :
console.log(true + false);//Ici cette évaluation renvoie 1, car chaque boolean
//est convertie en number et JS attribue à true 1 et à false 0 puis fait l'addition.
//Donc le résultat donne un number qui vaut 1.