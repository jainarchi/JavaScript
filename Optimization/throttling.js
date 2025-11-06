// throttling - reaction occur continously after given interval till the event trigger. 

let inp = document.querySelector("input");


function throttle(fnc  , delay){
    let timer = 0 ;

    return function(){
       let now = Date.now()
        if(now - timer >= delay){
            fnc()
            timer = now ;
        }
    }
}

inp.addEventListener("input" , 
    throttle(function(){
               console.log('run');
               
} , 500))