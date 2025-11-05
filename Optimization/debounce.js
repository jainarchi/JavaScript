// debounce - task occurs after sum specific delay .
// eg : searching in amazon  , filter after some delay

let input = document.querySelector('input') ;

function debounce( fnc , delay){
    let timer ;

   return function(...args) {          // ...args is the event object 
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fnc(...args);
        } , delay );   
   }
}

input.addEventListener("input" , 
    debounce(function(){
        console.log(`show search result`);
            
} , 1000))




// input.addEventListener("input" , debounce() )     
//  deboune run when the code read without event ocuur - problem 
