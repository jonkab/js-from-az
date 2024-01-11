console.log("----- 1. Remplacez chat par chien -----")
/*
    1. Remplacez le mot chat par chien dans la chaîne qui suit.
*/

    let str = "Le chat est un animal carnivore."

    // Avec une méthode regExp .replace()
    console.log(str.replace("chat","chien"))


console.log("\n----- Retournez true dans la console si 4578 -----")
/* 
    2. Retournez true dans la console si la chaîne suivante contient la chaîne "4578"
*/

    const str2 = "45124573121214578";

    // Avec une méthode regExp
    console.log("Avec une méthode regExp ->", /4578/.test(str2))

    // Avec une méthode associée aux chaînes de caractère (string)
    console.log("Avec une méthode string ->", str2.includes("4578"))


console.log("\n----- Retournez l'index de c -----")
/*
    3. Retournez l'index de l'occurence de la première apparition de
    la lettre "c" dans la phrase suivante.
*/

    const str3 = "Le meilleur compagnon contre l'ennui est un bon livre."

    // Avec une méthode associée aux chaînes de caractère (string)
    console.log("Avec une méthode string ->", str3.indexOf("c"))


console.log("\n----- Retouner en majuscule puis en minuscule -----")
/*
    4. 

    A. Retournez str4 en majuscule dans la console.
    B. Retournez str5 en minuscule dans la console.
*/

    const str4 = "Hello world !";
    // Avec une méthode regExp
    console.log("Avec une méthode regExp ->", str4.replace("Hello world !","HELLO WORLD !"))

    // Avec une méthode associée aux chaînes de caractère (string)
    console.log("Avec une méthode string ->", str4.toUpperCase())


    const str5 = "CHUUUUUUT";
    // Avec une méthode regExp
    console.log("Avec une méthode regExp ->", str5.replace("CHUUUUUUT","chuuuuuut"))

    // Avec une méthode associée aux chaînes de caractère (string)
    console.log("Avec une méthode string ->", str5.toLowerCase())
