# Fonction `removeDuplicates(arr)`

## Code complet

```javascript
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates([5, 5, 4, 6, 3, 5])); // Sortie : [5, 4, 6, 3]
```

La fonction `removeDuplicates(arr)` a pour objectif de retourner un nouveau tableau sans les valeurs en doublon en utilisant la méthode `.filter()` de JavaScript et une fonction de rappel (callback).

## Fonctionnement étape par étape

### 1. La méthode `.filter()`
- **Syntaxe** : `arr.filter(callback(element, index, array))`
- **Description** : Elle crée un nouveau tableau en incluant uniquement les éléments pour lesquels la fonction de rappel retourne `true`.
- **Processus** : Elle parcourt chaque élément du tableau `arr` et applique la fonction de rappel.

### 2. La fonction de rappel `(item, index) => arr.indexOf(item) === index`
- **item** : l’élément courant du tableau lors de l’itération.
- **index** : l’indice de l’élément courant.
- **arr.indexOf(item)** : renvoie l’indice de la première occurrence de `item` dans le tableau `arr`.

### 3. Le mécanisme pour éliminer les doublons
- **Condition** : `arr.indexOf(item) === index`
  - Vérifie si l’indice de la première occurrence de l’élément est égal à l’indice courant.
  - Si la condition est vraie, cela signifie que c’est la première fois que l’élément apparaît dans le tableau, donc il est inclus.
  - Si la condition est fausse, l’élément est un doublon et est donc exclu du nouveau tableau.

## Illustration avec l’exemple `[5, 5, 4, 6, 3, 5]`

- **Itération 1** :
  - `item = 5`, `index = 0`
  - `arr.indexOf(5) = 0`
  - `0 === 0` ➔ `true` ➔ Inclure `5`
- **Itération 2** :
  - `item = 5`, `index = 1`
  - `arr.indexOf(5) = 0`
  - `0 === 1` ➔ `false` ➔ Exclure `5`
- **Itération 3** :
  - `item = 4`, `index = 2`
  - `arr.indexOf(4) = 2`
  - `2 === 2` ➔ `true` ➔ Inclure `4`
- **Itération 4** :
  - `item = 6`, `index = 3`
  - `arr.indexOf(6) = 3`
  - `3 === 3` ➔ `true` ➔ Inclure `6`
- **Itération 5** :
  - `item = 3`, `index = 4`
  - `arr.indexOf(3) = 4`
  - `4 === 4` ➔ `true` ➔ Inclure `3`
- **Itération 6** :
  - `item = 5`, `index = 5`
  - `arr.indexOf(5) = 0`
  - `0 === 5` ➔ `false` ➔ Exclure `5`

### Résultat final

Le nouveau tableau est `[5, 4, 6, 3]`, sans doublons.

## En résumé

- La fonction utilise `arr.filter()` pour parcourir le tableau original.
- La fonction de rappel vérifie si chaque élément est sa première occurrence dans le tableau.
- Seuls les éléments dont l’indice correspond à la première occurrence sont inclus dans le nouveau tableau.
- Les doublons sont exclus car leur indice ne correspond pas à l’indice de leur première occurrence.


L’objet Set retire automatiquement les doublons. Cependant, l’utilisation de l’opérateur spread (...) dans l’exemple que j’ai donné a une raison bien précise : transformer le Set en un tableau.

Voici une explication détaillée :

1. L’objet Set

Un Set est une collection d’éléments uniques en JavaScript. Lorsque tu crées un Set, il élimine automatiquement les doublons, donc si tu lui passes un tableau contenant des valeurs en doublon, elles seront supprimées.

Par exemple :

const mySet = new Set([5, 5, 4, 6, 3, 5]);
console.log(mySet);  // Sortie : Set { 5, 4, 6, 3 }

Ici, mySet est un objet de type Set, pas un tableau. Il contient uniquement les valeurs uniques, mais il n’est pas possible d’accéder directement aux éléments comme avec un tableau (par exemple, via les index). Le Set est un type de collection particulier en JavaScript qui ne fonctionne pas exactement comme un tableau.

2. Pourquoi l’opérateur spread (...) ?

L’opérateur spread est utilisé pour décomposer les éléments d’un objet itérable (comme un Set) dans un tableau ou une autre structure.

Lorsque tu fais :

[...mySet]

Tu transformes le Set en un tableau. C’est important parce que dans beaucoup de cas, tu veux obtenir un tableau que tu peux manipuler comme d’habitude (avec des méthodes comme .map(), .filter(), etc.).

Dans mon exemple précédent, j’ai utilisé le spread pour convertir le Set (qui élimine les doublons) en un tableau contenant les valeurs uniques.

Voici l’exemple complet :

function removeDuplicates(arr) {
return [...new Set(arr)];
}

Ce que fait ce code :

	•	new Set(arr) : Crée un Set à partir du tableau arr, éliminant les doublons.
	•	[...new Set(arr)] : Utilise l’opérateur spread pour convertir ce Set en un tableau contenant uniquement les valeurs uniques.

Pourquoi ne pas simplement retourner le Set ?

Si tu retournes directement le Set, comme ceci :

function removeDuplicates(arr) {
return new Set(arr);
}

Le résultat serait un Set plutôt qu’un tableau. Par exemple :

console.log(removeDuplicates([5, 5, 4, 6, 3, 5]));

La sortie serait :

Set { 5, 4, 6, 3 }

Bien que ce soit une collection de valeurs uniques, elle est sous forme de Set, pas de tableau. Et dans beaucoup de situations, comme le traitement de données ou l’interface utilisateur, tu veux souvent manipuler un tableau, car c’est un type de structure de données plus courant avec des méthodes intégrées spécifiques.

Conclusion

L’opérateur spread (...) est utilisé ici pour convertir le Set en un tableau, car bien que le Set retire automatiquement les doublons, il est souvent plus pratique d’utiliser un tableau dans de nombreux cas en JavaScript. Cela te permet d’appliquer toutes les méthodes de tableau habituelles et de manipuler les données plus facilement.