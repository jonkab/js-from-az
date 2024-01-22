/* 
    Les méthodes de sélection sont disponibles via l'objet document, mais aussi via tous les objets représentant des éléments. 
*/
// L'objet "window" représente l'objet global de la fenêtre du navigateur
console.log(window)

// L'objet "document" inclut dans l'objet global "window",
console.log(window.document)// représente le document(la page) ouvert dans la fenêtre du navigateur

// Étant déjà directement dans l'objet global "window",
console.log(document)// on peut constater que l'on peut accéder directement à l'objet "document" sans écrire "window" avant.

/*
    Ce qui explique pour quoi tous les objets, méthodes ou autre comme "console", "alert()" ou autre sont
    également accéssible directement sans devoir repasser par l'objet "window", car nous sommes en réalité
    déjà dedans.
*/


/* 
    1 document|element.querySelector(selecteurCSS)

    Méthode "récente" qui sélectionne un élément facilement, à l'aide de n'importe quel sélecteur, (h1, #main-title, .title, html body h1, etc ...).

    Retourne un objet représentant le premier élément trouvé.
*/
const mainTitle = document.querySelector("h1")
console.log(mainTitle)
console.log(typeof mainTitle)
console.log(mainTitle.style.backgroundColor = "crimson")
console.log(mainTitle.style.fontSize = "40px")



/* 
    2 document|element.querySelectorAll(selecteurCSS)

    Méthode "récente" permettant de sélectionner plusieurs noeuds du DOM. 
    Un noeud de DOM peut être du texte, un commentaire, ou encore un élément.
    
    Retourne une NodeList statique.

    Le fait qu'elle soit statique signifie qu'elle ne réagit pas à des changements ultérieurs
    sur les éléments qu'elle contient, elle reste toujours la même c'est donc une copie unique.

    NodeList est un objet représenté sous forme de tableau, mais avec moins de méthode que les objets natif "Array"
*/
const listElement = document.querySelectorAll("ul li")
console.log("NodeList statique :", listElement)
listElement.forEach((el, index) => el.innerText = `Changed ${index + 1} !`)

setTimeout(() => {
    document.querySelector(".list-item:nth-child(3)").remove()
    console.log("NodeList statique toujours identique malgré la suppression du 3éme item de la list :", listElement)
}, 1000)

/* 
    3 .getElementsByClassName(strClassName)
    
    Retourne une HTMLCollection "live", qui réagit donc aux potentiels changements arrivants aux éléments qu'elle contient. 

*/



/* 
    4 document.getElementById(strID)
    
    Retourne un objet élément en fonction de l'ID passé en argument. 
    
    Cette méthode est seulement accessible via l'objet document, pas sur les éléments. 
*/



/* 
    5 document.getElementsByTagName(strTag)
    
    N'accepte qu'un élément en argument, pas de sélecteur contenant plusieurs éléments.
    
    Retourne une HTMLCollection.
*/




