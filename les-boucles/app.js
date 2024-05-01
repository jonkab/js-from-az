// Boucle For
const list = document.querySelector('.list');
const notes = [12, 20, 16, 14];

// en manipulant le DOM
for (let i = 0; i < notes.length; i++) {
    const li = document.createElement('li');
    const liContent = notes[i];

    li.textContent = liContent;
    list.appendChild(li);
}

//-----------------------------------


console.log(`
// For...of
`);
const person = {
    firstname : "John",
    lastname : "Doe",
    showNotes(arg) {
        for (let note of arg) {
            console.log(note);
        }
    }
}
person.showNotes(notes);


console.log(`
// Dans une fonction
`);
function tableNotes(arg) {
    for (let note of arg) {
        console.log(note);
    }
}

tableNotes(notes);


console.log(`
// For...in
`);
for (let key in person) {
    console.log(person[key]);
}


console.log(`
// Exercice pour utiliser toutes les boucles possible sur le même objet Array - "Register"
// Avec une boucle for
`);
const registerData = ["John", "Luc", "Sam", "Eric"];
const registerForElt = document.querySelector('.registerFor');

function registerWithLoopFor (data, element){
    for (let i = 0; i < data.length; i++) {
        const liElt = document.createElement('li');
        const liContent = data[i];

        liElt.textContent = liContent;
        element.appendChild(liElt);
    }
}

registerWithLoopFor(registerData, registerForElt);



console.log(`
// Register avec une boucle for...of
`);
const registerForOfElt = document.querySelector('.registerForOf');
function registerWithForOf(arg, element) {
    for (const argElement of arg) {
        const li = document.createElement('li');
        const liContent = argElement;

        li.textContent = liContent;
        element.appendChild(li);
    }
}

registerWithForOf(registerData, registerForOfElt);


console.log(`
// Exercice "décompte"
`);
const countDownElt = document.querySelector(".countDown");
const msgUserForWritingNumber = "Entrez un nombre";

function countDown(msg, element) {
    const dataPrompt = prompt(msg);

    if (dataPrompt > 10 || dataPrompt < 0) {
        console.log("Le nombre n'est pas entre 0 et 10");
    } else {
        for (let i = dataPrompt; i >= 0; i--) {
            console.log(i);
            const li = document.createElement('li');
            const liContent = i;

            li.textContent = liContent;
            element.appendChild(li);
        }
    }
}

//countDown(msgUserForWritingNumber, countDownElt);


console.log(`
// Deviner le chiffre
`);

let guess = 8;
























