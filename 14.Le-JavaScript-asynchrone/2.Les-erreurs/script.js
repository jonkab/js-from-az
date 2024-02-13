/*
  Plusieurs types d'erreurs existent de base en JavaScript.
  Lorsqu'elles ont lieu, elles bloquent l'exécution totale du script et retournent une erreur.

  On peut envoyer des erreurs de différentes manières
  
  throw *expression* 
  
  throw Error(*expression*) // fonction déclenchant une erreur et retournant un objet contenant l'expression plus une information sur l'origine de l'erreur

  throw new Error(*expression*) // Similaire à throw Error() mais étant appelée sous la form d'un constructeur
*/console.log("----- throw | throw Error() | throw new Error() -----");
function foo(){
    console.log("FOO");
    //throw "ABC";
    //throw Error("Abc");
    //throw new Error("abc")
}
foo();
console.log("Après foo()");


/*
    Il existe une série d'instructions permettant de tester du code et de gérer les erreurs si elles ont lieu.
    C'est le try...catch...finally
    Si une erreur a lieu dans le bloc try{}, elle déclenchera l'exécution du bloc catch{} et n'annulera pas l'exécution du reste du script.

    On pourra également récupérer les données de l'erreur.
 */console.log("\n\n----- try {} | catch(e) {} | finally {} -----");

try {
    let a = 555;
    //if (typeof a !== "string") throw "Erreur";
    if (typeof a !== "string") throw Error("Erreur 404");
}
catch (e) {// catch(e) va récupérer l'erreur déclenchée dans l'objet "e"
    console.dir(e);//Erreur : Erreur 404
}
finally {//finally sert à executer du code même si l'erreur est déclenché dans try
    console.log("Qu'il y est une erreur ou pas je suis executé");
}

// Les instructions try catch permettent de ne pas bloquer l'exécution du reste du code s'il y a une erreur.
//Malgré l'erreur déclenchée le script continu et affiche bien dans la console :
console.log("After try catch");//After try catch