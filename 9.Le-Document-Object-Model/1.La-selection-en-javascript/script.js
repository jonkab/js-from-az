console.log("----- Les objets window et document -----")
/*
    Les méthodes de sélection sont disponibles via l'objet document, mais aussi via tous les objets représentant des éléments. 
*/
// L'objet "window" représente l'objet global de la fenêtre du navigateur
console.log(window)// retourne l'objet window contenant toutes sortes d'objet comme "document"

// L'objet "document" inclut dans l'objet global "window",
console.log(window.document)// représente le document(la page) ouvert dans la fenêtre du navigateur

// Étant déjà directement dans l'objet global "window",
console.log(document)// on peut constater que l'on peut accéder directement à l'objet "document" sans écrire "window" avant.

/*
    Ce qui explique pour quoi tous les objets, méthodes ou autre comme "console", "alert()" ou autre sont
    également accéssible directement sans devoir repasser par l'objet "window", car nous sommes en réalité
    déjà dedans.
*/


console.log("\n\n----- 1 document|element.querySelector(selecteurCSS) -----")
/* 
    1 document|element.querySelector(selecteurCSS)

    Méthode "récente" qui sélectionne un élément facilement, à l'aide de n'importe quel sélecteur, (h1, #main-title, .title, html body h1, etc ...).

    Retourne un objet représentant le premier élément trouvé.
*/
const mainTitle = document.querySelector("h1")
console.log(mainTitle)// Retourne tout l'élément h1(seulement le 1er qui existe) en tant qu'objet : class, id, contenu ...
// <h1 class="title" id="main-title" style="background-color: crimson; font-size: 40px;">Lorem ipsum dolor sit amet.</h1>

console.log(typeof mainTitle)// object
console.log(mainTitle.style.backgroundColor = "crimson")// change la couleur de fond du titre
console.log(mainTitle.style.fontSize = "40px")// change le taille de la police du titre


console.log("\n\n----- 2 document|element.querySelectorAll(selecteurCSS) -----")
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
console.log("NodeList statique :", listElement)// Retourne l'objet NodeList des li de la liste
listElement.forEach((el, index) => el.innerText = `Changed ${index + 1} !`)// Parcours la liste puis ->
// modifie le texte contenu en le remplaçant par "Changed n+1 !" grâce à la propriété ".innerText"
console.log("HTMLCollection avant suppression =", document.getElementsByClassName("list-item").length)
// Retourne le nombre d'éléments correspondant à la class "list-item" : 4

setTimeout(() => {
    document.querySelector(".list-item:nth-child(3)").remove()// supprime le 3é élément de la liste donc le 4é remplace le 3é
    console.log("Timeout | NodeList statique toujours identique malgré la suppression du 3éme item de la list :", listElement)
    console.log("Timeout | HTMLCollection MAJ Live =", document.getElementsByClassName("list-item").length)
}, 1000)// Tout ceci après un délai de 1sec (1000 milliseconds)


console.log("\n\n----- 3 .getElementsByClassName(strClassName) -----")
/* 
    3 .getElementsByClassName(strClassName)
    
    Retourne une HTMLCollection "live", qui réagit donc aux potentiels changements arrivants aux éléments qu'elle contient. 

*/
const listItems = document.getElementsByClassName("list-item")
console.log("listItems :", listItems)// HTMLCollection des 4 éléments de la liste
console.log(typeof listItems)// object

setTimeout(() => {
    document.querySelector(".list-item:nth-child(3)").remove()// supprime le 3é élément de la liste donc il ne reste que 2 éléments
    console.log("Timeout | NodeList statique toujours identique malgré la suppression du 3éme item de la list :", listItems)
}, 1000)


console.log("\n\n----- 4 document.getElementById(strID) -----")
/* 
    4 document.getElementById(strID)
    
    Retourne un objet élément en fonction de l'ID passé en argument. 
    
    Cette méthode est seulement accessible via l'objet document, pas sur les éléments. 
*/
const title = document.getElementById("main-title")
console.log(title)// Retourne tout l'élément "main-title" en tant qu'objet : class, id, contenu ...
// <h1 class="title" id="main-title" style="background-color: crimson; font-size: 40px;">Lorem ipsum dolor sit amet.</h1>


console.log("\n\n----- 5 document.getElementsByTagName(strTag) -----")
/* 
    5 document.getElementsByTagName(strTag) TagName étant le nom d'une balise
    
    N'accepte qu'un élément en argument, pas de sélecteur contenant plusieurs éléments.
    
    Retourne une HTMLCollection.
*/
const inputs = document.getElementsByTagName("input")
console.log(inputs)// Retourne la HTMLCollection de tous les inputs de la page ->
/* HTMLCollection(3) [
     input#name,
     input#phone,
     input#age,
     name: input#name,
     phone: input#phone,
     age: input#age
   ]

*/

console.log(inputs["name"])// À noter, que si le ou les éléments ont un ID,
// ils seront sélectionnables via la bracketNotation dans la HTMLCollection retourné.