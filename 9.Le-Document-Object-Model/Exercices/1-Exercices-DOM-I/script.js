/*
    1. Sélectionnez et changez la couleur du <h1> en "plum" en JavaScript.
*/
const h1 = document.querySelector("h1")
h1.style.color = "plum"


/*
    2. Sélectionnez le paragraphe sous le titre à l'aide de son ID.

    Deux façons de faire sont possibles.
*/
const paragWithQuerySelector = document.querySelector("#subtitle")
console.log(paragWithQuerySelector)
const paragWithGetElementById = document.getElementById("subtitle")
console.log(paragWithQuerySelector)

/*
    3. Loggez le texte du troisième <li> dans la console.
*/
//Version querySelector()
console.log(document.querySelector(".list li:nth-child(3)").textContent)
//Version HTMLCollection
console.log(document.querySelector(".list").children[2].textContent)


/*  
    4. Loggez le contenu de l'attribut "src" de l'image dans la console.
*/
console.log(document.querySelector("img").src)//Retourne ->
http://localhost:63342/js-from-az/9.Le-Document-Object-Model/Exercices/1-Exercices-DOM-I/images/cat.jpg

console.log(document.querySelector("img").getAttribute("src"))//Retourne -> images/cat.jpg



/*
    5. Rajoutez un <li> contenant le texte "Nouveau LI !" à la liste. 
*/
const list = document.querySelector(".list")
const newLi = document.createElement("li")
newLi.innerText = "Nouveau LI !"
list.appendChild(newLi)