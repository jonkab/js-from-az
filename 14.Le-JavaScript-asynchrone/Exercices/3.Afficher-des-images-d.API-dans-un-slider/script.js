

/*
    Code slider
*/

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