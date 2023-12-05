/**
    1. Fonctions d'ordre supérieur.

    Les fonctions d'ordre supérieur sont des fonctions qui vont soit recevoir
    une fonction callback en argument, soit retourner une fonction,
    ou les deux à la fois !

    Cela ouvre la voie à de nombreuses solutions et à une plus grande fléxibilité.

    Voici un exemple en créant une fonction personnalisée qui permet de filtrer
    le montant des salaires selon un tableau les contenants puis le montant du
    filtre désiré.

    Comme ceci :
    1- La fonction s'appelle customFilter()
    2- La fonction prend 2 arguments en paramètre :
        - un tableau
        - une fonction callback
    Ce qui donne la syntaxe : function customFilter (arr, callback) {}

    ℹ️ Pour info :
    Il existe déjà une fonction native JavaScript appelé ".filter()" qui fait la même chose.
    Le but est justement d'en faire une personnaliser, car c'est un bon exercice
    pour illustrer ce qu'est une fonction d'ordre supérieur (une callback).
 */
const salaries = [1200,5000,4000,2500,3450,1800];

function customFilter (arr, callback) {
    const filteredArray = [];
    for (const arrElement of arr) {
        if (callback(arrElement)) {
            filteredArray.push(arrElement);
        }
    }

    return filteredArray;
}
console.log(customFilter(salaries, amount => amount > 3000));


const countries = [
    {
        name: "Japan",
        gdp: 4941
    },
    {
        name: "Germany",
        gdp: 4260
    },
    {
        name: "South Korea",
        gdp: 1811
    },
    {
        name: "India",
        gdp: 3176
    },
    {
        name: "Canada",
        gdp: 1988
    },
]
console.log(customFilter(countries, country => country.gdp > 2000));

//Exemple avec un composant d'ordre supérieur avec le framework React
/**
export default function Private() {
     //On exécute useContext pour savoir si l'utilisateur est connecté.
    const {currentUser} = useContext(UserContext)
  
     //Si il n'est pas connecté, on retourne à la page d'accueil.
     //<Navigate />, in fine, est une fonction.
    if(!currentUser) {
      return <Navigate to="/" />//Ici cette syntaxe en React retourne une fonction
    }
  
     //Sinon on les emmène vers une page privé.
     //<Outlet />, in fine, est une fonction.
    return (
      <div className="container">
        <Outlet />//Ici cette syntaxe en React retourne une fonction aussi
      </div>
    )
  }
  //Donc là aussi, il s'agit bien d'une fonction d'ordre supérieur puisqu'elle
  //retourne 2 fonctions
*/