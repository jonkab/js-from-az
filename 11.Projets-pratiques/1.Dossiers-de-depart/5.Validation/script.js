/*
    Coder un input animé et stylé
*/
const container = document.querySelector(".container")
const inputFirstName = document.getElementById("first-name")
const inputErrorMsg = document.querySelector(".input-error-msg")
const regExp = /[0-9!@#$%^&*¨'"`£€+=.:;,|/\\?_()\[\]{}§<>]/g

/*
* Écoute au clic
* */
container.addEventListener("click", handleClickAndMoveLabel)
function handleClickAndMoveLabel(e) {
    //console.log()
    e.currentTarget.firstElementChild.classList.add("label-animated--goUp")
}

/*
* Écoute au blur
* */
inputFirstName.addEventListener("blur", handleBlurInput)
function handleBlurInput(e) {
    if (e.target.value === "") {
        e.target.previousElementSibling.classList.remove("label-animated--goUp")
    }
}

/*
* Écoute au focus
* */
inputFirstName.addEventListener("focus", handleInputFocus)
function handleInputFocus(e) {
    e.currentTarget.previousElementSibling.classList.add("label-animated--goUp")
}

/*
* Écoute à l'input
* */
container.addEventListener("input", handleInput)
function handleInput(e) {

    inputErrorMsg.textContent = ""
    inputFirstName.classList.remove("input-first-name--error")
    inputErrorMsg.classList.remove("active")

    if (!/^[a-zA-Z-]+$/.test(e.target.value)
        && e.target.value !== ""
        && e.target.value.match(regExp) !== null) {

        inputFirstName.classList.add("input-first-name--error")
        inputErrorMsg.textContent = `Les ${e.target.value.match(regExp)} ne sont pas autorisés.`
        inputErrorMsg.classList.add("active")
    }
}


//const regExpPswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
/*
    PASSWORD - Règle RegExp, de ce que doit contenir a minima le mot de passe

    1- ^ : Le ^ au début signifie que la correspondance doit commencer au début de la
    chaîne. Le $ à la fin signifie que la correspondance doit se terminer à la fin
    de la chaîne. Ainsi, l'expression régulière ne correspondra qu'aux chaînes qui
    correspondent exactement au motif de l'expression régulière sur toute leur
    longueur, sans rien avant ou après.

    2- ?= : Quand il y a ?= c'est la syntaxe d'un lookahead positif. Un lookahead
    positif effectue une vérification sans consommer de caractères dans la chaîne
    (c'est-à-dire que la position de recherche dans la chaîne ne s'avance pas).
    Il vérifie simplement qu'une certaine sous-chaîne peut être trouvée à la position
    actuelle dans la chaîne.

    3- . : Le point est un caractère générique dans les expressions régulières qui
    correspond à n'importe quel caractère (sauf un saut de ligne, à moins que
    certaines options spécifiques ne soient activées).

    4- * : L'astérisque indique une quantité "zéro ou plus" du caractère précédent.
    Donc .* correspond à zéro ou plus de n'importe quels caractères.

    5- Contient au moins un chiffre ((?=.*[0-9])).
    6- Contient au moins un caractère spécial parmi !@#$%^&* ((?=.*[!@#$%^&*])).
    7- Se compose de 6 à 16 caractères qui peuvent être des lettres majuscules ou
     minuscules, des chiffres, ou les caractères spéciaux :
        ⇨ de a à z de A à Z de 0 à 9 et autorisé !@#$%^&* ([a-zA-Z0-9!@#$%^&*]{6,16})

    Si sans limite de caractère (mais 1 minimum) 2 possibilités pour remplacer {6,16} :
    - soit {1,}
    - soit avec le quantifieur + équivalent à {1,}
*/