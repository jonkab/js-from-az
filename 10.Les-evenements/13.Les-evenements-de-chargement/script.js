/*
    Voici les évènements concernant le chargement d'une page : DOMContentLoaded, load.
*/


/*
    L'event DOMContentLoaded :

    Quand est-il déclenché ?
    L'event DOMContentLoaded est déclenché lorsque le document HTML a été complètement chargé et
    analysé, sans attendre que les feuilles de style, les images et les sous-cadres (frames)
    se terminent de charger.

    Utilisation :
    Cet event est idéal pour exécuter des scripts qui ne nécessitent pas l'accès à des éléments DOM
    qui se chargent après, comme des images ou des feuilles de style. C'est souvent l'event de choix
    pour ajouter des gestionnaires d'event et initialiser l'interface utilisateur.
    Il est donc logiquement utilisé sur document.
*/
    document.addEventListener("DOMContentLoaded", () => console.log("Construction du DOM terminé"))


/*
    L'event load :

    Quand est-il déclenché ?
    L'event load est déclenché lorsque la page entière est entièrement chargée, y compris tous les
    éléments dépendants tels que les feuilles de style, les images, et les sous-cadres (frames).

    Utilisation :
    Cet event est utilisé lorsque vous avez besoin d'être sûr que tous les objets de la page sont
    complètement chargés. Par exemple, si votre script doit manipuler des images ou dépend fortement
    de la taille externe des éléments, attendre l'event load garantit que tous les éléments sont
    totalement chargés et que leurs propriétés sont accessibles.
*/
    window.addEventListener("load", () => console.log("Tout est chargé"))