let r = Math.random();

let no1 = prompt("Enter first no ");
let c = prompt("enter operation");
let no2 = prompt("enter second no");

console.log(typeof no1)
console.log(typeof no2)
console.log(typeof c)

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if (r > 0.1) {
    //perform correct operation 
    // console.log('result is  ${no1} ${c} ${no2} )
    alert(`result is  ${eval(`${no1} ${c} ${no2}`)}`)
}

else {
    //perform wrong operation
    c = obj[c]
    alert(`result is  ${eval(`${no1} ${c} ${no2}`)}`)

}