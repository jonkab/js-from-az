// Pour sélectionner un élément
document.body; // Récupère l'élément body
document.getElementById('demo'); // Sélectionne l'élément avec l'id demo
document.querySelector('.demo'); // Sélectionne le premier élément correspondant au sélecteur CSS

// Pour sélectionner plusieurs éléments
const elements = document.querySelectorAll('.demo'); // Sélectionne les éléments correspondant au sélecteur CSS
// Ces méthodes renvoient un objet NodeList enumerable
// On peut parcourir cette liste d'éléments
elements.forEach(element => {
    console.log(element);// objet de type Element
})
// On pourra aussi convertir cet enumerable en tableau
Array.from(elements);

//-- DEMO --//
const demo = document.querySelector(".demoGetInfoDOM");

// Obtenir différentes informations d'un élément :
console.log(`
- demo.getAttribute('id') : ${demo.getAttribute('id')} 
- demo.style : ${demo.style}
- demo.classList : ${demo.classList}
- demo.innerHTML : ${demo.innerHTML}
- demo.innerText : ${demo.innerText}
- demo.textContent : ${demo.textContent}
 `);
demo.getAttribute('class') // Permet de récupérer la valeur d'un attribut
demo.style // Permet de récupérer les styles associés à l'élément (mais pas exploitable en tant que tel, il faut par exemple chaîner la propriété qui nous intéresse pour la manipuler.)
demo.classList // Permet de récupérer la liste des classes associées à un élément
demo.innerHTML // Renvoie le contenu HTML de l'élément
demo.innerText // Renvoie le texte "visuellement rendu" de l'élément
demo.textContent // Renvoie le texte de l'élément

console.log("--------------");
// Modifier un élément :
const demo2 = document.querySelector(".demo2SetInfoDOM");
const linkDemo2 = demo2.querySelector(".link-demo-2");
const boxParagDemo2 = demo2.querySelector(".box-parag-demo-2");

linkDemo2.setAttribute("href", "www.google.fr");//Créé un attribut et lui donne une valeur
linkDemo2.style.fontSize = "18px";//Accède à une propriété CSS puis lui donne une valeur
linkDemo2.classList.add("link--green");//Accède à la list des class puis lui en ajoute

boxParagDemo2.innerHTML = "<p></p>";//J'insère et crée du HTML
boxParagDemo2.querySelector("p").innerText = "J'utilise innerText pour ajouter du texte au paragraphe précédemment créé grâce à <b>innerHTML</b>. Et nous pouvons constater qu'il n'est pas possible d'insérer du html avec innerText.";


console.log("--------------");
// Traverser le DOM
const demo3TraverseDOM = document.querySelector('.demo3TraverseDOM');
const linkDemo3 = document.querySelector('.link-demo-3');

console.log(`
- demo3TraverseDOM.childNodes est un object NodeList : ${demo3TraverseDOM.childNodes}
- demo3TraverseDOM.children est un object HTMLCollection : ${demo3TraverseDOM.children}
- linkDemo3.firstChild est un object HTMLElement : ${linkDemo3.firstChild}
- linkDemo3.firstElementChild est un object HTMLElement : ${linkDemo3.firstElementChild}
- linkDemo3.previousElementSibling est un object HTMLElement : ${linkDemo3.previousElementSibling}
- linkDemo3.nextElementSibling est un object HTMLElement : ${linkDemo3.nextElementSibling}
`);


console.log("--------------");
// Modifier le DOM



console.log("--------------");


console.log("querySelectorAll retourne une nodeList : ",document.querySelectorAll(".demo3 li"));

const lis = document.querySelectorAll(".demo3 li");

//forEach est disponible sur une NodeList, je peux ainsi par exemple
//récupérer le text de chaque nœud et les stocker dans un tableau :
const textArray = [];
lis.forEach(elt => textArray.push(elt.textContent));

console.log("textArray : ", textArray);


//Transform la NodeList en vrai tableau :
const listArray = Array.from(lis);

console.log("listArray : ", listArray);

const txtIpsum = listArray.filter(value => value.innerText.includes("ipsum"));

console.log("Filter result : ", txtIpsum);


const parag = document.createElement("p");

parag.innerText = "Hello !";

document.querySelector("ul").after(parag);

console.log("héritage : ", parag);
