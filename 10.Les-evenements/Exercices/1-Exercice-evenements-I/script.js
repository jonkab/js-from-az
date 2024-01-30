/*
    Prévenez le comportement par défaut du formulaire afin de récupérer les données écrites
    dans les inputs et les afficher dans les paragraphes correspondants.
*/
const form = document.querySelector("form")
const inputs = document.querySelectorAll("form input")
const firstnameText = document.querySelector(".firstname")
const lastnameText = document.querySelector(".lastname")

form.addEventListener("submit", handleForm)

function handleForm(e) {
    e.preventDefault()
    firstnameText.textContent = `Votre prénom : ${inputs[0].value}`
    lastnameText.textContent = `Votre nom : ${inputs[1].value}`

    //Si on veut vider les champs du formulaire en une fois
    //Méthode reset()
    //form.reset()

    //Méthode en remplaçant la propriété "value" à vide
    inputs.forEach(input => input.value = "")
}

/* Version en voulant jouer en plus avec l'event input et l'objet event
const form = document.querySelector("form")
const firstnameInput = document.querySelector("#firstname")
const lastnameInput = document.querySelector("#lastname")
const firstnameDisplay = document.querySelector(".firstname")
const lastnameDisplay = document.querySelector(".lastname")
const dataForm = {}

form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    firstnameDisplay.textContent = firstnameDisplay.textContent + dataForm.firstname
    lastnameDisplay.textContent = lastnameDisplay.textContent + dataForm.lastname
}

form.addEventListener("input", handleInput)

function handleInput(e) {
    if(e.target.id === firstnameInput.id) {
        dataForm.firstname = e.target.value
    }
    if(e.target.id === lastnameInput.id) {
        dataForm.lastname = e.target.value
    }
    return dataForm
}
*/