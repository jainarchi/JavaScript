let e = Math.random();

// let pro1 = new Promise((res, reject) => {
//     if (e < 0.1) {
//         setTimeout(() => {
//             console.log("success pro 1");
//             res("done pro1")

//         }, 2000)
//     }
//     else {
//         reject("rej pro1 ")
//     }
// })


let pro2 = new Promise((res, rej) => {
    if (e < 0.2) {
        setTimeout(() => {
            console.log("success pro 2");
            res("done p2")
        }, 2000);
    }
    else {
        rej("rej pro2")
    }
})


let pro3 = new Promise((res, rej) => {
    if (e < 0.7) {

        setTimeout(() => {
            console.log("success pro 3");
            res("done p3")
        }, 2000);
    }
    else {
        rej("rej p3")
    }
})



let pro4 = new Promise((res, rej) => {
    if (e < 0.5) {
        setTimeout(() => {
            console.log("success pro 4");
            res("done p4")
        }, 2000);
    }
    else {
        rej("rej p4")
    }
})


let p6 = Promise.resolve("p 6 done")      // make a resolved promise 
let p7 = Promise.reject("p 7 rejected")


let pro5 = Promise.all([ pro2, pro3, pro4 , p6 , p7])

pro5.then((a) => {
    console.log(a);

}).catch((err) => {
    console.log(err);

})


// Promise API   - 6 Meth

// Promise.all  --   ret arr if all resolved
// Promise.allSettled   --  ret arr either resolved OR rej
// Promise.any  --  wait for first pro to *fullfill    is outcome          if all rej -   AggregateError: All promises were rejected
// Promise.race  --  wait for first pro to *settle  is outcome




