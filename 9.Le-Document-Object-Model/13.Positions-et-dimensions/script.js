/*  
    Il est très courant de vouloir connaître les positions d'un élément par rapport aux différents bords de la fenêtre.
    Il est aussi courant de vouloir connaître ses dimensions.

    Découvrons quelques méthodes et propriétés utiles afin d'obtenir ces informations.
*/

/* 
    1. Element : getBoundingClientRect()

    La méthode retourne un objet contenant les dimensions d'un élément et sa position par rapport au viewport, c'est à dire la fenêtre globale ou la zone d'affichage.
    
    Attention, le viewport n'est pas tout le temps le haut de la page, notamment si on a déjà scrollé.
    Ce sera toujours le haut de la fenêtre visible.

    Source MDN : https://developer.mozilla.org/fr/docs/Web/API/Element/getBoundingClientRect
*/
const box = document.querySelector(".box")

//Retourne un objet DOMRect fournissant des informations sur la taille d'un élément
//et sa position relative par rapport à la zone d'affichage :
//console.log(box.getBoundingClientRect())// Retourne l'objet DOMRect ->
/*
    DOMRect {
        x: 214.5,
        y: 83,
        width: 560,
        height: 212,
        top: 83,
        right: 774.5,
        left: 214.5,
        height: 212,
        bottom: 295
    }
*/



/* 
    Window : scrollY ou Window : pageYOffset,
    La propriété retourne le nombre de pixels scrollés depuis le haut d'un document.

    Tandi que Window.scrollX ou Window.pageXOffset,
    Retourne le nombre de pixels scrollés depuis le côté gauche d'un document,
    mais il faut un scroll horizontal pour s'en rendre compte.
*/

console.log(window.scrollY)


/* 
    Element : scrollWidth et Element : scrollHeight

    Largeur ou hauteur totale du contenu d'un élément.

    width :  padding + contenu + potentiel overflow sur X - largeur de la potentielle scrollbar sur Y.

    height : padding + contenu + potentiel overflow sur Y - hauteur de la potentielle scrollbar sur X

    Ne compte pas la marge et les bordures dans le résultat final.

    Ne fonctionne pas avec les éléments inline.

    Par exemple pour "scrollWidth" ça correspondant à la mesure de la largeur du contenu d'un élément,
    incluant le contenu qui ne serait pas visible à l'écran en raison d'un dépassement.
*/

    const container = document.querySelector(".container")
    //console.log("scrollWidth " + container.scrollWidth);
    //console.log("scrollHeight " + container.scrollHeight);


/* 
    Element : clientWidth et Element : clientHeight

    Même calcul qu'au-dessous sauf si du contenu est en train de dépasser avec overflow.

    Dans ce cas-là, ce contenu n'est pas pris en compte.

*/
    console.log("clientWidth " + container.clientWidth);
    console.log("clientHeight " + container.clientHeight);


/* 
    Element : offsetWidth et Element.offsetHeight

    Même calcul qu'au-dessous, en comptant cette fois les bordures.
*/
    console.log("offset " + container.offsetWidth);
    console.log("offset " + container.offsetHeight);


/* 
    Récupérer(calculer) la position verticale(la distance ou hauteur) actuelle de l'élément "h1"
    par rapport au haut(le top) de la page entière.
*/
    const title =  document.querySelector("h1");
    //Formule : ce qu'on a scrollé + la position du titre par rapport au haut du viewport
    console.log(window.scrollY + title.getBoundingClientRect().top);// Retourne -> la hauteur depuis le top

/*
    Explication :

    1- window.scrollY : Cette propriété renvoie le nombre de pixels que le document a déjà
    défilé verticalement à partir du haut.
    C'est la position de défilement actuelle de la fenêtre de visualisation(viewport).

    2- title.getBoundingClientRect().top : getBoundingClientRect() est une méthode qui renvoie
    la taille d'un élément et sa position relative par rapport à la zone d'affichage (viewport).
    La propriété top de l'objet retourné par getBoundingClientRect() indique la distance
    entre le haut de l'élément et le haut de la zone d'affichage (viewport).
    Cette valeur est en pixels.

    En combinant ces deux valeurs :
    • window.scrollY donne la position de défilement actuelle.
    • title.getBoundingClientRect().top donne la position de l'élément title
    par rapport au haut de la fenêtre de visualisation, sans tenir compte du défilement.

    En ajoutant ces deux valeurs ensemble, on obtient la position verticale de l'élément title
    par rapport au haut du document entier.
    Cela peut être utile pour des opérations comme faire défiler la page jusqu'à l'élément
    ou aligner dynamiquement d'autres éléments avec celui-ci, même lorsque la page a été défilée.
*/



/* 
    Element : offsetLeft 

    La propriété retourne la valeur en pixel de l'écart gauche entre l'élément et son parent.
    Pour info, il n'y a pas de propriété "offsetRight" disponible.
*/

    console.log(container.offsetLeft);// Retourne -> 255 | le nombre de pixel entre le body et le côté gauche de la div container
    console.log(container.offsetRight);// Retourne -> undefined | car la propriété offsetRight n'éxiste pas


/*
    Comment calculer offsetRight
*/
const containerPosition = container.getBoundingClientRect();
console.log(containerPosition.right - containerPosition.width);



/*
    Element : offsetParent

    La propriété retourne une référence vers le plus proche élément ancêtre positionné (plus proche
    selon la hiérarchie).
    S'il n'y a pas d'élément ancêtre positionné, c'est le plus proche ancêtre td, th, table
    qui sera renvoyé, ou body s'il n'y a non plus pas d'élément de tableau comme ancêtre.
*/
    console.log(container.offsetParent);// Retourne -> l'élément body sous forme d'objet |




/* 
    Element : scrollTop

    Retourne la partie "scrollée" d'un élément.
    C'est à dire la distance entre le haut de l'élément et le contenu visible / qui a été scrollé.

    Attention, il faut que l'élément soit "scrollable", il faut qu'il contienne une scrollbar.

    document.body.scrollTop est déprécié, il faut plutôt utiliser document.documentElement.scrollTop;

    Ou encore mieux, window.scrollY;

*/
console.log(document.documentElement.scrollTop);
console.log(window.scrollY);
container.addEventListener("scroll", () => {
    console.log(container.scrollTop)
})



