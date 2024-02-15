/* Appel API en utilisant async et await */

//Usage d'async pour transformer la fonction en promesse
async function getCATImg(url) {
    /*
        J'initialise imgData pour la rendre disponible dans toute la fonction.
        Ceci permettra de l'avoir accèssible une fois à jour avec les datas de l'image
        une fois que le bloc try aura réussi sa résolution. Donc s'il n'y a pas d'erreur.
     */let imgData;

    //Je gère les résolutions/erreurs avec le system de try/catch
    try {
        /*
            Usage d'await pour dire que c'est l'attente de la réponse de fetch(url).
            Et await ne peux s'utiliser que devant une promesse, fetch() est une promesse.
            Permettant au script global de s'exécuter en attendant la promesse.
         */const response = await fetch(url);

         /*
            Info complémentaire :

            Une fois que l'on a l'objet Response (après avoir attendu la promesse avec
            await), on peut accéder à ses propriétés et méthodes synchrones sans utiliser
            await. Comme la propriété (objet) headers par exemple.
         */const contentType = response.headers.get("Content-Type");

        // Vérifier le status pour s'assurer que la réponse contienne bien la data
        if(!response.ok) throw Error(`${response.status}`);

        // Vérifier le Content-Type pour s'assurer que la réponse soit bien du JSON
        if(!contentType || !contentType.includes("application/json")) {
            throw Error("La réponse n'est pas du JSON");
        }

        /*
            Si aucune erreur n'est rencontré alors, on passe à "response.json()" qui retourne une promesse aussi.

             1- C'est une méthode spécifique à l'objet Response de l'API Fetch. Elle lit le
             corps de la réponse streamée, le parse comme JSON, et retourne une promesse
             qui se résout avec l'objet JavaScript résultant.

             2- Gère de manière asynchrone la lecture et le parsing du corps de la réponse,
             ce qui est particulièrement utile pour les réponses de grande taille, car cela
             ne bloque pas le thread principal.

             3- La méthode .json() doit être utilisée dans le contexte des promesses ou
             avec async/await pour gérer correctement l'asynchronicité.
        */imgData = await response.json();

        /*
            Info générale entre la méthode spécifique .json() de l'objet Response et
            JSON.parse() la fonction standard de JavaScript :

            Bien que .json() et JSON.parse() accomplissent la même tâche de base de
            conversion de JSON en objets JavaScript, .json() est spécifiquement conçu pour
            être utilisé avec des réponses HTTP asynchrones dans l'API Fetch. JSON.parse(),
            d'autre part, est une fonction plus générale qui peut être utilisée pour parser
            du JSON depuis n'importe quelle source de chaînes de caractères synchrones en
            JSON.
        */
    }
    catch(error) {
        /*
            Affichage de l'erreur à l'utilisateur
        */console.dir(error);
        document.querySelector(".error-msg").textContent = `Error : ${error.message}`;
    }

    if (imgData){
        createImg(imgData);
    }
}

getCATImg("https://api.thecatapi.com/v1/images/search");


function createImg(imgData) {
    const img = document.createElement("img");
    img.src = imgData[0].url;
    document.body.appendChild(img);
}
