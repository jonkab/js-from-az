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
