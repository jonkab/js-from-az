/* 
  1. La propriété "style"

  Elle peut : 
  A. Retourner le style en ligne d'un élément.
  B. Changer le style en ligne d'un élément si on modifie la valeur d'une de ses propriétés(setter).

  element.style.backgroundColor = "red";

  Notez le camelCase pour le nom des propriétés et la chaîne pour la valeur.
  Attention, on parle ici de style en ligne, donc de style avec une spécificité très haute.

  Si du style inline est déjà présent, ça ne le supprime pas, mais le rajoute à la fin de ce dernier.

*/

const box = document.querySelector(".box")
console.log(box.style)// Retourne l'objet style et toutes les propriétés de style disponible
box.style.backgroundColor = "blue"// Ajoute du style inline et surcharge le style.css
console.log(box.style.backgroundColor)// Retourne la valeur "blue" de la propriété backgroundColor

//box.setAttribute("style", "background-color: gold") // Ajoute ou remplace le style inline
//de l'élément. À éviter si l'on a déjà plusieurs propriétés inline et que l'on veut en garder.

//La méthode window.getComputedStyle() donne la valeur calculée finale de toutes les propriétés CSS sur un élément.
//console.log(window.getComputedStyle(box))
console.log(window.getComputedStyle(box).height)// Retourne uniquement la valeur de la propriété calculée de la height (200px)

// La propriété cssText
console.log(box.style.cssText)// Retourne une string des propriétés css inline
box.firstElementChild.style.cssText = "color: red; font-size: 30px;"// Ajoute du style inline
box.firstElementChild.style.cssText = "color: salmon;"// Ajoute du style inline en écrasant tout l'éxistant
console.log(box.firstElementChild.style.cssText)// Retourne -> color: salmon;

