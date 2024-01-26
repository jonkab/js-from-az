/* 
    Lorsqu'un évènement est déclenché sur un élément du DOM, cet évènement en question
    va remonter l'arbre du DOM jusqu'à l'objet window.
    
    On appelle ça le "bubbling" ou bouillonnement en Français.

    Sur son passage, il va exécuter tous les écouteurs d'évènement qui écoutent
    cet évènement en question.
    
    S'il déclenche un autre écouteur d'évènement sur son passage,
    l'objet d'évènement qui lui sera passé représentera la cible qui a reçu cet évènement.

    Info complémentaire sur le 3é argument passé à la méthode addEventListener(event, callback, option)
    et donc en option, mais non utilisé ou que très rarement. Si celui-ci est un boolean par défaut
    déjà à "false" sans le mettre et s'il est passé à "true" va inverser le sens de la propagation.

    On appelera plus ça un bubbling mais la Phase de Capture.

    Exemple syntaxe :
    container1.addEventListener("click", handleClick1, true)

    Donc le sens de la propagation partira de l'objet window pour redescendre en parcourant les éléments
    de l'arbre DOM jusqu'à l'élément d'origine duquel est partie l'évènement.
*/

const container1 = document.querySelector(".container-1")
const container2 = document.querySelector(".container-2")
const container3 = document.querySelector(".container-3")

container1.addEventListener("click", handleClick1)
function handleClick1(e) {
    console.log(e.target, "Container 1", e.currentTarget)
}

container2.addEventListener("click", handleClick2)
function handleClick2(e) {
    console.log(e.target, "Container 2", e.currentTarget)
}

container3.addEventListener("click", handleClick3)
function handleClick3(e) {
    e.stopPropagation()//arrête de propager les évènements aux ancêtres
    //e.stopImmediatePropagation() //arrête également la propagation et
    //en plus les écouteurs d'événements suivants (pour le même événement sur cet élément) ne seront pas exécutés
    console.log(e.target, "Container 3", e.currentTarget)
}

/*
    Explication détaillée :

    1- Bubbling (Bouillonnement) : En effet, dans la phase de bouillonnement,
    l'événement est d'abord capturé et traité par l'élément le plus profond dans
    l'arbre du DOM, puis il remonte jusqu'à l'objet window.
    Chaque élément parent sur le chemin a la possibilité de réagir à cet événement
    en définissant des écouteurs d'événements.

    2- Propriété target : La propriété e.target de l'objet événement (e) représente
    toujours l'élément sur lequel l'événement a été déclenché à l'origine, même
    pendant la phase de bouillonnement. Cela signifie que peu importe où dans
    la "chaîne" de propagation vous captez l'événement, e.target sera l'élément
    où l'événement a commencé.

    3- Propriété currentTarget : Contrairement à e.target, la propriété e.currentTarget
    représente l'élément auquel l'écouteur d'événements est actuellement attaché.
    C'est-à-dire, l'élément qui traite l'événement en ce moment pendant la phase de
    bouillonnement.

    4- Prévention du Bubbling avec stopPropagation() : Si vous souhaitez stopper la propagation de
    l'événement (empêcher l'événement de remonter plus haut dans l'arbre du DOM),
    vous pouvez utiliser la méthode e.stopPropagation() dans votre gestionnaire d'événements.

    5- Prévention du Bubbling avec stopImmediatePropagation() :
    La principale différence est que stopImmediatePropagation() non seulement empêche
    l'événement de remonter l'arbre du DOM, mais arrête également l'exécution de tous
    les écouteurs d'événements supplémentaires sur l'élément actuel.
    Cela signifie que, si stopImmediatePropagation() est appelé dans un écouteur
    d'événements, les écouteurs d'événements suivants (pour le même événement sur cet
    élément) ne seront pas exécutés.

    Tandis que stopPropagation() ne fait que stopper la remontée de l'événement dans
    l'arbre DOM sans affecter les autres écouteurs d'événements sur le même élément.

*/



