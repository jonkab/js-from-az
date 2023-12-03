/**
    1. La boucle while.

    La boucle while exécute une instruction tant qu'une expression est truthy.
    
    Attention, si vous avez l'auto-save d'activé, cela peut provoquer une
    boucle infinie qui fait bugger votre navigateur.
*/
let engineTemperature = 20;

while (engineTemperature < 100) {//Tant que l'expression évaluée est vrai
    engineTemperature++//Alors suis l'instruction d'incrémenter
}
console.log(engineTemperature);//A la fin la temperature est 100


/**
    2. La boucle do...while

    Cette boucle ressemble à "while" et "for" à la fois, à l'exception
    près qu'elle exécute une instruction au moins une fois.
*/
let num = 1;

do {//Ici démarre la boucle en faisant l'instruction qui suit.
    num++;//Suis l'instruction d'incrémenter.
}
while (num < 10);//Continu d'incrémenter tant que num est inférieur à 10
console.log(num);//A la fin num vaut 10


/**
    3. L'inconvénient de cette boucle et comme mentionné en point 2,

    c'est qu'elle s'exécute quand même une première fois avant même de connaitre
    la condition contenue dans le "while", donc la conséquence est que même si
    la condition ne le permet pas, le traitement sera tout de même exécuté au moins
    une fois.
*/
let num2 = 100;

do {
    num2++;//Ici "num2" vaut déjà 101
}
while (num2 < 10);//La boucle s'arrête, car num2 n'est pas inférieur à 10
console.log(num2);//À la fin num vaut 101 alors qu'il est bien inférieur
//à 10 dès le départ. Ce qui veut dire qu'on ne peut pas respecter la
//condition au 1er tour, mais seulement à partir du second.