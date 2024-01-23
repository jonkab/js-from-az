/* 
    Il est assez courant de vouloir changer la valeur de l'attribut d'un élément en JavaScript,
    comme "src", "class", "lang", "name", "type" etc...

    Lorsque le DOM est créé à partir des fichiers fournis au navigateur, quasiment chaque
    attribut devient une propriété d'un objet représentant un élément.

    Seuls les attributs non-standards ne sont pas implémentés en tant que propriété. 
    Ces attributs non-standards seront manipulables via certaines méthodes.
*/
const kittyImg = document.querySelector("img")
console.dir(kittyImg)
console.log(kittyImg.src)// Retourne l'url de l'image -> http://localhost:63342/js-from-az/9.Le-Document-Object-Model/5.Manipuler-les-attributs/ressources/kitty1.jpg
console.log(kittyImg.alt)// Retourne le alt de l'image -> kitty
kittyImg.className = "kitty-img"// Ajoute une class à l'image | Attention cependant cette manière écrase les class existantes
kittyImg.id = "kitty1"// Ajoute un id à l'image


/* 
    1. Element : attributes

    Retourne une collection live (NamedNodeMap) de tous les attributs d'un élément.
    Chaque attribut de cette liste est un objet contenant des informations sur l'attribut en question.
    On peut utiliser ce genre de liste itérable avec for...of ou les transformer en tableau avec [...nodemap],
    accédant ainsi aux méthodes pratiques des tableaux.
*/
const attrKittyImg = kittyImg.attributes
console.log(attrKittyImg)// NamedNodeMap {0: src, 1: alt, 2: class, 3: id, src: src, alt: alt, class: class, id: id, length: 4}

// On peut parcourir la liste avec une boucle for...of par exemple
for (let attrKittyImgElement of attrKittyImg) {
    console.log(attrKittyImgElement)// Retourne chaque attribut de la liste (src, alt, class, id)
}

/*
    2. Créer un attribut personnalisé avec data-x

    On peut utiliser la notation data-attr pour créer des attributs de données contenant des valeurs utiles
    qu'on pourra ensuite retrouver avec la propriété dataset.

    - Source MDN qui parle de la propriété dataset : https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
    - Source MDN qui parle de l'interface DOMStringMap de dataset : https://developer.mozilla.org/en-US/docs/Web/API/DOMStringMap

    Voici des data-attr dans notre exemple de la balise img kitty :
    <img src="ressources/kitty1.jpg" data-info="cat" data-animal="cat" alt="kitty">

*/
console.log(kittyImg.dataset)// Retourne l'objet -> DOMStringMap{info: 'cat', animal: 'cat'}


/* 
    3. Element : setAttribute(strAttrName, strAttrValue)

    Rajoute un attribut à un élément.
    Cette méthode est utile pour rajouter des attributs non-standards. 
    Tous les autres sont accessibles avec la dot notation.

    Les attributs non-standards sont assez peu utilisés, on peut les mettre en place avec la méthode
    setAttribute() ou directement à la main dans l'HTML en fonction du besoin.

    Voici un exemple :
*/
kittyImg.setAttribute("custom", "xyz")
console.log(kittyImg)


/* 
    4. Element : getAttribute(strAttrName)

    Donne la valeur d'un attribut.
    Fonctionne comme la dot notation dans beaucoup de cas. 
*/
console.log(kittyImg.getAttribute("custom"))


/*
    5. Element : hasAttribute(strAttrName)

    Renvoie true ou false en fonction de la présence d'un attribut.
*/

console.log(kittyImg.hasAttribute("src"))// true
console.log(kittyImg.src && true)// true - version sans avoir à passer par la méthode


/*
    6. Element : removeAttribute(strAttrName)

    Supprime un attribut.

*/
    //kittyImg.removeAttribute("src")// Supprime l'attribut src
    //console.log(kittyImg)// Retourne -> <img data-info="cat" data-animal="cat" alt="kitty" class="kitty-img" id="kitty1" custom="xyz">

// À ne pas confondre avec cette façon de faire :
//kittyImg.src = ""// qui ne supprime pas totalement l'attribut, mais seulement la valeur
//console.log(kittyImg)// Retourne -> <img src="" data-info="cat" data-animal="cat" alt="kitty" class="kitty-img" id="kitty1" custom="xyz">

/* 
    7. Element : toggleAttribute(strAttrName)

    Supprime un attribut s'il est présent, le rajoute s'il ne l'est pas.
*/
const input = document.querySelector("input")

//L'attribut disabled n'existant pas, il va l'ajouter et désactivera donc l'input
input.toggleAttribute("disabled")// on ne peut plus utiliser l'input
