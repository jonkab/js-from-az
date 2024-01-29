/* 
    Voici les évènements de pointage : click, dblclick, mouseup, mousedown.

    L'objet d'évènement fourni à la callback nous donnera donc des informations spécifiques au pointage.
*/
const clicInfo = document.querySelector(".clic-info")
const box = document.querySelector(".box")

document.addEventListener("click", handleClick)//Le clique simple

//document.addEventListener("dblclick", handleClick)//Le double clique
//En général, le délai de double-clic est d'environ 200 à 500 millisecondes (ms).
//Il peut être influencé par les paramètres du système d'exploitation de l'utilisateur.

//document.addEventListener("mousedown", handleClick)//Au moins ou le doigt est enfoncé mais pas encore relaché
//document.addEventListener("mouseup", handleClick)//Au moins ou le doigt est relaché



function handleClick(e) {
    console.log(e)
    clicInfo.textContent = `
        Event : ${e.type},
        pageX (par rapport à toute la page) : ${e.pageX}, pageY (par rapport à toute la page) : ${e.pageY},
        clientX (par rapport au viewport) : ${e.clientX}, clientY (par rapport au viewport) : ${e.clientY},
        offsetX (par rapport au bord gauche) : ${e.offsetX}, offsetY (par rapport au au bord haut) : ${e.offsetY},   
    `
}


/* 
    Il existe également d'autres évenements en rapport avec la souris, sans le clic.

    Notamment : mouseover, mousemove, mouseout, mouseenter, mouseleave, wheel 
*/

//Track les mouvements de la souris
//box.addEventListener("mousemove", () => console.log("Mousemove"))

//Track quand la souris rentre dans l'élément et inclut aussi s'il y a des enfants
//box.addEventListener("mouseenter", () => console.log("Mouseenter"))

//Track quand la souris sort de l'élément et inclut aussi s'il y a des enfants
//box.addEventListener("mouseleave", () => console.log("Mouseleave"))

//Track quand la souris survol l'élément
//box.addEventListener("mouseover", () => console.log("Mouseover"))

//Track quand la souris sort de l'élément
//box.addEventListener("mouseout", () => console.log("Mouseout"))


//Track la molette de la souris quand on la fait tourner. À ne pas confondre avec l'event "scroll"
document.addEventListener("wheel", () => console.log("Molette"))