/*
    Quand Utiliser export default ?

    Utilisez export default pour exporter la valeur principale d'un module
    ou lorsqu'il est probable qu'un module sera importé pour une seule
    raison / fonctionnalité principale. C'est une bonne pratique pour les
    composants dans des frameworks comme React, où chaque fichier exporte
    généralement un seul composant.

    La possibilité de choisir entre des exports nommés et des exports par
    défaut offre une flexibilité dans la manière dont les modules et les
    dépendances sont organisés et utilisés dans les applications
    JavaScript.
*/

const computer = "MacBook";
const os = "MacOS";

//export par défault
export default computer;


/*
    Il est aussi possible au sein du même module de faire :
    - des exports par default
    - ainsi que des exports nommés
*/
//Export nommé
export {os};