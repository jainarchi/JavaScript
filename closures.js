// closure  is concept 
// in which a function return onother function , returned function always use some variable of its parent function 

// ab js dekhta h closures ko to wo ek 'BACKLINK' bnata h jiska naam h [[ environment ]]   ie js save it 
// that's why we can acces its function and variable even after ye khtm hone ke baad 

//returned function remembers the environment in which it was created.



// Advantages of Closures:
// Encapsulation / Private Variables: c is private and can't be accessed directly from outside.

// Avoids Global Pollution: Keeps variables out of the global scope.

// Multiple Instances: example with fnc and fnc2, each call to counter() returns a new closure with its own c.


function counter (){
  let c = 0 ;

  return function(){
    c++
    console.log(c);
  }
}

let fnc = counter();
fnc () ;                // till this line counter finish but how we can access c ? as c is private variable of counter   
fnc(); 
fnc(); 


let fnc2 = counter()   // it has a separate c variable 
fnc2();
fnc2();
fnc2();
fnc2();

