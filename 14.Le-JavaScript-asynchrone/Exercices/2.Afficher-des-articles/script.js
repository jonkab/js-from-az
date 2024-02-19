/*
    Afficher des articles depuis l'API JSONPlaceHolder.

    [I] Les variables globales :
    - Endpoint (url jsonPlaceHolderAPI) de l'API pour récupérer les données
    - Selection de la grille d'item(article) du DOM pour les injécter à la fin


    [II] Création de la Fonction/Promesse de récupération d'articles (async) :
    - getArticles(url) :
        1- Les variables globales de la Promesse
        2- Les block try/catch pour la gestion des résolutions/erreurs + await
        3- Les données reçues et appel de createArticles(articlesData)

        STEP 1 "Les variables globales de la Promesse" :
            1- Initialisation/préparation à recevoir les articles (articlesData)
            2- Selection de l'élément qui affichera les erreurs (errorMsgElt)

        STEP 2 "Les block" :
        [TRY]
            1- Attendre la réponse et la stocker
            2- L'utiliser pour stocker le type de headers
            3- Gestion des erreurs :
                - tester le status de la réponse
                - tester le type de donnée (JSON)
            4- Ajout+parsing de la data à articlesData en await
        [CATCH]
            - Afficher l'erreur attrapée à l'utilisateur dans errorMsgElt.

        STEP 3 "Les données reçues" :
            - Si données reçues, appel de createArticles(articlesData).


    [III] Appel de getArticles(jsonPlaceHolderAPI).


    [IV] Création de la Fonction de création des articles dans le DOM :
    - createArticles(data) :
        À chaque article récupéré :
            1- Création d'un item + ajout de sa class
            2- Ajout du Template String à l'item pour son contenu
            3- Ajout du contenu(data) à l'item
            4- Ajout de l'item à la grille
*/
const jsonPlaceHolderAPI = "https://jsonplaceholder.typicode.com/posts";
const grid = document.querySelector(".grid");

async function getArticles(url) {
    let articlesData;
    const errorMsgElt = document.querySelector(".error-msg");

    try {
        const response = await fetch(url);
        const headers = response.headers.get("Content-Type");

        if (!response.ok) throw Error(`${response.status}`);
        if (!headers || !headers.includes("application/json")) throw Error("Les données ne sont pas du JSON.");

        articlesData = await response.json();
    }
    catch (error) {
        //console.dir(error);
        errorMsgElt.classList.add("active");
        errorMsgElt.textContent = `Voici l'erreur rencontré : ${error.message}`;
    }

    if (articlesData) {
        createArticles(articlesData);
    }
}

getArticles(jsonPlaceHolderAPI);


function createArticles(data) {
    data.forEach(article => {
        const divItemElt = document.createElement("div");

        divItemElt.className = "grid-item";
        divItemElt.innerHTML = `
            <h2 class="title"></h2>
            <a href="#">Lire l'article</a>
        `;
        divItemElt.querySelector(".title").textContent = `${article.title}`;

        grid.appendChild(divItemElt);
    });
}