//Méthode full JS - Chaque élément traité séparément
const span = document.querySelectorAll("span")
const img = document.querySelectorAll("img")
//span.forEach(el => el.addEventListener("click", handleSpoilerText))

//img.forEach(el => el.addEventListener("click", handleSpoilerImg))

function handleSpoilerText(e) {
    console.log(e)
    e.target.style.backgroundColor = "#000"
}
function handleSpoilerImg(e) {
    console.log(e)
    e.target.style.filter = "blur(8px)"
}


//Méthode full JS - Chaque élément traité dans la même fonction en s'appuyant sur l'élément parent
const container = document.querySelector(".container")

//container.addEventListener("click", handleSpoiler)

function handleSpoiler(e) {
    //console.log(e)
    console.log(e.target.nodeName)
    if(e.target.nodeName === "SPAN") {
        console.log(e.target.nodeName)
        e.target.style.backgroundColor = "#000"
    }
    if(e.target.nodeName === "IMG") {
        console.log(e.target.nodeName)
        e.target.style.filter = "blur(8px)"
    }
}


//Méthode semi JS semi CSS - Plus optimisé et géré seulement via des class CSS
const jsSpoilers = document.querySelectorAll(".js-spoiler")

jsSpoilers.forEach(spoiler => spoiler.addEventListener("click", toggleSpoiler))

function toggleSpoiler(e) {
    e.target.classList.add("js-spoiler-revealed")
}