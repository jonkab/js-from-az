/*
*   Coder un slider avec 2 boutons (suivant/précédent)
*   Feature perso en plus :
*   - le slider doit être responsive
*   - utiliser la méthode .scrollIntoView() à la place d'une class CSS pour afficher les slides
* */

const btnScroll = document.querySelectorAll(".btn-scroll")
const images = document.querySelectorAll(".slider-img")

btnScroll.forEach(btn => btn.addEventListener("click", handleClickBtnScroll))
let index = 0
function handleClickBtnScroll(e) {
    //console.log(e.target.getAttribute("data-action"))
    index = index + Number(e.target.getAttribute("data-action"))

    if (index < 0) {
        index = images.length - 1
    }
    else if (index > images.length - 1) {
        index = 0
    }

    images[index].scrollIntoView({
        behavior: "smooth"
    })
}