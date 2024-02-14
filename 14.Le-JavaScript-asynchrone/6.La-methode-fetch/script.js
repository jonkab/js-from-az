/*
    Découvrons l'API Fetch et sa méthode globale fetch() en JavaScript.

    À la différence de XMLHttpRequest qui fonctionne à l'aide de fonctions de rappel
    (callbacks), l'API Fetch utilise les promesses et fournit une meilleure alternative,
    qui peut être utilisée dans les services workers. L'API Fetch intègre également des
    concepts HTTP avancés tels que le CORS et d'autres extensions de HTTP.
*/

/*
    Fait une Requête HTTP
    - La fonction getCATImg(url) prend une URL en paramètre et utilise fetch(url) pour
    envoyer une requête HTTP GET à cette URL.

    La méthode GET est celle utilisée par défault si pas d'objet pour le spécifier.

    Si à spécifier voici la syntaxe pour GET :
    - fetch(url, { method: 'GET' })
        .then(response => response.json())
        .then(data => console.log(data));

    Si à spécifier voici la syntaxe pour POST :
    - fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "userName" : "John Doe", "age": 25  })
        })
        .then(response => response.json())
        .then(data => console.log(data));

*/
function getCATImg(url){

    //Méthode GET par défault { method: 'GET' }
    fetch(url)
        .then(response => {
            /*
                Traitement de la Réponse :
                - .then(response => response.json()) : Une fois la requête complétée, la
                promesse retournée par fetch est résolue avec un objet Response.
                Cette première fonction .then() prend cet objet, extrait le corps de la
                réponse JSON à l'aide de la méthode .json(), et retourne une nouvelle
                promesse qui résout avec le résultat de l'analyse du texte JSON.
             */
            console.log(response);
            return response.json();
        })
        .then(data => {
            /*
                Utilisation des Données JSON :
                - .then(data => creatImg(data)) : La deuxième fonction .then() reçoit le
                résultat de l'analyse JSON comme data (qui est un tableau d'objets
                contenant des informations sur les images de chats, selon la documentation
                de l'API The Cat API) et appelle la fonction creatImg avec cette donnée.
            */
            console.log(data);
            creatImg(data);
        })
}
getCATImg("https://api.thecatapi.com/v1/images/search");

function creatImg(imgData) {
    const img = document.createElement("img");
    img.src = imgData[0].url;
    document.body.appendChild(img);
}

/*
    En résumé, ce code fait une requête à une API pour obtenir une image de chat aléatoire
    et l'affiche dans la page web. C'est un exemple simple, mais efficace de la façon de
    consommer des API REST en utilisant fetch et de manipuler le DOM avec JavaScript.
*/