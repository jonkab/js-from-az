/*
    Copier-coller

    Je veux pouvoir copier le texte de la card aprés avoir cliqué sur le bouton "copier" et le retourner dans la console.

    Le bouton sera animé au clic, l'animation devra remplacer le texte "copier" par "collé" et le picto "Livre" par "Confetti" et ce pendant une durée de 1 sec, aprés le bouton redevient comme avant.
*/

const copyClipboardBtn = document.querySelector(".copy-clipboard-btn")
const textOriginBtnClipboard = document.querySelector(".copy-clipboard-btn").textContent
const paragText = document.querySelector(".parag").textContent

copyClipboardBtn.addEventListener("click", function () {
    writeClipboardText(paragText)

    navigator.clipboard
        .readText()
        .then((clipText) => (console.log(clipText)))

    copyClipboardBtn.textContent = "Collé 🎉"
    setTimeout(() => {
        copyClipboardBtn.textContent = textOriginBtnClipboard
    }, 1500);
})

async function writeClipboardText(textToClipboard) {
    try {
        await navigator.clipboard.writeText(textToClipboard);
    } catch (error) {
        console.error(error.message);
    }
}
