/*
    Les "touch events" permettent de prendre en compte le "clic" d'un doigt sur un écran tactile.

    À tester en mode responsive grâce aux options fournies dans la DevTools du navigateur.

    Un point sera afficher pour remplacer le curseur de la souris afin de simuler un doigt.
*/

document.addEventListener("touchstart", () => console.log("touchstart"))

document.addEventListener("touchend", () => console.log("touchend"))

document.addEventListener("touchmove", () => console.log("touchmove"))

//À noter que l'event "click" fonctionne aussi dans le mode simulation mobile responsive
document.addEventListener("click", () => console.log("click"))

