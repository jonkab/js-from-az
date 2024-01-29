/* 
    L'évènement scroll se déclenche quand le contenu de l'élément sur lequel il est attaché subit un scroll.
*/
    const info = document.querySelector(".info")

    //Ici je viens mettre un écouteur d'événement "scroll" sur toute la page (document)
    //qui permet quand on défile la page en scrollant de voir de combien de pixel on scroll dedans
    //et afin d'en connaitre la position
    document.addEventListener("scroll", handleScroll)//A faire avec parcimonie,
    //Ceci n'est pas anodin pour les performances de la page il faut donc
    //Faire attention à ce sur quoi on pose un écouteur.
    //Généralement ils sont directement posés sur des éléments du DOM.
    //Mais dans certain cas et en fonction du besoin on va pouvoir l'utiliser sur "document"
    //Les bonnes pratiques d'usage et problématiques de performances seront vu prochainement.

    function handleScroll(e){
        console.log("Scroll", e)
        info.textContent = `Body ${window.scrollY}`
    }

/*
  L'évènement resize est disponible seulement sur l'objet window.
  Il se déclenche quand on réduit la fenêtre.
*/
//Ici je viens mettre un écouteur d'événement "resize" sur toute la fenêtre (window)
window.addEventListener("resize", () => console.log("Resized !", "innerWidth : ", innerWidth, "innerHeight : ", innerHeight))
//Les bonnes pratiques d'usage et problématiques de performances seront vu prochainement.