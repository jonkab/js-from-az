/* 
    Un objet Math est disponible en JavaScript.

    Math n'est pas un constructeur(qui sert à créer des objets), mais simplement
    un objet contenant pléthore de méthodes utiles pour réaliser des calculs
    mathématiques (sinus, puissance, random, min, max, etc ...).

    Le but n'est pas de toutes les connaître par coeur, mais simplement de savoir
    qu'elles existent et les utiliser en temps voulu.

    Découvrons les méthodes MATH les plus populaires et utiles.
*/

/* 
    1. Math.abs(number)

    Retourne la valeur absolue d'un nombre, c'est à la dire la valeur d'un nombre
    sans son signe.

    La valeur absolue de x est x.
    La valeur absolue de -x est x.
*/
    console.log(Math.abs(-10))// 10
    console.log(Math.abs(10))// 10


/* 
    2. Math.ceil(number)

    La méthode Math.ceil() est utilisée pour arrondir un nombre à virgule flottante
    à l'entier supérieur le plus proche.

    Donc retourne l'entier suivant un nombre à virgule.

    Cet arrondi vers le haut se produit quel que soit le chiffre après la virgule,
    même s'il est plus petit que 0.5. Math.ceil() se comporte toujours de cette façon,
    arrondissant toujours vers l'entier supérieur.
    Si vous cherchez à arrondir à l'entier le plus proche en fonction de la valeur décimale,
    vous utiliseriez Math.round() à la place.
*/
    console.log(Math.ceil(4.5))//5
    console.log(Math.ceil(4.05))//5



/* 
    3. Math.floor(number)

    Inverse de .ceil().
    Retourne l'entier inférieur d'un nombre à virgule.
*/

    console.log(Math.floor(99.89))// 99
    

/* 
    4. Math.round(number)

    Mélange de .ceil et .floor().
    Si le dernier chiffre d'un nombre à virgule est supérieur ou égal à 5,
    on arrondit à l'entier supérieur, sinon à l'entier inférieur.
*/

    console.log(Math.round(99.89))//100
    console.log(Math.round(99.49))//99


/* 
    5. Math.cos(numberInRadians)

    Retourne le cosinus d'un angle.
*/
    console.log(Math.cos(0.5))


/* 
    6. Math.max(x,y,...)

    Cette méthode retourne le nombre le plus grand parmi les arguments qu'on lui passe.
*/
    console.log(Math.max(10, 55, 48, 79, 333333))//333333


/* 
    7. Math.min(x,y,...)

    Cette méthode retourne le nombre le plus petit parmi les arguments qu'on lui passe.
*/
    console.log(Math.min(10, 55, 48, 79, 333333))//10


/* 
    8. Math.pow(x,y)

    Retourne le premier argument exposant[second argument].
*/
    console.log(Math.pow(2,2))//4


/* 
    9. Math.random()

    Retourne un nombre "au hasard" entre 0 inclus et 1 non inclus.
*/
    console.log(Math.random());
    console.log(Math.random());
    console.log(Math.random());


/* 
    10. Math.trunc(number)

    Retourne la partie entière d'un nombre à virgule.
*/

    console.log(Math.trunc(9.446864)); // 9

/* 
    Etc etc ...
    Encore une fois, le but n'est pas de toutes les retenir par coeur,
    mais de savoir que si vous avez besoin de faire un calcul mathématique en particulier,
    il existe surement une méthode pour vous aider à le réaliser.
*/