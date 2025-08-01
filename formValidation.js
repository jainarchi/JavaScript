let nm = document.querySelector("#nm");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let submit = document.querySelector("#submit");
let msg = document.querySelector("#msg")


submit.addEventListener("click", function (dets) {

    dets.preventDefault();
     
    let inputs = document.querySelectorAll("input");

    let nmregex = /^[a-zA-Z]{2,}(?: [a-zA-Z]+)*$/;
    let emailregex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!nmregex.test(inputs[0].value) ||
        !emailregex.test(inputs[1].value) ||
        !passwordRegex.test(inputs[2].value)) {

        msg.classList.add("show");
        msg.textContent = "something is incorrect !";
    }

    else {
        nm.textContent = inputs[0].value;
        password.textContent = inputs[2].value;
        email.textContent = inputs[1].value;
        msg.textContent = "your response has been recorded";
    }


    
    inputs.forEach( (inp)=>{
        inp.value = "";   
    })


})

