export function moyenne(notes) {
    let sum = 0;

    for(let note of notes) {
        sum += note;
    }

    return sum / notes.length;
}