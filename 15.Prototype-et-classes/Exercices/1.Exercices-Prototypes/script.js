/*
    1. Que va retourner honk() dans la console ?
*/

function Car(model, price){
  this.model = model 
  this.price = price 
}
Car.prototype.honk = function(){
  console.log("Honk Honk")
}

const fiat = new Car("500", 20000)

Car.prototype = {};

console.log(fiat);
fiat.honk() // Retourne bien "Honk Honk"
// Ça fonctionne, car les propriétés de l'instance pointes toujours vers "fiat" parce qu'elle a été créé avant le remplacement du prototype par l'objet vide.

// Donc une nouvelle instance comme "fiat2" ne peut maintenant pas contenir "Honk Honk" mais l'objet vide à la place car "fiat2" a été créé après l'objet vide.
const fiat2 = new Car("555", 30000);
//console.log(fiat2.honk()) // Retourne ->
/*
  Uncaught TypeError: fiat2.honk is not a function
*/

/*
    2. Voici deux fonctions constructeur, faites en sorte que Piano hérite du prototype d'Instrument.

    Puis créez une constante 'yamaha' contenant un nouvel objet piano.
    
    Enfin, exécutez play() à partir de yamaha afin de vérifier que l'héritage fonctionne correctement.
*/

function Instrument(){

}
Instrument.prototype.play = function(){
  console.log("Play music")
}

function Piano(type, price){
  this.type = type;
  this.price = price;
}

Object.setPrototypeOf(Piano.prototype, Instrument.prototype);

const yamaha = new Piano("Piano à queue", 30000);

console.log(yamaha.play());// Play music
