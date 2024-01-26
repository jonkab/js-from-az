/* 
    Certains éléments ont déjà des écouteurs d'évènement par défaut et
    vont donc avoir un comportement spécial quand on les déclenche.

    Les formulaires vont tenter d'envoyer les données vers une page.

    Les liens nous font nous déplacer au click.

    Parfois, on a envie de prévenir ces comportements par défaut,
    on utilisera alors EventObject.preventDefault().

    C'est à dire que l'on bloquera le comportement par défaut de l'évènement en question.

    Testons tout ça...
*/

/*
*   Les liens et leurs redirections
* */
const links = document.querySelectorAll("a")
console.log(links)
links.forEach(link => link.addEventListener("click", handleClick))
function handleClick(e) {
    e.preventDefault()
    console.log("Redirection de la page stoppée.")
}


/*
*   Les formulaires et leurs soumissions de données
* */
const form = document.querySelector("form")
form.addEventListener("submit", handleSubmit)
function handleSubmit(e) {
    e.preventDefault()
    console.log("Soumission du formulaire stoppée.")
}