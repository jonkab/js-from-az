/*
  Une des actions les plus courantes avec les évènements est de faire un "class toggle", c'est-à-dire un changement de classe html.

  Le fait de changer une classe permet tout simplement d'altérer le style d'un élément en question.
  
  C'est la porte ouverte à une infinité d'animations et d'interactions possibles.
*/
const box = document.querySelector(".box")

box.addEventListener("click", toggleAnimation)

function toggleAnimation(e){
    e.target.classList.toggle("active")
}


/*
  L'API "classList" est disponible sur tous les éléments du DOM.
  C'est un ensemble de méthodes pratiques concernant les classes. 
  
  Il existe : 
  - add(classe) // Ajoute une ou plusieurs classes passées en argument
  - remove(classe) // retire la classe s'il la trouve
  - contains(classe) // retourne un boolean s'il trouve ou non la classe
  - toggle(classe) // classe supprimée si présente, rajoutée si absente
  - replace(classeÀRemplacer, classeÀRajouter)

  On peut aussi changer une classe en utilisant la propriété .className des éléments du DOM.
*/

