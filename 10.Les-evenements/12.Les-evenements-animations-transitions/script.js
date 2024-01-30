/*
    Il existe des évènements utiles avec les animations et les transitions.

    Transitions : transitionstart, transitionend, transitionrun, transitioncancel

    Animation : animationstart, animationend

    Ces events sont directement liés aux transitions et animations en CSS et sont
    utilisés pour intégrer des interactions entre CSS et JavaScript.
    Ces events fournissent des points d'ancrage dans le cycle de vie d'une animation
    ou d'une transition, vous permettant d'exécuter du code JavaScript à des moments
    spécifiques, comme au démarrage ou à la fin d'une animation ou d'une transition.
*/
    const box = document.querySelector(".box")


/*
    Quand l'animation démarre "transitionstart"

    Explication :
    Quand est-il déclenché ? L'événement transitionstart est déclenché dès que la transition CSS
    commence. S'il y a un délai (delay) sur la transition (comme le 1s dans l'exemple),
    transitionstart sera déclenché après ce délai.

    Utilisation : Cet événement peut être utile pour exécuter du JavaScript juste au début de la
    transition, après que tous les délais sont passés.
*/
    box.addEventListener("transitionstart", () => console.log("transitionstart"))


/*
    Quand l'animation démarre "transitionend"

    Explication :
    Quand est-il déclenché ? L'événement transitionend est déclenché lorsque la transition est
    totalement terminée. Cela inclut à la fois la durée de la transition et le délai. Donc, si la
    transition a une durée (duration) de 0.4s et un délai (delay) de 1s, l'événement transitionend
    sera déclenché environ 1.4s après le début de la transition (en supposant qu'aucun autre facteur,
    comme les interactions de l'utilisateur, ne l'arrête ou ne la modifie).

    Utilisation : Cet événement est très utile pour exécuter du JavaScript juste après la fin d'une
    transition, comme pour nettoyer des styles temporaires, mettre à jour l'état de l'interface utilisateur,
    ou démarrer une nouvelle animation ou transition.
*/
    box.addEventListener("transitionend", () => console.log("transitionend"))


/*
    Quand l'animation démarre "transitionrun"

    Explication :
    Quand est-il déclenché ? L'événement transitionrun est déclenché dès que la transition est
    instanciée, c'est-à-dire au moment où la transition est supposée commencer, y compris le délai.

    Utilisation : C'est utile si l'on veut réagir immédiatement lorsque la transition est censée
    commencer, même avant que les délais ne soient écoulés.
    Cet événement est moins fréquemment utilisé que les autres.
*/
    box.addEventListener("transitionrun", () => console.log("transitionrun"))


/*
    Quand l'animation démarre "transitioncancel"

    Explication :
    Quand est-il déclenché ? L'événement transitioncancel est un autre événement important dans le
    contexte des transitions CSS, et il est déclenché lorsque la transition est annulée avant
    d'atteindre la fin.

    Cela peut arriver dans diverses situations, par exemple :

    1- Interruption par une nouvelle transition ou animation :
    Si une nouvelle transition ou animation affectant les mêmes propriétés est démarrée avant que
    la transition actuelle ne soit terminée, cela peut annuler la transition en cours.

    2- Changement de la valeur de la propriété animée :
    Si la propriété qui est en train d'être animée par la transition est redéfinie ou modifiée
    autrement (par exemple, si le style de l'élément est modifié via JavaScript ou si une classe
    qui change la même propriété est ajoutée ou retirée), cela peut également annuler la transition.

    3- Visibilité de l'élément modifiée :
    Si l'élément en transition est soudainement masqué ou retiré du document (par exemple, via
    display: none ou en le retirant du DOM), la transition en cours sera annulée.

    Lorsqu'une transition est annulée, l'événement transitioncancel est déclenché, ce qui peut être
    utilisé pour exécuter des actions spécifiques en réponse à l'annulation de la transition.
    Par exemple, on peut vouloir réinitialiser certains styles ou états de l'interface utilisateur,
    ou nettoyer des ressources qui n'étaient nécessaires que pendant la durée de la transition.

    Il est important de noter que transitioncancel est distinct de transitionend ; transitionend est
    déclenché lorsque la transition se termine normalement, tandis que transitioncancel est déclenché
    lorsque la transition est prématurément interrompue ou annulée. Utiliser ces deux événements de
    manière appropriée peut aider à gérer les transitions de manière robuste et réactive dans
    les applications web.
 */
    box.addEventListener("transitioncancel", () => console.log("transitioncancel"))



/*
    Quand l'animation démarre "animationstart"

    Explication :
    Quand est-il déclenché ? L'événement animationstart est déclenché lorsqu'une animation CSS démarre.
    Dans le cas de votre code, l'événement animationstart serait déclenché au début de
    l'animation spin appliquée à l'élément avec la classe .box.

    Voici comment il fonctionne et comment l'utiliser :

    Quand est-il déclenché ?
    L'événement animationstart est déclenché dès que l'animation commence. Si l'animation a un
    délai (défini par la propriété animation-delay), l'événement est déclenché après ce délai.

    Utilisation :
    Vous pouvez écouter cet événement en JavaScript pour exécuter une action dès que l'animation commence.
    Par exemple, vous pourriez vouloir synchroniser une fonction JavaScript avec le début de l'animation,
    ou modifier l'état de l'interface utilisateur pour refléter le fait que l'animation est en cours.

    Dans l'exemple qui suit, lorsque l'animation spin commence, le message sera affiché dans la console,
    et tout autre code ajouté dans la fonction de rappel sera exécuté.
 */
    box.addEventListener("animationstart", () => console.log("animationstart"))



/*
    Quand l'animation démarre "animationend"

    Explication :
    L'événement animationend est déclenché lorsque l'animation CSS se termine. C'est l'un des
    événements clés pour gérer les animations en JavaScript, car il permet de déterminer quand
    une animation est complètement terminée et d'exécuter une logique de nettoyage ou de transition
    vers un nouvel état de l'interface utilisateur.

    Voici comment il fonctionne et comment l'utiliser :

    Quand est-il déclenché ?
    L'événement animationend est déclenché à la fin de l'animation. Si l'animation se répète plusieurs
    fois (via la propriété animation-iteration-count), animationend est déclenché après la dernière
    itération de l'animation.

    Utilisation :
    Cet événement est utilisé pour exécuter une action après la fin de l'animation.
    Par exemple, nettoyer du style qui n'est plus nécessaire, afficher un message, démarrer une autre
    animation, ou mettre à jour l'état de l'interface utilisateur.

    Dans l'exemple qui suit, lorsque l'animation spin se termine, le message sera affiché dans la console,
    et tout autre code dans la fonction de rappel sera exécuté.
 */
    box.addEventListener("animationend", () => console.log("animationend"))
