/* 
    1. Le "Hoisting"

    L'hissage, est la façon dont les variables déclarées avec var et les déclarations
    de fonction se font analyser en premier et "hisser" en haut du code lors de
    l'execution d'un fichier JS.
    Cela les rend donc accessibles à tout le reste du code, même si les variables et
    fonctions sont déclarées après leur utilisation.

    Les var retourneront néanmoins undefined, car elles sont analysées sans qu'on
    leur assigne de valeur...
    La valeur est assignée au moment où la ligne de la var se fait exécuter, après le
    hissage.
    Cela fait partie des nombreux comportements problématiques des var, d'où la création
    de let & const.

    ⚠️ Attention, il n'y a pas de hoisting avec les let & const.
*/

console.log(age);//Ici, je peux logger age avant même sa déclaration
//C'est ce qu'on appel le hoisting. JavaScript a un "parser" qui sert à lire le code
//pour l'analyser. Ce parser va lire le JS et arrivé à "var age" il va le mettre
//en haut du code mais sans sa valeur et donc le fait de logger age avant sa
//déclaration va renvoyer undefined et non une erreur.
//Il executera cette déclaration de age plus tard.

age = age + 1;//Ici cette opération renvera NaN ce qui ce traduit par "Not a Number" car
console.log(age);//age étant toujours undefined et puisque l'opération et faite avant
//la déclaration de var age je ne peux pas encore me servir de la variable
var age = 99;
console.log(age);//Ici age renverra bien 99


//Ici, le fait de logger name avant sa déclaration renvoi une erreur
//console.log(name);
//name étant une let il n'y a pas de hoisting et il en est de même pour const
let name = "John";
console.log(name);



console.log(foo());//Ici le fonctionnement est le même que pour les var
//il y a donc aussi du hoisting pour les fonctions. Par contre le fait
//de logger foo() avant sa déclaration ne renvoi pas undefined comme pour var
//la fonction va s'executer et donc renvoyer ce qu'elle fait à savoir afficher
//foo dans la console. Et ce qu'il faut savoir c'est que par défaut une fonction
//qui ne retourne aucune valeur va renvoyer undefined si on la console.log. Raison pour
//laquelle dans la console s'affiche en deuxième undefined juste après foo.

/* La question que l'on peut se poser est :
    Pourquoi "foo" est-il affiché avant "undefined" ?
    - Cela est dû à la séquence d'exécution du code. Lorsque vous appelez console.log(foo()),
    la fonction foo est appelée en premier. Elle affiche "foo" grâce à console.log("foo").
    Ensuite, la fonction se termine, et comme elle ne retourne pas explicitement de valeur,
    elle renvoie undefined. Enfin, undefined est passé à console.log, qui l'affiche
    dans la console à son tour.
 */
function foo() {
    console.log("foo");
}
foo();//Ici la fonction est bien executé et renvoi bien foo
//Elle n'affichera pas undefined car on fait pas de console.log de la fonction foo()


/* BLOCAGE DU HOISTING
    Ici, le fait de mettre foo2 dans une variable va bloquer le Hoisting pour les raisons
    déjà expliqués sur le fait que const & let ne font pas parties du Hoisting.
 */
//Donc ici ça renverra une erreur disant qu'on ne peut pas acceder à foo2() avant son initialisation
//foo2();
const foo2 = function () {
    console.log("foo2");
}
/*
    ⚠️ Attention, par contre avec var même s'il est le seul avec function à être impliqué
    dans le Hoisting il va être considéré comme undefined.
    Donc si je remplace const foo2 par var foo2 il va essayer d'executer la fonction
    foo2() mais comme elle est appelé avant il va affiché dans la console qu'il n'est
    pas une fonction.
*/

/* La question que l'on peut se poser est :
    Est-ce que pour les fonctions il faut les mettre dans const ou let pour contrer le
    comportement de Hoisting ?
    - La réponse est non ce n'est pas nécessaire.

    ℹ️ A savoir :
    Le fait de stocker une fonction dans une variable fait que l'on plus ça une
    déclaration de fonction mais une expression de fonction.
    Si je console.log(foo2) ça va afficher l'objet de cette fonction.
    Si je console.dir(foo2) ça va afficher tout ce qui éxiste en terme de propriété
    JS propre aux objets de type function (les first class object)
 */
console.dir(foo2);
console.dir(/abc/);//Ici je vais un avoir un type d'objet propre aux regex
//cet objet permet de detecter des chaines de caractéres.
console.log(typeof /abc/)//Le type renvoi bien object
console.dir(document.body);//Ici je peux accèder au type d'objet html et leur
//propriété propre.

