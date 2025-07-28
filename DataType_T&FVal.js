// DATA TYPE + DATA SYSTEM         - js is Dyn typed lang ie type of a decide at runtime 

// Primitive            Ref (with bracket)

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

---------------------------------------------------------------------------------------------
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


// typeof  &   instanceof 

console.log(typeof(undefined));  // undefined
console.log(typeof(Object));      // funtion
console.log(typeof(function(){}));
console.log(typeof(null));

console.log("a" * 2); // nan failed number operation 
console.log(typeof(NaN));  // number


console.log("a" - 4); // nan
console.log("5"  - 4) // 1;

console.log( 5 + 5 + "a" + 4  + 3);  // 10a5


// type of use with PRIMITIVE data type 
// instance of use with REFERENCE data type 

let object = {
  name : "archi" 
}
console.log(typeof(object ));
console.log( object instanceof Object);


function abcd (){
  return "hey"
}
console.log(typeof(abcd));               // function 
console.log( abcd instanceof Function); // true 


let arr = [];
console.log(typeof(arr));             // **object   it is array
console.log( arr instanceof Array);  // true ;


let h = 34 ;
console.log( h instanceof Number ); // false  *pri


