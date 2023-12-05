/**
  1. Les méthodes.

  Une méthode est une propriété d'un objet contenant une fonction.
  On appelle une méthode en utilisant le nom de la propriété qui lui est associée.


  Notion supplémentaire "this".

  1. function(){} : Dans le cas d'une fonction classique.

  Le mot-clé "this" peut s'utiliser pour faire référence au contexte appelant, donc
  à l'objet lui-même, si la fonction est appelée en tant que méthode de l'objet.

  ⚠️ Important ⚠️ :
  Par contre si la fonction est appelée en dehors de tout objet, "this" fera référence
  à l'objet global (dans un navigateur, c'est généralement "window").

  2. () => : Dans le cas d'une fonction fléchée.

  Le mot-clé "this" peut s'utiliser pour faire référence au contexte englobant, donc
  à l'objet "window" dans le cas d'une création dans le contexte global.

  ⚠️ Important ⚠️ :
  Les fonctions fléchées n'ont pas leur propre "this" ; elles héritent du "this" du
  contexte dans lequel elles ont été créées. Cela signifie que "this" dans une fonction
  fléchée pointera vers l'objet global que ce soit à l'intérieur d'une méthode,
  d'un objet, ou en dehors de toute méthode ou objet.
*/

const athlete = {
    name: "Tom",
    jump: () => {
        // Ici, la propriété "jump" de l'objet "athlete" est une fonction,
        // avec la syntaxe d'une fonction fléchée (rappel : syntaxe sortie en 2015).
        console.log("Jump");
        console.log(this); // Dans une fonction fléchée, "this" fait référence au
        // contexte englobant, qui peut être l'objet "window".
    },
    swim: function () {
        // Syntaxe classique (avant 2015).
        console.log("Swim");
        console.log(this.name); // Dans une fonction classique, "this" fait référence
        // au contexte de l'objet lui-même, si appelée en tant que méthode.
    },
    run() {
        // Syntaxe d'une fonction classique disponible depuis 2015.
        console.log("Run");
    },
};

athlete.jump();//Ici this affiche la référence à l'objet "window" car dans ce cas, c'est le contexte englobant.
athlete.swim();//Ici this affiche la référence à l'objet lui-même "athlete" car dans ce cas, c'est le contexte appelant.
athlete.run();//Ici un simple appel de la méthode run() sans l'usage de "this"













