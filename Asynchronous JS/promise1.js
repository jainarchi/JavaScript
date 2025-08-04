// sol of callback hell 
console.log('promise : promise of code execution');

let e = Math.random()

let prom1 = new Promise((resole, reject) =>{          // custom promise

    if(e > 0.5){

        setTimeout(() =>{
            console.log('yes i am done 1');
            resole("resolved")
        }, 500)

    }else{
        reject("not a number you supported for 1")
    }


})
  

e = Math.random()

let prom2 = new Promise((resole, reject) =>{            

    if(e < 0.5){

        setTimeout(() =>{
            console.log('yes i am done 2');
            resole("resolved 2")
        }, 2000)

    }else{
        reject("not a number you supported for : 2")
    }


})




let prom3 = new Promise((resole, reject) =>{            

    if(e < 0.5){

        setTimeout(() =>{
            console.log('yes i am done 3');
            resole("resolved 3")
        }, 500)

    }else{
        reject("not a number you supported for : 3")
    }


})

// Promise API   - 6 Meth

// Promise.all  --   ret arr if all resolved
// Promise.allSettled   --  ret arr either resolved OR rej
// Promise.any  --  wait for first pro to *fullfill    is outcome          if all rej -   AggregateError: All promises were rejected
// Promise.race  --  wait for first pro to *settle  is outcome

// Promise.reject(err)
// Promise.resolve(value)           




let err = "err msg"

let p3 = Promise.race([prom1, prom2 , prom3])               

    p3.then((a) =>{
        console.log(a);
        
    }).catch((err) =>{
        console.log(err);
            
    })





prom1.then((a) =>{          
    console.log(a);              // a replace with : resolve value 
    
}).catch((err) => {              // reject reason is catched
    console.log(err);

})
