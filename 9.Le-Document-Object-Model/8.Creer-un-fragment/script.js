/* 
    1. Utiliser un fragment avec Document : createDocumentFragment()

    Les fragments permettent de rajouter du contenu sans créer un container pour rien.
    Les éléments contenus dans le fragment se rajoutent tout simplement dans l'élément souhaité. 

*/
const textTitle1 = "Lorem ipsum dolor."
const textTitle2 = "Sit amet."

const fragment = document.createDocumentFragment()

const h1 = document.createElement("h1")
h1.textContent = textTitle1
fragment.appendChild(h1)

const h2 = document.createElement("h2")
h2.textContent = textTitle2
fragment.appendChild(h2)

document.body.appendChild(fragment)