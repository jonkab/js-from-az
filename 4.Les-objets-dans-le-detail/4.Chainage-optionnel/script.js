/* 
    1. Le chaînage optionnel

    L'opérateur ? permet de lire une propriété ou de retourner undefined si la propriété ou la chaîne de propriétés n'est pas valide.
    Sans cet opérateur, JavaScript retourne normalement une erreur.
*/
const store = {
  dairyProducts: {
    cheeses: ["Camembert", "Roquefort", "Cantal"],
    yogurt: ["Vanilla", "Strawberry", "Peach"],
  },
  pasta: {
    freshPasta: {
      flourPasta: ["Spaghetti", "Ravioli","Fusilli"],
      flourAndPotato: ["Gnocchi"]
    },
  },
  getPrice: () => {
    return 20
  }
}

//En faisant le test avec les objets contenu dans l'objet "store"
console.log(store.dairyProducts.cheeses[1]);//La valeur "Roquefort" existe bien, donc elle est retourné

//A, l'inverse en faisant le teste avec des valeurs qui n'existent pas ou incomplete
//Pour un objet "iceCreams" ou un tableau "chocolateCreams" :
//console.log(store.dairyProducts.iceCreams.chocolateCreams[3]);
//Celui-ci retournera une erreur et donc le restant du script js ne continuera pas.

//Et plutôt que de tester si chaque valeur existe, on va préférer
//la méthode du "chainage optionnel" avec l'opérateur "?".
//Comme ceci au lieu de retourner une erreur cela retournera
console.log(store.dairyProducts.iceCreams?.chocolateCreams?.[3]);//Ici "undefined"
//Et le script peut continuer de s'exécuter.
console.log(store.getPrice?.());//Ici la méthode "getPrice()" existe et retourne 20
//Donc le script continu sans retourner "undefined"