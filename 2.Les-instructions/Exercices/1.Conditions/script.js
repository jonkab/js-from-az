/**
  1. Météo.

  Écrivez une fonction weatherFeeling() qui reçoit une température
  et qui doit console.log() s'il fait froid, doux, ou chaud.

  - Il fait froid en-dessous de 10 degrés inclus.
  - Il fait doux de 10 degrés non inclus à 20 degrés inclus.
  - Il fait chaud au-dessus de 20 degrés non inclus.

  Testez votre fonction avec les valeurs : -15,42,5.
*/

function weatherFeeling(temp) {
  //Si la température est inférieur égale à 10°C, affiche "froid".
  if (temp <= 10) {
    console.log("Il fait froid");
  }
  //Si la température est comprise entre 10°C et 20°C et est égale à 20°C, affiche "doux".
  else if (temp > 10 && temp <= 20) {
    console.log("Il fait doux");
  }
  //Si la température est supérieur à 20°C, affiche "chaud".
  else if (temp > 20) {
    console.log("Il fait chaud");
  }
}

weatherFeeling(-15)
weatherFeeling(42)
weatherFeeling(5)


/**
  2. Champions.

  Créez une fonction howGoodIsThatPlayer() qui analyse le nombre de trophées d'un joueur
  de football et qui retourne son niveau en fonction de ses résultats.

  - Si un joueur a au moins remporté :
    - une coupe du monde,
    - deux ballons d'or
    - et 3 trophées de champion d'une ligue nationale,
  loggez "Niveau exceptionnel".

  - Si un joueur a au moins remporté :
    - un ballon d'or
    - et au moins un trophée de coupe nationale,
  loggez "Bon niveau".

  - Enfin, si un joueur n'a pas assez de trophées pour apparaître dans les conditions
  ci-dessus, loggez "Niveau médiocre".

  Testez votre fonction à l'aide des trois objets ci-dessous.
*/

const player1 = {
  name: "Paul",
  goldenBall: 0,
  worldCup: 1,
  nationalCup: 0
}
const player2 = {
  name: "Max",
  goldenBall: 3,
  worldCup: 3,
  nationalCup: 4
}
const player3 = {
  name: "Adam",
  goldenBall: 0,
  worldCup: 0,
  nationalCup: 1
}


function howGoodIsThatPlayer(player){
  //Si au moins : 1 coupe du monde et 2 ballons d'or et 3 trophées de champions d'une ligue nationale
  if(player.worldCup >= 1 && player.goldenBall >= 2 && player.nationalCup >= 3) {
    console.log(player.name + " : Niveau exceptionnel");
  } //Si au moins : 1 ballon d'or et 1 trophée de champions d'une ligue nationale
  else if (player.goldenBall >= 1 && player.nationalCup >= 1) {
    console.log(player.name + " : Bon niveau");
  }
  else {
    console.log(player.name + " : Niveau médiocre");
  }
}
howGoodIsThatPlayer(player1)
howGoodIsThatPlayer(player2)
howGoodIsThatPlayer(player3)