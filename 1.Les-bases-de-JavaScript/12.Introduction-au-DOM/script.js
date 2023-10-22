/* 
  1. Le DOM

  Le DOM, "Document Object Model", est la représentation sous forme d'objets
  des éléments d'une page web par votre navigateur.

  Le DOM n'est pas du JavaScript, c'est une interface utilisable par plusieurs
  langages.
  
  Néanmoins, c'est bien avec JavaScript qu'on utilise le DOM le plus souvent.

  Le DOM (Document Object Model) est une API (Interface de Programmation
  d'Application). En informatique, une API est un ensemble de règles et de
  protocoles qui permettent à différentes applications ou composants de
  communiquer entre eux. Le DOM est une API qui fournit une interface pour
  interagir avec les documents HTML (ou XML) dans un navigateur web.

  Toute votre page va donc être représentée sous la forme d'un grand arbre
  d'objets, c'est-à-dire des objets imbriqués les uns dans les autres.

  Ces objets contiennent des propriétés et des méthodes très pratiques.

  Grâce à ces derniers, tout est possible en JavaScript, car chaque élément
  va pouvoir être sélectionné, modifié, supprimé, stylisé, cliqué, glissé,
  scrollé et j'en passe.

  JavaScript sert ainsi à manipuler des pages web, et même s'il a énormément
  évolué et peut aujourd'hui être utilisé dans beaucoup de domaines de
  programmation, il reste majoritairement employé sur le web pour remplir
  sa fonction originelle.
*/


//Ici, j'utilise l'objet JS document qui contient le DOM
const title = document.querySelector("h1");//qui a la méthode associée
//.querySelector("") qui permet en lui passant un argument en paramètre
//de type selector CSS de selectionner ici l'élément H1 de la page.
//À savoir, que cet élément est un objet. Nous pouvons encore une fois
//le vérifier avec typeof
console.log(typeof title);//Renvoi le type object
console.dir(title);//Grâce à .dir() je peux voir aussi si c'est un objet
//Dans la console, il est dépliable et affiche toutes les propriétés
//associées en plus de l'élément lui-même, donc c'est belle et bien un objet.

title.textContent = "Le texte a été modifié";//Ici, je peux par exemple utiliser
//la propriété associée .textContent pour y modifier le texte de l'élément.

/*
    Il existe également le CSSOM (CSS Object Model), qui est un concept similaire
    au DOM (Document Object Model), mais qui est spécifiquement axé sur la manipulation
    et la gestion des règles CSS d'une page web. Le CSSOM permet de représenter les
    styles CSS appliqués à un document HTML, de les manipuler et de les rendre accessibles
    via des interfaces de programmation.

    Le CSSOM permet aux développeurs de :

    Accéder aux règles CSS d'une page.
    Modifier ou ajouter de nouvelles règles CSS dynamiquement.
    Appliquer des styles aux éléments HTML.
    Calculer et récupérer les styles calculés pour un élément spécifique.
    Le CSSOM est particulièrement utile pour la création d'effets visuels dynamiques, la
    gestion de styles dynamiques et la personnalisation de l'apparence d'une page web en
    réponse à des interactions utilisateur.

    Les deux modèles, DOM et CSSOM, travaillent ensemble pour permettre la manipulation
    complète de la structure et du style d'une page web. En combinaison avec JavaScript,
    ces deux modèles offrent un contrôle puissant sur le contenu et l'apparence d'une page web.

*/

//Ici, on va changer la couleur de fond d'un élément HTML en affectant une nouvelle valeur
title.style.backgroundColor = "skyblue";
/*
    .style est une propriété d'un élément HTML qui renvoie un objet représentant les styles
    appliqués à cet élément.

    .backgroundColor est une propriété de cet objet de style qui contrôle la couleur
    d'arrière-plan de l'élément.

    "skyblue" est la valeur que vous assignez à la propriété backgroundColor pour changer
    la couleur d'arrière-plan.
*/

/* 
  2. Il y a aussi le BOM
  pour Browser object model qui fait référence à un
  ensemble d'objets fournis par les navigateurs web pour interagir avec le
  navigateur lui-même, mais il ne fait pas partie des spécifications du
  langage JavaScript.
  Le BOM inclut des objets tels que window, document, navigator, history,
  location, etc.
  Ces objets permettent de manipuler la fenêtre du navigateur, de gérer
  les URLs, de stocker des informations sur la session, et bien d'autres
  fonctionnalités liées au navigateur.
  
  C'est lui qui contient toutes les fonctionnalités de la page d'un navigateur.

  Il contient également le DOM, qu'on peut trouver dans la propriété Document.

  L'objet global, en revanche, est un concept fondamental en JavaScript.
  L'objet global est l'objet qui contient toutes les variables, fonctions et
  objets globaux.
  Dans un navigateur, l'objet global est window. Cela signifie que toutes
  les variables et fonctions que vous déclarez sans utiliser var, let,
  ou const (ou en utilisant var à l'extérieur d'une fonction) deviennent
  automatiquement des propriétés de l'objet global (window dans un navigateur).

  Donc, bien que le BOM et l'objet global soient liés à l'environnement du
  navigateur, ce sont deux concepts différents.
  L'objet global concerne la portée des variables et des fonctions dans le
  langage JavaScript, tandis que le BOM concerne les fonctionnalités spécifiques
  au navigateur.

  En plus du DOM, il expose un tas de méthodes très connues : alert(),
  setInterval, fetch(), etc...
  
  Des propriétés sur la page en cours : innerWidth, innerHeight, etc...

  Et des APIs pratiques comme History pour gérer l'historique.
*/
console.log(window);//Ici, je peux voir toutes les méthodes associées à l'objet window
//Je peux le parcourir et voir que je peux accéder au DOM grâce à la propriété document
//qui renvoie l'objet Document représentant la structure du document HTML chargé dans le
//navigateur. Cet objet document offre des méthodes et des propriétés pour accéder,
//manipuler et interagir avec les éléments de la page web, tels que les balises HTML,
//les formulaires, les images, les liens, etc.


/*
   Le DOM pour résumer :
   Le DOM est essentiellement une interface qui expose une hiérarchie
   d'objets que vous pouvez manipuler en utilisant JavaScript.
   Bien que le DOM soit utilisé en tandem avec JavaScript pour la
   manipulation de pages web, il n'est pas du JavaScript en soi. Le DOM
   est une spécification standardisée qui peut être utilisée avec différents
   langages de programmation, mais JavaScript est le langage le plus couramment
   utilisé pour interagir avec le DOM dans le contexte du développement web
   côté client.

   Le DOM est une API qui permet aux développeurs d'interagir avec le
   contenu HTML d'une page web dans un navigateur en utilisant
   JavaScript (ou d'autres langages de programmation). L'objet document et
   les méthodes comme .querySelector() font partie de cette API DOM par exemple.
* */

