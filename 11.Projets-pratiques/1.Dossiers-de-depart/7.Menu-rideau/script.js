/**
 * Coder un menu rideau caché par défaut
 * puis qui s'ouvre/ferme au clic d'un bouton menu open/close toujours affiché
 * Le menu est toujours calé à gauche de la fenêtre et vient s'étaler
 * en transition sur 50% de la page.
 */
const btnMenu = document.querySelector(".btn-menu")
const menu = document.querySelector(".menu")

btnMenu.addEventListener("click", handleClickOpenCloseMenu)
function handleClickOpenCloseMenu() {
    menu.classList.toggle("menu-open")
    btnMenu.classList.toggle("btn-menu-open")
}