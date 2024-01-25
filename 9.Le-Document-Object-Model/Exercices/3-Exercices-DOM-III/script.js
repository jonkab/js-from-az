/*
    1. Faites-en sorte que le premier bouton nous ramène tout en haut du site
    lorsqu'on clique dessus.
*/
const btnUp = document.querySelector(".push-top-button")
btnUp.addEventListener("click", pushToTop)

function pushToTop() {
    //Méthode via la propriété scrollTop
    //document.documentElement.scrollTop = 0

    //Méthode via la méthode scrollTo(x,y)
    //window.scrollTo(0, 0)

    //Méthode via la méthode scrollIntoView({})
    document.body.scrollIntoView({//À la place de "body", on peut aussi mettre "documentElement"
        behavior: "smooth",
        block: "start"
    })
}


/*
    2. Utilisez la méthode .scrollTo() pour scroller jusqu'au milieu
    de la section newsletter lorsqu'on clique sur le bouton .scroll-to-newsletter.

    C'est simplement pour s'exercer, le rendu ne va pas être optimal en termes
    d'UX mais ce n'est pas ce qui compte ici. 👍
*/
const btnNewsletter = document.querySelector(".scroll-to-newsletter")
const divNewsletter = document.querySelector(".newsletter")
btnNewsletter.addEventListener("click", () => {
    window.scrollTo({
        top: (divNewsletter.offsetHeight / 2) + window.scrollY + divNewsletter.getBoundingClientRect().top,
        left: 0,
        behavior: "smooth"
    })
})
