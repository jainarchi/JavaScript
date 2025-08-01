let themebtn = document.querySelector("#themebtn");

// themebtn.addEventListener("click" , function(){
//     document.body.classList.toggle("dark")    

//     if( ! document.body.classList.contains("dark")){
//         document.body.classList.add("light")
//     }
// })
// -----------------------------------------------------

// acc to window os display theme 
// prompty for property - how to get the os display made dark or light in js just property no code


function setTheme() {

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("dark")
        document.body.classList.remove("light")
        localStorage.setItem("theme", "dark")
    }
    else {
        document.body.classList.add("light")
        document.body.classList.remove("dark")
        localStorage.setItem("theme", "light")

    }
}



let theme = localStorage.getItem("theme");          // Use previously selected theme, if available

if (theme) {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
} else {
    setTheme();                                  // First visit — set theme based on system mode
}

                  

window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", function () {
    setTheme();
})




themebtn.addEventListener("click", function () {

    let cur = localStorage.getItem("theme");

    if (cur === "dark") {
        document.body.classList.remove("dark")
        document.body.classList.add("light")
        localStorage.setItem("theme", "light")
    }
    else {
        document.body.classList.remove("light")
        document.body.classList.add("dark")
        localStorage.setItem("theme", "dark")
    }
})


