let bt = document.querySelector("#btn");
let ba = document.querySelector("#a");
let bb = document.querySelector("#b");
let bc = document.querySelector("#c");
let bd = document.querySelector("#d")

// Event Propagation | Event bubbling 
// when the child was clicked then technically its parents is also clicked (Event listener is fired) then it's parent & so on .

// **stop Propagation is used to stop event propagation
//  where we add stop prop  - prop stop at that point 

// without stopProp sequence   -> a b - btn - d c 
// when stopProp first added in bb  -> a  b 



ba.addEventListener("click" , function(e){
    //  e.stopPropagation();
    alert("box a was clicked")
} , true)

bb.addEventListener("click" , function(e){
    //  e.stopPropagation();
    alert("box b was clicked")
}, true)

bc.addEventListener("click" , function(e){    
    // e.stopPropagation();
    alert("box c was clicked")
})

bd.addEventListener("click" , function(e){
    //  e.stopPropagation();
    alert("box d was clicked")
}  )


bt.addEventListener("click" , function(e){
      e.stopPropagation();
    alert("btn was clicked")
})







