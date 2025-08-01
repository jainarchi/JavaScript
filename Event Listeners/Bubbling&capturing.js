// whenever u click - event raised 
// event flow 2 phase m flow hota h -
// phase 1 : capturing  parent -> child
// phase 2 : bubbling  child -> parent   (irrespective ki listener add h ya nhi )

// ** first cap- true wale run honge -> event raised  ele -> then without true run honge in bubbling phase 

let btn = document.querySelector("#btn");
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d")


btn.addEventListener("click" , function(){
    console.log("btn.clicked");
    prompt("btn clicked")

})

a.addEventListener("click" , function(){
     console.log("a  clicked");
    prompt("a clicked")

} , true)                                                   // true - cap on   by def - off 


b.addEventListener("click" , function(){
    console.log("b clicked");
    prompt("b clicked")
})


c.addEventListener("click" , function(){
    console.log("c clicked");
    prompt("c clicked")
} , true )

d.addEventListener("click" , function(){
   console.log("d clicked");
   prompt("d clicked")
   
})

// a - c - btn - d - b 