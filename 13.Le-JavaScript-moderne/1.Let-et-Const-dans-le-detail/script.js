/* 
    Découvrons et rappelons les principales caractéristiques des déclarations let et const, et leurs différences avec le mot-clé var.
*/

/* 
    1. let & const sont block-scoped, var est function-scoped.
    Si une variable var est déclarée en dehors d'une fonction, elle devient disponible globalement ! 
*/
    if (true) {
        if (true) {
            let testLet = "Avec LET";
            var testVar = "Avec VAR";
            console.log(testLet);//Ok car accessible depuis sont block-scoped
            console.log(testVar);//Ok car accessible globalement
        }
    }

    //console.log(testLet);//Ko car block-scoped donc inaccessible à l'extérieur
    console.log(testVar);//Ok car function-scoped donc accessible à l'extérieur
    console.log(window.testVar);//Donc accessible depuis l'objet global window
    //console.log(window.testLet);//À l'inverse inaccessible depuis window

    function foo() {
        if (true) {
            var num = 10;
        }
        console.log(num);

        let nbr = 99;
        console.log(nbr);
    }

    foo();//Ok car les log sont placés là ou sont disponibles les variables

/*
    2. On ne peut pas déclarer de const vide, contrairement à let ou var.
*/
    var lion;
    let cat;
    //const dog;//Ko fera complétement planter l'execution du script


/* 
    3. Une variable var se fait 'hoisted'(hissée dans la mémoire) et peut être utilisée avant sa déclaration.
    Let et const se font aussi hoisted, mais le moteur JS bloque leur accès avant leur initialisation. 
*/
    console.log(hoistedVar)//Undefined
    var hoistedVar = 777
    console.log(hoistedVar)//777

    //console.log(letVar)//Uncaught ReferenceError: Cannot access 'letVar' before initialization
    let letVar = "xyz"
    console.log(letVar)//xyz

/* 
    4. Une variable var déclarée globalement se fait enregistrer dans l'objet global, pouvant provoquer des bugs de clash entre variables globales.
    Let et const se font enregistrer dans la mémoire, mais sans être accessible comme propriété directe de window.
*/
    var dispoInWindowAndVisibleInTheConsole = "Text"
    console.log(window)//Visible dans la console en ouvrant window

    let letters = "ABC";
    console.log(window.letters);//Undefined même si pas dans un block
    console.log(letters);//Ok car pas enfermé dans un block

    const obj = {name: "John"}
    console.log(window.obj)//Undefined même si pas dans un block
    console.log(obj);//Ok car pas enfermé dans un block

/*
    En résumé pour bien comprendre ce qui se passe et comment ça fonctionne,
    il y a l'environnement global, on appelle ça le Global Environment Records,
    qui est composé de deux parties.

    La partie "objet global window" et une autre partie qui s'appelle
    "Déclarative Environment Records".

    Et c'est dans la partie "Déclarative Environment Records" ou se trouve les
    let et const.

    Ça donne ->
    Global Environment Records :
        1- Objet global "window" :
           Là où sont stockées toutes les var et deviennent une propriété de
           l'objet global "window" donc accessible directement depuis window.

        2- Déclarative Environment Records :
           Là où let, const (ainsi que les déclarations de classe et certaines
           fonctions) sont stockées. Cela leur permet d'avoir une portée de
           bloc (block-scoped) et de ne pas être automatiquement ajoutées à
           l'objet global et donc inaccessible directement depuis window.
*/