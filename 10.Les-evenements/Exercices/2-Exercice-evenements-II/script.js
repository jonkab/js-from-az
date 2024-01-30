/*
    Faites-en sorte que le cercle suive votre souris.
    Le pointeur de votre souris doit se trouver parfaitement au milieu du cercle.
*/
const circle = document.querySelector(".circle")
document.addEventListener("mousemove", handleCircle)



function handleCircle(e) {
/*
    En se basant sur le viewport(offset) et en jouant sur les propriétés CSS top et left
    Important : il est déconseillé pour les animations gourmandes et de manière générale
    d'utiliser les propriétés CSS comme ceci. Car elles provoquent du repaint et du reflow.

    Fonctionnement du Reflow (Reflux) :
    - Le reflow est un processus où le navigateur recalcule la disposition de tout ou partie
    de la page web en réponse à un changement. Cela peut se produire pour diverses raisons,
    telles que des modifications de la taille des éléments, du contenu, de la structure
    du DOM, ou des styles CSS appliqués aux éléments.

    - Les propriétés telles que width, height, margin, padding, left, top, etc., lorsqu'elles
    sont modifiées, peuvent déclencher un reflow car le navigateur doit recalculer la
    disposition de l'élément et potentiellement de ses éléments enfants et voisins.

    Fonctionnement du Repaint (Redessin) :
    - Le repaint est un processus où le navigateur redessine une partie de la page.
    Contrairement au reflow, le repaint ne modifie pas la disposition de la page, mais il peut
    être coûteux en termes de performances car il implique le redessinage des pixels à l'écran.

    - Des modifications apportées à des éléments visuels, comme la couleur de fond, les ombres,
    et les contours, peuvent déclencher un repaint.
*/
    //circle.style.top = `${e.clientY - circle.offsetHeight/2}px`
    //circle.style.left = `${e.clientX - circle.offsetWidth/2}px`

/*
    En se basant sur toute la page(pageX,Y) et en jouant avec la propriété et fonction CSS
    recommandé "transform: translate()"

    La propriété transform est une propriété polyvalente qui permet d'effectuer
    une transformation 2D ou 3D sur un élément, et translate() est l'une des fonctions utilisables
    avec cette propriété ainsi que les fonctions scale(), rotate(), et skew().

    En effet, il est préférable d'utilisé translate() qui est optimisé pour les performances
    car il ne déclenche ni reflow ni repaint lors de son exécution. Au lieu de cela, le navigateur
    peut utiliser des optimisations comme l'accélération matérielle pour déplacer l'élément.
    Permettant des animations plus fluides et moins gourmandes en ressources CPU.

    Lorsque transform est utilisé, le navigateur est capable de créer une couche indépendante
    pour l'élément. Cela signifie que les modifications apportées à cet élément n'affectent pas le
    reste de la page, réduisant ainsi le travail que le navigateur doit faire pour recalculer la
    disposition ou redessinez l'élément.
*/
    circle.style.transform = `translate(calc(${e.pageX}px - 50%), calc(${e.pageY}px - 50%))`
}