/* 
    1. Insérer du contenu avec les backticks 
    
    Avec les template literals (les backticks``), nous pouvons intégrer des expressions JavaScript
    dans une chaîne de caractères.
    Cela peut se révéler très pratique pour créer du contenu, mais attention aux problèmes de sécurité.
*/
    const list = document.querySelector(".list");
    const data = [
      {
        title: "Lorem ipsum",
        symbol: "☘️",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum fugiat, minima, iure rem quia vitae ab voluptatem natus nesciunt eligendi excepturi possimus nemo consequatur ut?"
      },
      {
        title: "Lorem ipsum",
        symbol: "🌱",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum fugiat, minima, iure rem quia vitae ab voluptatem natus nesciunt eligendi excepturi possimus nemo consequatur ut?"
      },
      {
        title: "Lorem ipsum",
        symbol: "🍏",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum fugiat, minima, iure rem quia vitae ab voluptatem natus nesciunt eligendi excepturi possimus nemo consequatur ut?"
      },
      {
        title: "Lorem ipsum",
        symbol: "📗",
        content: `<img src='1' onerror='console.log("Code malicieux")'>`
      }]

    //Solution qui fonctionne mais à utiliser seulement si on géré nous-même l'api qui fourni les données.
    //Et même si on gére l'api il faut s'assurer qu'elle n'est pas piratable car si c'est le cas alors ne pas utiliser cette solution.
    //Si c'est une API externe alors ne pas utiliser cette solution non plus mais celle qui suit.
    data.forEach(data => {
      const li = document.createElement("li")
      li.innerHTML = `
      <h2>${data.title} ${data.symbol}</h2>
      <p>${data.content}</p>
      `
      list.appendChild(li)
    })

/* 
      1. Attention, danger. 

      Si nous intégrons des données venant d'une source non sûre, comme une API externe,
      et que nous utilisons directement "li.innerHTML = data.content;",
      alors nous convertissons tout le texte en code potentiel.

      L'élément <script></script> est bloqué par défaut avec innerHTML.

      Mais il existe d'autres façons plus obscures d'exécuter du JS.
      
      `<img src='1' onerror='alert("Error loading image")'>`;

      Cette ligne va exécuter le code dans onerror.
      Ici c'est une méthode alert(), mais ça pourrait être une récupération de cookies
      qu'on pourrait envoyer vers un tier.

*/

    // Solution qui mélange les deux pratiques, mais sans risque.
    data.forEach((data, index) => {
      const li = document.createElement("li")
      const liContent = `
      <h2 class="title" id="title-${index}"></h2>
      <p class="parag"></p>
      `
      li.innerHTML = liContent
      li.querySelector(".title").textContent = `${data.title} ${data.symbol}`
      li.querySelector(".parag").textContent = `${data.content}
      `
      list.appendChild(li)
    })



/* 
    En résumé, les templates litterals peuvent être utiles si on a envie de créer de gros morceaux de codes.
    
    Néanmoins, si on s'en sert pour intégrer du code venant d'une source qu'on ne maîtrise pas,
    on va au devant de gros problèmes, car quiconque peut partager du code malicieux avec tous ceux qui visiteront la page.

    Voilà pourquoi il est préférable d'utiliser la méthode createElement() le plus souvent.
*/