/* 
    Les getters et les setters permettent d'effectuer des actions supplémentaires lorsqu'on veut lire une propriété(getter) ou mettre en place une nouvelle valeur pour une propriété(setter).

    Sous le capot, c'est comme si une fonction était exécutée.
    Et c'est d'ailleurs comme ceci que fonctionne la plus parts des méthodes des objets du DOM.
    C'est grâce au system de Getter Setter qu'on peut accéder ou modifier les propriétés d'un élément du DOM.
*/


/*
    Fonctionnement de get :
    - Définition : Un accesseur get permet de définir une méthode qui sera appelée lors de l'accès à une
    propriété spécifique d'un objet.

    - Syntaxe : La syntaxe pour définir un accesseur get utilise le mot-clé get suivi d'un nom (qui représente
    le nom de la propriété à accéder) et d'un bloc de code (semblable à une fonction).

    - Accès : Lorsque l'on accède à la propriété pour laquelle le get a été défini, le bloc de code défini est
    exécuté, et la valeur retournée par ce bloc est retournée comme valeur de la propriété. Contrairement à
    une fonction, on n'utilise pas de parenthèses pour accéder à une propriété avec un getter.


    Fonctionnement de set :
    - Définition : Un accesseur set est utilisé pour intercepter les modifications d'une propriété spécifique d'un objet.

    - Syntaxe : La syntaxe pour définir un accesseur set utilise le mot-clé set suivi d'un nom (qui représente
    le nom de la propriété à modifier) et d'un bloc de code. Le bloc de code prend un paramètre qui représente
    la nouvelle valeur assignée à la propriété.
*/
    const fruitsShop = {
        shopName: "Fruits Paradise",
        fruits: ["🥭","🍇","🥥"],
        get fruitsLength(){
            console.log("---- get ----");
            if (this.fruits.length <= 3){
                console.log(`Plus que ${this.fruits.length}. Attention, nous manquons de fruits !`);
            }
            return this.fruits.length;
            /*
                Comparaison avec les Fonctions :
                - Appel : Une fonction doit être appelée avec des parenthèses (par exemple, maFonction()), tandis qu'un accesseur get est utilisé comme si on accédait à une propriété normale (par
                exemple, monObjet.maPropriete).

                - Intention : Les fonctions peuvent être utilisées pour exécuter n'importe quelle opération, tandis que les accesseurs get sont spécifiquement conçus pour calculer et retourner une
                valeur lors de l'accès à une propriété d'un objet.
            */
        },
        set setName(value){
            console.log("\n\n---- set ----");
            if(!/fruits/i.test(value)){
                console.log(`Le mot "fruits" doit être présent dans le nom : ${value}`);
                return
            }
            return this.shopName = value;
            /*
                Comparaison avec les Fonctions :
                - Passage de Valeur : Lorsqu'on définit un set, on spécifie un paramètre dans la
                définition qui reçoit la valeur assignée à la propriété. Ce n'est pas quelque chose que l'on
                fait explicitement avec une fonction classique.

                - Utilisation : On utilise un set comme si on assignait une valeur à une propriété
                normale, sans utiliser de parenthèses.
            */
        }
    };

    console.log(fruitsShop.fruitsLength);//Plus que 3. Attention, nous manquons de fruits ! | 3
    console.log(fruitsShop.setName = "phruits");//Le mot "fruits" doit être présent dans le nom : phruits

    console.log(fruitsShop.shopName);//Fruits Paradise

    console.log(fruitsShop.setName = "Fruits Heaven")//Fruits Heaven
    console.log(fruitsShop.shopName);//Fruits Heaven

/*
    Conclusion getter :
    Bien que les accesseurs get se comportent de manière similaire à des fonctions en ce sens qu'ils exécutent
    un bloc de code et retournent une valeur, leur syntaxe, leur utilisation, et leur but sont différents.

    Les getters permettent un accès semblable à celui des propriétés pour des valeurs qui nécessitent un
    calcul ou une récupération spécifique, offrant ainsi une interface plus propre et plus intuitive pour
    interagir avec les objets.


    Conclusion setter :
    Les accesseurs set offrent une méthode puissante pour contrôler comment les valeurs sont assignées aux
    propriétés d'un objet, permettant la validation, la transformation, ou d'autres effets secondaires lors
    de ces assignations.

    Comme pour les accesseurs get, ils fournissent une interface plus intuitive pour travailler avec les
    objets, améliorant ainsi la lisibilité et la maintenabilité du code.
*/



