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
    alert("btn clicked")

})

a.addEventListener("click" , function(){
    alert("a clicked")

} , true)                                                   // true - cap on   by def - off 


b.addEventListener("click" , function(){
    alert("b clicked")
})


c.addEventListener("click" , function(){
    alert("c clicked")
    
} , true )

d.addEventListener("click" , function(){
   alert("d clicked")
})

// a - c - btn - d - b 

