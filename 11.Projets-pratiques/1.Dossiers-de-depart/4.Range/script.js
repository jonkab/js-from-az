/*
    Coder une range d'Emoji pour évaluer la satisfaction des utilisateurs.
*/
const emojis = ["😠", "🙁", "😐", "🙂", "😁"]
const range = document.getElementById("satisfaction-range")
const emojiValue = document.querySelector(".emoji-value")

range.addEventListener("input", handleRange)

function handleRange(e) {
    emojiValue.textContent = `${emojis[e.target.value - 1]}`
}