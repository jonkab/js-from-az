/*
  Les promesses permettent d'enchaîner des exécutions de code en JavaScript.
*/

/* 
  On commence par instancier (créer un objet à partir d'un constructeur) une nouvelle promesse.
  
  Cet objet instancié prend une callback avec deux arguments.
  
  Cette callback est exécutée au moment de la création de l'objet.

  Si l'opération est un succès (appel d'API, animation, etc...), on appelle la fonction resolve avec le résultat de ce succès, ce qui nous permet d'enchaîner des exécutions de fonction asynchrone à l'aide des méthodes then disponibles dans le prototype des promesses.

  Si c'est un échec, on appelle reject qui nous permet d'exécuter une méthode catch, elle aussi disponible dans le prototype des promesses.
*/
const promise = new Promise((resolve, reject) => {
    const calculation = 5 + 5;//10
    //resolve(calculation);
    reject("Donnée non trouvée");// Va retourner le message dans catch()
})
.then(value => {//Toutes les méthodes then() vont pouvoir s'enchainer autant de fois qu'il y en a
    console.log(value);//10
    return value * 10;
})
.then(value => {//then() s'enchaine à nouveau
    console.log(value);//100
    return value * 555;
})
.catch((e) => {//catch() récupère avec (e) le message de la méthode reject()
    console.log(e);//pour l'afficher si besoin : "Donnée non trouvée"
})
.finally(() => {//finally() s'exécute même si une erreur est rencontré
    console.log("Je suis tout le temps exécuté");
});

console.dir(promise);//log l'objet Promise avec son Proto sa State et son Result.