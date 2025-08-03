console.log(Array.from("Ayush"))

//    looping through array
// for each

const ar = [1, 40, 78, 70]
ar.forEach((element, index, Array) => {
    console.log(element, index, Array)

});


//    imp functions - map , filter, reduce

let newarr = ar.map((value, index, array) => {
    return value * value
})
console.log(newarr)


let b = ar.map((x) => {
    return x * x
})
console.log(b)


// without map()
let newa = []

for (let i = 0; i < ar.length; i++) {
    const element = ar[i]
    newa.push(element ** 2)
}
console.log("without map " + newa)



// filter fun
const abc = [4, 5, 6, 3, 7, 8]

const greater_than_5 = (e) => {           // arrow fun
    if (e > 5) {
        return true
    }

}
let newAr = abc.filter(greater_than_5);


let ans = abc.filter((e) => {
    if (e < 5) return true;
})



// reduce fun

const n = [2, 4, 3, 6, 8, 7]

function sum(a, b) {
    return a + b
}

console.log(n.reduce(sum))


let f = [1, 2, 3, 4, 5, 6]

function fac(a, b) {
    return a * b
}

console.log(f.reduce(fac))


for (const element of f) {
    console.log(element)
}


//  for in 
for (const key in f) {
    if (Object.prototype.hasOwnProperty.call(f, key)) {

        const element = f[key];
        console.log(key, element)
    }
}


// we can also create arr like this 

function factorial(num) {
    let arr = Array.from(Array(num + 1).keys())

    let c = arr.slice(1,).reduce((a, b) => {
        return a * b

    })
    console.log(c)
}

factorial(7)