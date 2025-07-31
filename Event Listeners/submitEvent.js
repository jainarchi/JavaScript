let btn = document.querySelector("#submit")
let input = document.querySelectorAll("input")
let cards = document.querySelector("#cards")


btn.addEventListener("click" , function(dets) {
  
  dets.preventDefault();    // prevent from reload

  let card = document.createElement("div");
  card.classList.add("cd")

  let naam = document.createElement("h1");
  naam.classList.add("text")
   naam.textContent = input[0].value;


  let prof = document.createElement("h2");
  prof.classList.add("text")
  prof.textContent = input[1].value; 
 

  let cont = document.createElement("div")

  let about = document.createElement("span")
  about.classList.add("text")
  about.textContent = "About : "

  let info = document.createElement("span")
  info.textContent = input[2].value;
  

  cont.appendChild(about)
  cont.appendChild(info)
  

  card.appendChild(naam)
  card.appendChild(prof)
  card.appendChild(cont)

  cards.appendChild(card);

  input.forEach( function (inp){
     if( inp.type !== "submit")
        inp.value = "";
  })


})