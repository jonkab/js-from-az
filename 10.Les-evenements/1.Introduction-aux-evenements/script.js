/* 
    Les événements sont au cœur du JavaScript côté navigateur, ils permettent de répondre
    à des actions effectuées par les utilisateurs.
*/

/* 
    1. .addEventListener(event, callback, option)
    
    Elle permet d'être à l'écoute d'un évènement particulier sur un élément, c'est
    à dire de déclencher une fonction callback quand un évènement a été déclenché
    sur un élément.
*/
    const btn = document.querySelector(".btn")

    //btn.addEventListener("click", handleClick)
    btn.addEventListener("click", handleClick2)
    function handleClick() {
        console.log("Clicked !")
    }

    function handleClick2(e) {
        console.log("Clicked ! 2")
        console.log(e)
    }

/* 
    L'objet d'évènement.

    Un objet d'évènement contenant des informations de ce dernier est TOUJOURS
    passé en argument à la fonction callback que vous définissez dans addEventListener().

    À vous de voir si vous voulez l'utiliser, ou pas.

*/


/* 
    .removeEventListener(type, callbackListener)

    Enlève un écouteur d'évènement d'un certain élément.
    Cela permet, dans certains cas, d'alléger le fonctionnement d'une application et
    d'avoir de meilleures performances.

    Attention, on ne peut qu'enlever des écouteurs d'évènements rajoutés avec
    la méthode addEventListnerner ET lorsqu'on a passé une fonction nommée
    et pas une fonction anonyme.
*/

btn.removeEventListener("click", handleClick)

//Ici la fonction étant anonyme, je ne pourrai jamais la supprimer avec removeEventListener()
btn.addEventListener("click", () => { console.log("Fonction anonyme")})



/* 
    Déclarer un écouteur d'évènement en ligne.

    Element.onclick = EventListenerCallback;

    Trois gros désavantages de cette technique :
    - On ne peut pas rajouter plusieurs event listeners sur le même élément avec cette technique
    - On ne peut pas les enlever
    - On ne peut pas utiliser les paramètres supplémentaires d'addEventListeners()
*/
//btn.onclick = handleClick

/* 
    Rajouter des évènements en HTML.

    On peut voir que ne pouvant pas utiliser les paramètres supplémentaires "le (e)" d'addEventListeners()
    Dans la console ça renvoie "undefined"
*/
