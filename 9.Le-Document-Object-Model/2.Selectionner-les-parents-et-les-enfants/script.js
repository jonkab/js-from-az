/*  
    Les éléments imbriqués de notre page HTML deviennent des objets imbriqués du DOM après analyse d'un navigateur.

    <div>
        <p>Hello</p>
    </div>
    
    =>

    {
        tag: "div",
        content: "",
        children: [
            {
                tag: "p",
                content: "Hello"
            },
            ...
        ]
    }
    // 🔼 Ceci est une image pour vous aider à comprendre, ça ne représente pas les propriétés exactes utilisées.

    Découvrons les propriétés pratiques liées aux relations parents / enfants.
*/

document.addEventListener("DOMContentLoaded", (event) => {

    const card = document.querySelector(".card")

    // Renvoie l'objet de l'élément
    console.log(card)

    /* Renvoie un tableau */
    // NodeList
    console.log(card.childNodes)// Renvoie Un tableau de tous les types de nœud (élément, textes, commentaires...)
    //HTMLCollection
    console.log(card.children)// Renvoie un tableau contenant ses éléments enfants, mais contient uniquement des nœuds de type éléments.

    // Renvoie l'élément enfant sous forme d'objet, mais uniquement un nœud de type élément.
    console.log(card.children[1])//Étant dans un tableau, on peut sélectionner un enfant directement via son index

    console.log(card.firstChild)//Renvoie le 1é nœud(tout type de nœud) enfant
    // donc s'il y a du text, un simple espace ou plusieurs, des retours à la ligne ou tabulations, etc
    // avant un nœud de type élément alors le 1é enfants ne sera pas un élément, mais un type de nœud de ceux cités avant.

    // Renvoie le 1é élément enfant sous forme d'objet
    console.log(card.firstElementChild)// mais uniquement un nœud de type élément.

    console.log(card.lastChild)//Renvoie le dernier nœud(tout type de nœud) enfant
    // donc s'il y a du text, un simple espace ou plusieurs, des retours à la ligne ou tabulations, etc
    // donc même principe que pour "firstChild" mais dans pour le dernier enfant.

    // Renvoie le dernier élément enfant sous forme d'objet
    console.log(card.lastElementChild)// mais uniquement un nœud de type élément.


    const title = document.querySelector("h2")
    console.log(title)
    console.log(title.nextSibling)//Renvoie uniquement le frère direct suivant, mais tous types de nœud confondu, mais si frère il y a, sinon "null"
    console.log(title.nextElementSibling)// Renvoie uniquement le frère direct suivant, mais un type élément et si frère il y a, sinon "null"
    console.log(title.previousSibling)//Renvoie uniquement le frère précedent mais tous types de nœud confondu, mais si frère il y a, sinon "null"
    console.log(title.previousElementSibling)// Renvoie uniquement le frère direct précedent, mais un type élément et si frère il y a, sinon "null"
    // Par exemple ici, elle renvoie "null" car le title n'a pas d'élément frère avant lui


    console.log("------------ Debuggage -------------")
    console.log("------ parentElement -----")
    console.log(title.parentElement)
    console.log("------ fin -----")

    console.log("\n\n------ parentNode -----")
    console.log(title.parentNode)// Renvoie le parent du nœud spécifié dans l'arborescence de DOM.
    console.log("------ fin -----")

    console.log("\n\n------ parentElement -----")
    console.log(title.parentElement)// Renvoie le parent du nœud DOM (Element) ou null si ce dernier n'a pas de parent ou si le parent n'est pas un Element du DOM.

    console.log(title.parentElement.parentElement)// On peut aussi escalader les éléments parents en chaînant la propriété

    console.log(title.nodeName)// Renvoie le nom du nœud courant dans une chaîne en fonction du type de nœud.
    // Par exemple si le nodeName est une balise HTML alors,
    // elle renvoie le nom de la balise ici "H2" en type string.

})




