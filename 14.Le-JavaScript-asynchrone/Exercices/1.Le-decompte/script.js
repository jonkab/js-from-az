/*
    Exercice "le décompte

    Faire un décompte de 4 jours avec l'objet Date et la méthode setTimeout(), en affichant :
    - nb de jrs | nb d'heures | nb de minutes | nb de secs
*/
const countdownElt = document.querySelector(".countdown");
const countdownOverElt = document.querySelector(".countdownOver");

function countdown(targetDate){
    const now = new Date().getTime();
    const countdownDate = new Date(targetDate).getTime();
    const gapDays = countdownDate - now;
    //console.log(gapDays);

    if (gapDays < 0) {
        countdownOverElt.innerText = "Le compte à rebours est terminé!";
        clearInterval(intervalID);
    } else {
        // Affichage du compte à rebours
        const days = Math.floor(gapDays / (1000 * 60 * 60 * 24));
        const hours = Math.floor((gapDays % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((gapDays % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((gapDays % (1000 * 60)) / 1000);

        //console.log(days, hours, minutes, seconds);
        countdownElt.innerText = `${days}j ${hours}h ${minutes}m ${seconds}s`;
    }
}

/*
    Lancement du compte à rebours

    Format de date possible à passer à la fonction countdown(targetDate) :
    - December 17, 2025 03:24:00
    - 2025-12-17T03:24:00
    - February 17, 2024
*/
const intervalID = setInterval(() => countdown("February 16, 2024 19:22:00"), 1000);



/*
    Minuteur / Timer

    Durée du minuteur en secondes ex : 5 minutes = 300 secondes
*/
const timerElt = document.querySelector(".timer");
const timerOverElt = document.querySelector(".timerOver");

function startTimer(duration) {
    const startTime = Date.now();

    const intervalID = setInterval(() => {
        // Calculer le temps écoulé en secondes depuis le début du minuteur
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);

        // Calculer le temps restant
        let remainingTime = duration - elapsedTime;

        if (remainingTime < 0) {
            clearInterval(intervalID);
            timerOverElt.innerText = "Le compte à rebours est terminé!";
        } else {
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;

            // Mise à jour pour afficher 0m 0s à la fin
            timerElt.innerText = `${minutes}m ${seconds}s`;

            if (remainingTime === 0) {
                clearInterval(intervalID);
                timerElt.innerText = "0m 0s";
                timerOverElt.innerText = "Minuteur terminé!";
            }
        }
    }, 1000);
}

/*
    Démarrer le minuteur

    Valeurs possibles représentant des secondes à passer en argument :
    Soit un chiffre de 0 à 9 secondes, ex :
        - pour 3 secondes startTimer(3);
    Soit un nombre de 10 à n secondes, ex :
        - pour 10 000 secondes startTimer(10000);
*/
startTimer(3);

