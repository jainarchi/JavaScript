// create a business name with three words

// adjective    crazy  amazing Fire
// shop name     Engine fppds garments
// other word      Bros  limited Hub

let first
let second
let third

let rand = Math.random();
if (rand <= 0.33) {
    first = "crazy";
}
else if (rand > 0.33 && rand <= 0.66) {
    first = "amazing";
}
else {
    first = "Fire";
}

rand = Math.random();            // update 
if (rand <= 0.33) {
    second = "Engine";
}
else if (rand > 0.33 && rand <= 0.66) {
    second = "Foods";
}
else {
    second = "Garments";
}

rand = Math.random()

if (rand <= 0.33) {
    third = "Bros";
}
else if (rand > 0.33 && rand <= 0.66) {
    third = "Limited";
}
else {
    third =" Hub";
}

console.log(` ${first} ${second} ${third}`)
