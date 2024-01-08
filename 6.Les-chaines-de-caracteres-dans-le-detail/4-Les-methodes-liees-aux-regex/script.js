/* 
    Après avoir vu les différentes caractéristiques des expressions régulières, découvrons ensemble les méthodes qui les utilisent.
*/


/* 
   1. str.search(regex)

   Retourne l'index de la première correspondance.
*/

   // console.log("En hiver, il fait froid") // 10


/* 
   2. str.replace(str/regex, str/function)

   Remplace la première occurrence du premier argument par le second argument.
   Le remplacement peut être globale ou unique, suivant le /g au niveau du regex.
*/

   // console.log("Bo1nj1ou11r l1e m111onde") // Bonj1ou11r l1e m111onde
   // console.log("Bo1nj1ou11r l1e m111onde") // Bonjour le monde 
   // console.log("Bo1nj1ou11r l1e m111onde")  // Bonj1ou11r l1e m111onde

   // console.log("J'adore les chiens") // "J'adore les chats"


/* 
   3. str.replaceAll(str/regex, str/func)

   Remplace toutes les occurences représentées par le premier argument par la chaîne fournie en second argument.
*/

   // console.log("55-55-55-55-55") // '11-11-11-11-11'