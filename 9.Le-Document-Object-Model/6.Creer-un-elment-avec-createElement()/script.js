/* 
    Il est très courant de vouloir créer des éléments en JavaScript.
    Découvrons ensemble la façon de faire classique.
*/

/* 
    1. Document : createElement(tagName)  

    Créer un objet Element en fonction de l'argument de type string fourni.


    2. Node : appendChild(child)

    Rajoute un noeud enfant à la fin de la liste d'enfants de l'élément appelant.


    3. EventTarget : addEventListener(event, callback)

    Rajoute un écouteur d'événement à un élément, nous reviendrons très en détail sur cette méthode plus tard.
*/
const list = document.querySelector(".list")
const btn = document.querySelector(".create-btn")

// Grâce à l'écouteur d'événement addEventListener() que l'on met sur le bouton
// on va écouter le click pour qu'à la suite du click, il déclenche la fonction
// callback qu'on lui passe :
btn.addEventListener("click", handleClick)

function handleClick() {
    // Grâce à createElement() on créer l'élément que l'on veut
    const li = document.createElement("li")

    // Grâce à .textContent on ajoute du texte dans le <li>
    li.textContent = "Hello World !"

    // Grâce à appendChild() on ajoute un <li> dans la list <ul>
    list.appendChild(li)
}