/* 
    1. Node: cloneNode(deepBooleen)

    La méthode cloneNode permet de cloner un noeud (élément, commentaire, texte).
    Si le paramètre booléen "deep" est true, on effectue un clonage profond, c'est à dire de l'élément et de tous ses enfants.
    Sinon on clone seulement l'élément sans ses enfants.

    Valeur de retour : Le noeud cloné.
*/
const list = document.querySelector(".list")
const deepListClone = list.cloneNode(true)//Clonage profond
const simpleListClone = list.cloneNode()//Clonage profond
console.log(deepListClone)// Retourne ->
/*
    <ul class="list">
        <li class="item">Lorem, ipsum dolor.</li>
        <li class="item">Lorem, ipsum dolor.</li>
        <li class="item">Lorem, ipsum dolor.</li>
        <li class="item">Lorem, ipsum dolor.</li>
        <li class="item">Lorem, ipsum dolor.</li>
    </ul>
*/

console.log(simpleListClone)// Retourne -> <ul class="list"></ul>



