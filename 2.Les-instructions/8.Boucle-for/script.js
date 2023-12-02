/**
    1. La boucle for.

    La boucle for permet d'exécuter plusieurs instructions d'affilée jusqu'à ce
    qu'une condition ne soit plus vraie.

    pour(initialisation, condition, incrémentation){
      fais quelque chose
    }

    1. Variable de départ initialisé, comme let i = 0;
    2. La condition est vérifiée, comme i <= 10;
    3. Le bloc de l'instruction est exécuté.
    4. L'incrémentation modifie la valeur de la variable de départ comme i++.
    5. À partir de là, on répète à partir de l'étape 2 jusqu'à que la condition ne
       soit plus vérifiée, ce qui nous fera sortir de la boucle.
  
*/

// Boucle avec incrémentation
// Ex : 0 1 2 3 4 5 6 7 8 9 10
for (let i = 0; i <= 10; i++) {
    console.log("Incrémente : " + i);
}

console.log("---------------------------");

// Nous pouvons aussi décrémenter
// Ex : 10 9 8 7 6 5 4 3 2 1 0
for (let i = 10; i >= 0; i--) {
    console.log("Décrémente : " + i);
}

console.log("---------------------------");

// Et aussi incrémenter par tranche du nombre que l'on veut
// Ex : 0 10 20 30 40 50 60 70 80 90 100
for (let i = 0; i <= 100; i += 10) {
    console.log("Décrémente : " + i);
}

console.log("---------------------------");

// On utilise souvent une boucle for pour effectuer une opération sur tous les
// éléments d'un tableau.
const numbers = [1,2,3,4,5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]++);//Ici, ++ incrémente la valeur liée au tour de boucle en cours
    console.log(numbers);//Ici, je peux voir le résultat qui vient d'être mis à jour
    // dans le tableau pour la valeur concerné
}
// À la sortie de la boucle, on peut voir les changements appliqués sur chaque valeur du tableau
//console.log(numbers);// Ici, je vois toutes les valeurs qui ont été mise à jour.

console.log("---------------------------");


/**
    2. Il existe deux instructions utiles dans les boucles : break et continue.

    L'instruction break permet de stopper les exécutions d'un boucle pour en sortir plus tôt;

    L'instruction continue permet de passer à l'itération suivante plus tôt.
*/
// Avec break
// Ex : Arrivé à 5 tu sors, donc tu ne continues pas 6 7 8 9 et 10
for (let i = 1; i <= 10; i++) {
    console.log(i);//Ici, il est important de comprendre que je fais console.log volontairement
    //avant le break, car si je fais mes opérations après le cas 5 ne sera pas fait.

    if (i === 5) {//Ici, je dis si tu arrives au cas 5
        break;//tu t'arrêtes là, donc tu ne feras pas les cas de 6 jusqu'à 10
    }
}

console.log("---------------------------");


// Avec continue
// Ex : Arrivé à 2 tu passes directement au suivant, donc tu n'effectues pas le traitement
// pour le cas 2 spécifiquement, mais tu continues de passer au cas suivant.
for (let i = 1; i <= 3; i++) {
    if (i === 2) {//Ici, je dis si tu arrives au cas 2
        continue;//Tu ne le fais pas, tu le sautes, mais tu continues jusqu'au prochain le 3
    }
    console.log(i);//Ici, il est important de comprendre que je fais console.log volontairement
    //après le continue, car si je fais mes opérations avant, la condition pour le cas 2
    // ne sera pas appliqué.
}


console.log("------------- EXERCICES --------------");
console.log("------------- EXERCICE [1] --------------");
/**
* Exercice 1 : Boucle avec `break`
* Utilisez une boucle pour trouver le premier nombre pair dans le tableau et affichez-le.
* Utilisez l'instruction break pour sortir de la boucle une fois que le nombre pair est trouvé.
*/
let nombres1 = [1, 3, 5, 6, 7, 8, 9];

// Réponse exercice 1
for (i = 0; i < nombres1.length; i++) {
    if (nombres1[i]%2 === 0) {
        console.log(nombres1[i]);
        break;
    }
}

console.log("------------- EXERCICE [2] --------------");
/**
* Exercice 2 : Boucle avec `continue`
* Utilisez une boucle pour afficher tous les nombres du tableau.
* Utilisez l'instruction continue pour sauter l'affichage si le nombre est pair.
 */
let nombres2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Réponse exercice 2
for (i = 0; i < nombres2.length; i++) {
    if (nombres2[i]%2 === 0) {
        continue;
    }
    console.log(nombres2[i]);
}

console.log("------------- EXERCICE [3] --------------");
/**
* Exercice 3 : Utilisation combinée de `break` et `continue`
* Utilisez une boucle pour afficher tous les nombres dans le tableau.
* Si le nombre est pair, utilisez continue pour passer au nombre suivant sans l'afficher.
* Si le nombre est égal à 7, utilisez break pour sortir de la boucle immédiatement.
*/
let nombres3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Réponse exercice 3
for (i = 0; i < nombres3.length; i++) {
    if (nombres3[i]%2 === 0) {
        continue;
    }

    if (nombres3[i] === 7) {
        console.log(nombres3[i]);
        break;
    }
}