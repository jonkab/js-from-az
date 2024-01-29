/* 
    Les formulaires sont des élèments importants du web.
    Ils possèdent beaucoup d'évènements qu'il faut maitrîser en JavaScript.

    Notez que les formulaires ont beaucoup de potentielles utilités.

    On peut évidemment s'en servir afin d'envoyer des données vers un serveur.

    Mais on peut aussi très bien les utiliser uniquement côté Front, comme pour pas mal de générateurs CSS par exemple.

    https://neumorphism.io/#e0e0e0

    Dans tous les cas, il faut bien les connaître.
*/


/* 
    1. submit

    Un écouteur d'évènement se déclenche par défaut pour celui-ci dès qu'on clique sur un bouton qui se trouve dans un formulaire.

    Il provoque un rafraîchissement de la page car il essaye d'envoyer les données sur la même page si on ne spécifie aucun attribut à l'élément form.
*/
    const form = document.querySelector("form")

    //form.addEventListener("submit", handleSubmit)

    function handleSubmit(e){
        e.preventDefault()// Rappel
        //Invoquer preventDefault() à n'importe quel moment du cycle de vie d'un évènement annulera cet évènement
        console.log("Form submitted")
    }



/* 
    2. input

    Cet évènement se déclenche à chaque fois qu'il y a un changement dans un input.

    Pratique pour faire de la validation de données côté Front. (animation, UX, etc...)
*/
    const nameInput = document.querySelector("#name")
    const checkbox = document.querySelector("input[type='checkbox']")

    //nameInput.addEventListener("input", handleInput)
    //checkbox.addEventListener("input", handleInput)//Pour une checkbox,
    // la valeur affichée par défaut dans la console est on si l'attribut value n'est pas spécifié dans le html

    function handleInput(e){
        console.log(e.target.value)// "checkedValue" si l'attribut value est renseigné sinon "on" par défaut
        console.log(checkbox.checked)//true si coché, false sinon
    }


/* 
    3. change

    Cet évènement ressemble à input mais ne se déclenche que lorsque un input perd le focus.
    C'est à dire que si au moins un caractère a été saisi et que l'on est sortie du champs il se déclenche.

    Pour les inputs checkbox ou radio, l'effet est identique.
*/
    //nameInput.addEventListener("change", () => console.log("Lost focus !"))



/* 
    4. invalid

    Celui-ci permet de déclencher le gestionnaire d'évènement quand on essaye d'envoyer un formulaire qui contient des potentielles erreurs.

    Par exemple si je rentre un texte au mauvais format dans un input type="email".
*/
    const emailInput = document.querySelector("#email")

    //emailInput.addEventListener("invalid", () => console.log("Mail invalide"))
    /*
        Pour changer le message d'erreur par défaut dans la boxe au submit, on utilise l'API HTML DOM
        qui contient l'interface HTMLSelectElement dans laquelle on va utiliser
        la méthode setCustomValidity("Veuillez....")

        Source MDN : https://developer.mozilla.org/fr/docs/Web/API/HTMLSelectElement/setCustomValidity
     */
    //emailInput.setCustomValidity("Veuillez....")


/* 
    Pour enlever complètement le message d'erreur, appelez cette fonction avec une chaîne vide.
    Attention, cela va potentiellement envoyer le formulaire avec des données mal formées.
    Il faudra le faire en haut dans l'écouteur du "submit" car il y a aussi le preventDefault() qui aidera.
*/



/*
    5. focus et blur.

    L'évènement focus est déclenché quand un élément reçoit le focus, comme lorsqu'on clique sur un input.

    L'évènement blur est déclenché lorsqu'un élément perd le focus, comme lorsqu'on clique ailleurs.
*/
nameInput.addEventListener("focus", () => console.log("FOCUS !"))
nameInput.addEventListener("blur", () => console.log("BLUR égale Focus perdu !"))

//Ces événements fonctionnent aussi sur "window"
window.addEventListener("focus", () => console.log("Focus de Window"))
window.addEventListener("blur", () => console.log("BLUR égale Focus perdu de Window"))