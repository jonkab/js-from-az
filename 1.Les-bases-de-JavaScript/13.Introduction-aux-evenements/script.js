/* 
    1. Les événements.

    Les évènements permettent à l'utilisateur d'une page web d'intéragir avec celle-ci.
    Voici quelques évènements très connus : click, submit, input, mousedown/up/over,
    drag&drop, load, scroll, touch, etc ...

*/
//À savoir que les écouteurs d'événements s'utilisent sur les éléments du DOM
//Avec la méthode associée addEventListener()
/*
    Cette fonction prend en argument minimum 2 paramètres + 1 optionnel :
    1- l'événement écrit en chaine de caractère ex: "click"
    2- une fonction que l'on aura créée au par avant pour dire ce que l'on veut faire
    3- et l'optionnel : un objet d'options pour configurer l'écouteur d'événements,
        telles que les propriétés capture, once, et passive.

    Voici un exemple qui suit avec en 1er la déclaration de la fonction :
        - handleClick()
    Fonction qui pour le test selectionnera l'élément title pour lui ajouter une
    chaîne de caractère "a" à la suite de son texte actuel.
*/
function handleClick() {//Ici
    console.log("Clicked !");
    title.textContent = `${title.textContent + "a"}`;
}
//En 2ᵉ la déclaration de la variable title en lui affectant le selecteur "h1"
const title = document.querySelector("h1");//du DOM
//grâce à l'objet JS document qui a la méthode associée .querySelector("")

//Ici, je n'ai plus qu'à utiliser addEventListener() sur le title
title.addEventListener("click", handleClick);//En choisisant l'événement sur
//lequel je veux intéragir, ici, click et en lui passant la fonction handleClick


//Si vous avez besoin d'accéder aux détails de l'événement (par exemple, les coordonnées
// du clic, la touche de clavier pressée, etc.), vous pouvez ajouter le paramètre
// event dans la définition de la fonction.
function handleLoad (event){//Déclaration de handleLoad() pour agir au moment de l'événement load
    console.log(event);//On log les détails de l'événement
    console.log("Loaded !")
}
//Voici un autre exemple d'utilisation d'écouteur d'événement, ici, "load"
window.addEventListener("load", handleLoad);//sur l'objet window en lui passant
//la fonction handleLoad

