/*
    Comment gérer mes erreurs avec fetch() ?

    Faire une Requête HTTP veut dire que le client fait une demande à un serveur et
    qu'en retour le serveur lui répond.

    Et qu'en fonction de si le client fait une bonne ou mauvaise requête(méthode fetch()),
    ou à l'inverse que le serveur fait une bonne ou mauvaise réponse(objet Response) cela
    veut dire qu'il faut gérer s'il y a des erreurs dans un sens ou dans l'autre.

    Comme déjà évoqué les méthodes then(), catch() vont servir à gérer quand on traite des
    erreurs, mais également en s'appuyant sur Response et ses différentes propriétés :
    - ok, redirected, status ...

    Et aussi s'appuyer sur Error pour avoir le type d'erreur, ex :
    - error.message -> Failed to fetch.
*/
function getCATImg(url){

    fetch(url)
        .then(response => {
            /*
                Condition en fonction du status de la response pour gérer l'erreur
             */if(!response.ok) throw Error(`${response.status}`);
             /*
                L'objet Response contient diverses propriétés dont :
                ok, retournant :
                    - true si la requête a abouti
                    - false si elle n'a pas abouti
                Ce qui permettra de savoir s'il y a un problème dans un sens ou dans l'autre
            */

            console.log(response);
            return response.json();
        })
        .then(data => {
            /*
                Appel de creatImg() pour créer l'image récupérée depuis l'API TheCatAPI
            */console.log(data);
            creatImg(data);
        })
        .catch(error => {
            /*
                Affichage de l'erreur à l'utilisateur
            */console.dir(error);
            document.querySelector(".error-msg").textContent = `Error : ${error.message}`;
        })
}

//Pour générer volontairement des erreurs afin de faire des tests, faire une faute dans le nom de domaine ou alors dans le endpoint (à la fin de l'url faire une faute sur search)
getCATImg("https://api.thecatapi.com/v1/images/search");

function creatImg(imgData) {
    const img = document.createElement("img");
    img.src = imgData[0].url;
    document.body.appendChild(img);
}