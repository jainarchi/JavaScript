// function   
// why ?  to run a block of code when it calls only 

function add( a , b){         // regular func   
    return a + b ;
}

function abc ( a = 1  , b = "hey"){
    if( a === 0) return ;               // early return 
    console.log( `${b}, Happy coding ! ` + a);
}

abc(2 , "Hello" );


function sub ( a = 0 , b = 0){ // can set def val if not obtain   def val  undefined 
    console.log(a , b);
    console.log(a + b);
}
sub( 4 );



let fun = function (){      
 console.log("func expression");
 
}

let arfun = ( )=>{
   console.log("fat arrow func");
}

function func (a , b, c , ...val){         // ... rest operator in parameter   all 
     console.log(a , b, c , val); 
}

func( 3 , 6 , 9 , 6 ,10 , 7 , 9);


// first class function - func can treat as val 

function abc (val){
    val(); 
}

abc( function(){                                                // first cls func
       console.log("pass func as val , naam nhi dena h ")  
 }) ;


 // higher order func  -> accept func as parameter or return a func or both  
 
 function hof (run , b){      // hof
    console.log(b);
     run(); 
 }

 hof(function (){
        console.log("runing....");
        
 }, "start");


 function xyz (){
    return function (){
        console.log("func return from hof , then use () for run");
        
    }
 }
 xyz()() ;


 // pure and impure func
let a = 12 ;
 function ab(){
    console.log(a , " pure func not change outside variable ");
    
 }

 function xy (){
    a++ ;  // impure fuction change outside variable 
 }


 // clousers  -> func return another fun , returned func use some variable of parent func 
function abc (){
    let a = 10 ;
    return function (){
        console.log(a); 
    }
}

abc()();

// lexical scoping 

function fun1 (){
    let a = 10 ;

    function fun2 (){
        let b = 20
        console.log(a); //a can access due to scope hirarchy
    
        function fun3 (){
            let c = 30 ;
            console.log(a , b, c);
        }
        fun3()
    }
    fun2()
}

fun1();


// IIFE 
(function (){
 let id = 80 ; 

 console.log("IIFE ko call nahi krna padta");
 console.log("IIFS create private variable");
 console.log(id);
 
})();

// console.log(id);  //     id not define 



// HOISTING IN FUNCTION 

hello();                    // func statement hoist hote h   hello ! 

function hello (){
    console.log("hello !") ;
}


// dance();                      // fun exp ya arrow func m variable (let var const) hi hoist hote h func body nhi
                                        //let , const -  Can't access 'dance' before initialization    var - dance is not a func 
let dance = function (){
    console.log("dance krlo phele ");
    
}

// que 

function func (){
    console.log("regular func convert into arrow func");
    
}

let hey = () => {
   console.log("arrow func");
   
}

// 2  what does ... operator in parameter  - rest operator 

// 3 eg of dyn value 

let greet = ( a = "Guest " , b = 1) =>{
  console.log("Hello !, " + a  + " happy to meet you after " + b + " yr." );
  
}
greet( "Hina" , 1);

// 4 cal total marks 
let marks = [20 , 28 , 40 , 50 , 50];
let s = 0 ;

// marks.forEach( function (m){
//     s += m ;
// } )


marks.forEach( (e)=>{
    s += e ;
})
console.log(s);

//5 output ?
function f (){
    return ;
}
console.log(f()); // undefined 

//6 pass a func into another func and execute it inside 

function run ( stop ){                   // run - hof
    console.log('runing...');
    stop();
    console.log("finish");
}

run(
    function (){                // first cls func 
     console.log("stop");
    }
)

let newAr  = [1 , 2, 3].map( function (e){
     return e * e ;
})
console.log(newAr);

// 7 eg of impure & pure func
let c = 0 ;
function impure (){
    c = c + 1  ;
}

function pure (){
    let t = c ;
    t = t + 1;
}

// 8 clouser  **imp 

function outer(){
    let count = 0 ;

    return function (){
        count ++ ;
        console.log(count);
    }
}

let counter = outer();   // outer call -> count 0 set hua and func return in couter variable 
counter();
counter();
counter();

let counter2 = outer() ;      // it's count is different 
counter2();
counter2();

counter();


// IIFE    - run without call  variable are private
let shery = (function (){      
   let score = 19 ;

   return {
     getScore: function(){
        console.log(score);
     },

     setScore : function (s){
         score = s;
     },
   }
   
})();

// console.log(score);  // not define 
shery.getScore();



// discout calculator 

function discount (dis){       //  closure - dis outer func variable 

    return function (price){
       console.log( price - ( price * dis / 100 ));
    }
}

let calulate10 = discount(10);
calulate10(100);
calulate10(200);

let cal20 = discount(20);
cal20(200);

//  HOISTING IN FUNCTION - 
// regular func (use function keyword )  hoist hota h 
// func expression & arrow function hoist NAHI hote  [ only variable hoist hote h , func body nahi ]

// when to use reg or arrow fun ?
// use any of them , but inside object always use reg func 




