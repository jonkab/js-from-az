/*
    L'event delegation est un procédé qui permet d'avoir un code plus propre et de moins surcharger
    le navigateur d'écouteurs d'évènement.

    C'est une technique couramment utilisée pour gérer efficacement les événements,
    en particulier dans les situations où de nombreux éléments doivent être surveillés.

    Event Delegation implique :
    1- Attachement d'un Écouteur d'Événements à un Élément Parent :
    Plutôt que d'attacher des écouteurs d'événements à chaque élément enfant individuellement,
    un écouteur d'événements est attaché à un élément parent commun.
    Cela tire parti de la propagation des événements (bubbling) pour capturer les événements
    déclenchés sur les éléments enfants.

    2- Identification de l'Élément Source :
    Lorsqu'un événement est déclenché et capturé par l'écouteur sur l'élément parent,
    l'élément source de l'événement (celui sur lequel l'événement a réellement eu lieu)
    est identifié. Cela se fait généralement en vérifiant la propriété target de l'objet événement.

    3- Gestion Conditionnelle des Événements :
    Sur la base de l'élément source, des actions spécifiques peuvent être entreprises.
    Par exemple, si l'élément source correspond à un certain type d'élément ou
    possède une certaine classe ou identifiant, une certaine logique peut être exécutée.

    Avantages de l'Event Delegation :
    Performance :
    Il réduit le besoin d'attacher des écouteurs d'événements à de nombreux éléments individuels,
    ce qui peut améliorer les performances, surtout pour les interfaces utilisateur complexes
    avec de nombreux éléments interactifs.

    Maintenance :
    Il simplifie la gestion des événements, en particulier pour les éléments qui sont ajoutés ou
    supprimés dynamiquement du DOM (comme dans les applications web dynamiques),
    car l'écouteur d'événements est attaché à un élément parent stable.


    En résumé, la délégation d'événements est un procédé stratégique et efficace dans la gestion
    des événements dans le développement web, offrant des avantages en termes de performance,
    de maintenabilité et de gestion dynamique des éléments.
*/

// Exemple 1 sans le procédé mis en place
const cells = document.querySelectorAll(".cell")
const txtInfo = document.querySelector(".txt-info")

//cells.forEach(cell => cell.addEventListener("click", handleCellClick))

function handleCellClick(e){
    //console.log(e.target)
    txtInfo.textContent = e.target.textContent
}


// Exemple 2 avec le procédé Event delegation
const grid = document.querySelector(".grid")

//Pas besoin de parcourir avec un forEach chaque élément à cliquer
//Ni d'appliquer un écouteur d'événement sur chacun d'eux
//En mettant seulement un écouteur sur l'élément parent(grid) des cellules
grid.addEventListener("click", handleGridClick)

function handleGridClick(e) {
    e.stopPropagation()//Pour ne pas que la propagation remonte jusqu'au body
    //console.log(e)
    //On se sert de la propagation des événements et de l'objet (e)
    //Pour savoir sur quoi nous avons cliqué
    if(e.target.classList.contains("cell")) {
        txtInfo.textContent = e.target.textContent
    }
}

document.body.addEventListener("click", () => {
    console.log("BODY !")//Pour tester le click sur le body mais aussi vérifier
    // que le stopPropagation de handleGridClick(e) fonctionne bien afin de ne
    //pas propager les événements au-delà de "grid"
})