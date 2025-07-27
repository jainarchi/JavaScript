/*
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

*/

// DATA TYPE + DATA SYSTEM         - js is Dyn typed lang ie type of a decide at runtime 

// Primitive    Ref (with bracket)

let a = "archi";
console.log(a);

let b = null ;      // null hm dete h 
console.log(b);

let c  ;
console.log(c);      // undefined def val milti h 

let n = 98.78;
console.log(typeof(n));

if( " " ){
  console.log("truthy value");
  
}

if( NaN || 90){
   console.log("NaN is a falsy ");
   
}

// falsely val - 0 , false , null , NaN, Undefined , document.all  , ""    **empty string only 

// truethy val - rest all   " " "0"  



//-----------------------------
// Symbol ka use object me unique pro key banane ke liye hota hai, jisse accidental overwrite nahi hota.
let u1 = Symbol("uid");
let u2 = Symbol("uid");

console.log(u1 === u2);  // false 

let obj = {
  name : "chiku",
  age : 10 ,
  id : 13 
}

// obj.id = 34 ;  
let id = Symbol("uid");
obj[id] = "100";

console.log(obj); // { name: 'chiku', age: 10, id: 13, [Symbol(uid)]: '100' } 


// REFERENCE data type 
//  ar [] , obj{} , fun (){}

let ar = [3 , 6, 7];
console.log(ar);

let Arr = ar ; // ref pass    js direct content print krta h unlike java 
Arr.pop();
Arr.push(90);

console.log(Arr);
console.log(ar);


let O = {
  name : 'hina',
  age : 12 
}
console.log(O);

let O2 = O ;
O2.height = 4 ;
delete O2.age ;
O2.name = "Perema"

console.log(O2);
console.log(O);





























