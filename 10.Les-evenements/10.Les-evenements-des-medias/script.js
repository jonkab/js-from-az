/* 
    On peut intégrer de la musique et des vidéos à l'aide des éléments <audio> et <video>.
    Ces élèments peuvent réagir à énormément d'évènements en rapport avec ces éléments.

    Découvrons ensemble : pause, play, loadeddata, playing, progress, etc...
*/
    const video = document.querySelector("video")

    video.addEventListener("loadeddata", () => console.log("Data loaded"))

    video.addEventListener("play", () => console.log("play"))

    video.addEventListener("pause", () => console.log("pause"))

    video.addEventListener("timeupdate", () => console.log("timeupdate"))

    video.addEventListener("volumechange", () => console.log("volumechange"))



/* 
    Même combat pour l'élément <audio>.
*/

    const audio = document.querySelector("audio")

    audio.addEventListener("loadeddata", () => console.log("Data loaded"))

    audio.addEventListener("play", () => console.log("play"))

    audio.addEventListener("pause", () => console.log("pause"))

    audio.addEventListener("timeupdate", () => console.log("timeupdate"))

    audio.addEventListener("volumechange", () => console.log("volumechange"))
