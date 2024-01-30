/*
    Créer un menu personnalisé, au clic droit, pour toute la page, à la place du menu par défaut.
    Ce menu contient des boutons permettant de changer la couleur de fond de la page.

    Pour ce faire, j'utilise l'event "contextmenu" qui se déclenche à partir d'un élément du DOM
    lorsque l'utilisateur tente d'ouvrir un menu contextuel.
    Cet event est généralement déclenché par un clic-droit ou en utilisant la touche du menu contextuel.
*/
    const customMenu = document.querySelector(".custom-menu")

    //Je commence par écouter l'event sur "document" car je veux le menu sur toute la page
    document.addEventListener("contextmenu", handleCustomMenu)

    //Je crée une fonction handleCustomMenu() pour gérer le menu personnalisé.
    function handleCustomMenu(e) {
        /*
            1- Je commence par bloquer le comportement par défaut de l'event, sinon
            le menu contextuel natif va s'afficher aussi.
        */  e.preventDefault()


        /*
            2- J'affiche le menu personnalisé volontairement caché par défaut.
        */  customMenu.style.display = "block"


        /*
            3- Je gére son positionnement par rapport à l'endroit où a été fait
            le clic droit dans la page pour toujours l'avoir à côté de la souris.
        */  customMenu.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`
    }


    //J'écoute l'event "click" sur "document" car je veux que le menu puisse se fermer au clic gauche
    document.addEventListener("click", handleClick)

    //Je crée la fonction handleClick() pour gérer le masquage du menu personnalisé
    function handleClick() {
        //Je le cache en CSS
        customMenu.style.display = "none"
    }


    //J'écoute l'event "click" sur "customMenu" car je veux que chaque bouton du menu
    //change la couleur de fond de la page.
    customMenu.addEventListener("click", handleCustomMenuFeature)

    //Je crée la fonction handleCustomMenuFeature() pour gérer la couleur de fond de la page
    function handleCustomMenuFeature(e) {
        /*
            1- Je commence par stopper la propagation de l'event, sinon le menu va
            disparaitre à chaque fois que je choisis une couleur.
        */  e.stopPropagation()

        /*
            2- Je change la propriété CSS background-color du body en récupérant la valeur
            des couleurs correspondantes à chaque bouton grâce à leur data-attributes "data-color"
            récupérable avec la propriété dataset
        */  document.body.style.backgroundColor = `${e.target.dataset.color}`
    }