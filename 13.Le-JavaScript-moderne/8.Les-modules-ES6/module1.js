/*
    Quand utiliser export sans default (export nommé) ?

    Utilisez export lorsque vous avez plusieurs fonctions, objets, ou
    primitives à exporter depuis un seul module. Cela est particulièrement
    utile pour les bibliothèques et les utilitaires où vous pourriez avoir
    besoin d'accéder à plusieurs fonctionnalités.

    La possibilité de choisir entre des exports nommés et des exports par
    défaut offre une flexibilité dans la manière dont les modules et les
    dépendances sont organisés et utilisés dans les applications
    JavaScript.
*/
const userName = "John Doe";
const age = 45;

//Export nommé
export {userName, age};