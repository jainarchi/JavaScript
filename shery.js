var a = 12 ;
console.log(a);
var a = 34 ;  // redecleare  only with var
console.log(a)

// var fun scoped hota h  block ki respect nhi krta 

function fun (){
    console.log(j);         // undefined 
    
    if (true){
        var  j = 67 ;
    }
    console.log(j);
}

console.log(j) // not accessible
fun() ;


{
    var h = 89 ;  // global          at the end js program send inside the function 
}
console.log(h);




{
    let b = 6 ;
    console.log(b);  // blocked scope
}
console.log(b);    // err


let b = 45 ;
{
    b = 80 ;
}
console.log(b);  // 80 


// const n ;            // err 
const c = 80 ;            
// c = 90 ;                //not allowed 
console.log(c);  



// ----------------------------------------------------------

// Declaration aur initialization ke beech ka time/space = TDZ.


// let l ;  only declare  not assign val  tdz starts 

console.log(l); // ref err : can not access bef initalization 

const  l = 80 ;  // tdz finish 





// var  - var ke case m val set hoti h undefined  
// var v = undefined                           // hoistng 

console.log(v);   // undefined  
var v = 70 ;


// ----------------------------------------

let x = 1 ;
{
    // console.log(x); 
    // Block ke andar ye likhne se outer x shadow ho jata hai. 
    // inner x ko hi dikhega    which is in tdz  - ref err 
    let x = 3 ;

}
console.log(x); // 1 



// -------------------------------------------

const  person = {         //const object ki properties update ho sakti hain, lekin pura object reassign nahi ho sakta.
   name : "Archi",
   age : 12 
}

person.name = "Jain";
// person = {};

console.log(person);



const toy = {
  name : "teddy",
  item : 4 
}
Object.freeze(toy);
toy.name = "car"
console.log(toy);



const toy = {
  name: "teddy",      // top-level property
  item: 4,            // top-level property
  details: {          // top-level property (object type)
    color: "brown"    // nested property (details ke andar)  freeze ke liye fun ka use krte h 
  }
};

























