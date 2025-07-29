// Array - methods   
// forEach , map , filter , reduce , find , some , every 
// Destructing  & ...Spread Operator  real copy


let ar = [] ; 
console.log(ar[9]);    // undefined  

ar = [1 , 2, 3, 7 , 9 , 5];
let arr = ar ;   // ref copy

arr.pop();
console.log(arr);
console.log(ar);

// -------- Methods ----------

let Ar = [10 , 20 , 30 , 40];

let a = Ar.pop() ;
Ar.shift() ;     // rem from first 

console.log(Ar.length);

Ar.push(100);
Ar.unshift(120);  // add at first 


Ar[2] = 900 ;
console.log(Ar);

let ab = [20 , 30 , 40 , 9 , 12 ]

// let k = ab.splice(1 , 2 , 100 , 800 , 600);
// console.log(k);
// console.log(ab)

// sort - inplace   for int always use fun -  ab.sort() convt into string type

ab.sort( function ( a , b) {     
    return a - b ;
})


let car = ['a' , 'z' , 'i' , 'j'];
car.sort()
console.log(car);

// reverse - inplace 
car.reverse()
console.log(car);


// concat 
let A1 = [1 , 2, 4];
let A2 = [10 , 20 , 30];
let A3 = ['a' , 'b', 'c'];

let result =  A1.concat(A2 , A3);       //  [...A1 , ...A2 , ...A3]
console.log(result);


let n = A1.join("-*-")
console.log(n);




//-------- Looping through arr 

let A = [2 , 3 , 4, 5 , 6];

let S = 0 ;
A.forEach( (e) => {
   S += e ;
})

console.log(S);

let newA = A.map( (e) =>{
    // return  e % 2 === 0 ;
    return e * e ;
})
console.log(newA);



let newA2 = A.filter( (e)=>{
       return e % 2 == 0 ;           // if true - e add in new Ar
})
console.log(newA2);


// reduce 
let B = [1 , 2, 3, 4, 5];

let ans =  B.reduce( (accumalator , val) =>{   
     return accumalator + val ;          
} , 0) ;                                                    // initial val of acc = 0 

console.log(ans);

// another way 

let add = function ( x , y ) {
    return x + y ;
}

let product = ( x , y) =>{
    return x * y ;
}
console.log( B.reduce(add));
console.log( B.reduce(product));


// find   some   every

let array = [
    {id : 1 , key : 10 },
    {id : 2 , key : 20 },
    {id : 3 , key : 10 },
]

let va = array.find( function (ob) {
     return ob.key === 10 ;           // ret first 
})

console.log(va);


let marks =[ 20 , 30 , 45 , 80 , 95] ;

let res = marks.some( function (m) {           // true - if some satisfy condi
      return m > 75 ;
})
console.log(res);


let r = marks.every( function (m){               // every - true - if all satisfy 
    return m > 75 ;
})

console.log(r);


//  Destructuring  & Spread Operator 

// ** destr -  make copy of some val in arr 

let d = [23 , 6 , 90 , 200];
let [f , , t] = d;
console.log(f + ", " + t);

// let newD = d    ref pass

let newD = [...d];      // real copy   spread operator 
newD.pop() ;
console.log(d);

let d2 = [70 , 80 , 90];

let d3 = [...d , ...d2];
console.log(d3);
 

// que 

// add val of ar if greater than 10 

let e = [10 , 20 , 40 , 3 , 7 , 9];

let newE =  e.filter( function (val) {
     return val > 10 ;
})
console.log(newE);


// use reduce() to cal sum of arr

let Ans = e.reduce( function ( acc , v) {
    return acc + v ;
} , 0 );
console.log(Ans);


// function SUM (a , b){
//     return a + b ;
// }
// console.log(e.reduce( SUM ));


// find val less than 10  check with some , every 
let an = e.find( function (val){    
    return val < 10 ;
})
console.log(an);

// take first and last name from arr 

let info = ["Archi" , "Jain"];
let [first , last] = info ;

console.log(last);

// add two arr 

let ar1 = [20 , "India" , "UK"]
let ar2 = [45 , "America" , "shery"];

let ar3 = ["Hello" , ... ar1 , ...ar2];
console.log(ar3);



















