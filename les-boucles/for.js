console.log("-------------- for.js ----------------");
console.log("- (let i = 1; i >= -2; i--) -");
for (let i = 1; i >= -2; i--){
    console.log(i);
}

console.log("- (let i = 10; i <= 100; i+=10) -");
for(let i = 10; i <= 100; i+=10) {
    console.log(i);
}

console.log("- let sum = 0;  (let i = 1; i <= 5; i++) -");
let sum = 0;
for (let i = 1; i <= 5; i++) {
    console.log("1- i :", i + "| sum : " + sum);
    sum += i;
    console.log("2-sum += i : ", sum);
    console.log("\n\n")
}
console.log('Somme:', sum);