/**
    1. La récursion.

    La récursion est le comportement d'une fonction qui s'appelle elle-même.

    Attention, la récursion est moins rapide qu'une boucle et en général
    moins simple à comprendre.

    Exemple de récursion simple qui incrémente une variable "num" jusqu'à ce
    qu'elle atteigne une valeur supérieure à 10.
*/
function recursion(num) {
    num++;
    /** ⚠️Important ⚠️
        Il est important d'avoir une condition d'arrêt qui évite une récursion infinie.
        C'est une bonne pratique d'avoir une condition d'arrêt pour que la fonction
        ne s'appelle plus elle-même à un moment donné.
     */
    if(num > 10) {//Condition d'arrêt qui évite la récursion
      console.log("Num est strictement supérieur à  10 !");
      console.log(num);
    }
    else {//Appel dans la fonction de la fonction elle-même qui prend un argument
      recursion(num)//ce qui génére la récursivité
    }
}
recursion(0);//Appel de la fonction pour la lancer et tester.