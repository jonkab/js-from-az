/**
 * Coder une modale qui s'ouvre au clic d'un bouton et se ferme
 * soit au clic du layer de la modale,
 * soit au clic du bouton de fermeture.
 * La modale est toujours centré dans la fenêtre.
 */

const body = document.body
const btnModal = document.querySelector(".btn-modal")
const modal = document.querySelector(".modal")

btnModal.addEventListener("click", handleClickOpenModal)
function handleClickOpenModal(){
    body.classList.add("modal-open")
}

modal.addEventListener("click", handleClickCloseModal)
function handleClickCloseModal(e){
    e.stopPropagation()
    if(e.target.classList.contains("modal") || e.target.classList.contains("btn-close"))
    body.classList.remove("modal-open")
}