let form = document.querySelector("form");
let submit = document.querySelector("#submit");
let inputs = document.querySelectorAll("input")
let cardContainer = document.querySelector("#cards");
let formCont = document.querySelector(".form-container")
let cardArea = document.querySelector("#cardArea")


if (localStorage.getItem("records")) {

    let records = JSON.parse(localStorage.getItem("records"));  // array of array

    records.forEach(record => {
       create_AppendCard(record)

    });
}


function create_AppendCard( fields ) {

    const card = document.createElement("div");
    card.classList.add("info-card");

    card.innerHTML = `
    <h3>${fields[0]}</h3>
    <p>Email: ${fields[1]}</p>
    <p>Phone: ${fields[2]}</p>
    <p>Category: ${fields[3]}</p>
  `;

    cardContainer.appendChild(card);
}



form.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const number = inputs[2].value.trim();
    const category = document.querySelector('input[name="category"]:checked')?.value;


    let fields = [name, email, number, category];
    if (!validateForm(fields)) return;

    create_AppendCard(fields);


    // save in local Storage
    let rec = JSON.parse(localStorage.getItem("records")) || [];
    rec.push([name, email, number, category])
    localStorage.setItem("records", JSON.stringify(rec))


    document.querySelector("#cancel").click();      // now cancel click listener run 

});




// FORM VALIDATION FUNCTION 

function validateForm(fields) {

    let isValid = true;
    let errors = [];

    // Only letters and spaces, min 2 characters
    const nameRegex = /^[A-Za-z\s]{2,}$/;
    if (!nameRegex.test(fields[0])) {
        isValid = false;
        errors.push("Enter a valid name (only letters, min 2 characters).");
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(fields[1])) {
        isValid = false;
        errors.push("Enter a valid email address.");
    }

    // Phone Number: 10 digits, starts with [6-9]
    const numberRegex = /^[1-9]\d{9}$/;
    if (!numberRegex.test(fields[2])) {
        isValid = false;
        errors.push("Enter a valid 10-digit phone number starting with 6-9.");
    }

    // Category Must be selected
    if (!fields[3]) {
        isValid = false;
        errors.push("Select a category.");
    }


    if (!isValid) {
        alert(errors.join("\n"));
    }

    return isValid;
}

document.querySelector("#cancel").addEventListener("click", function (e) {
    formCont.classList.add("hide")
    form.reset();
    cardArea.classList.remove("hide")

})

document.querySelector("#plusbtn").addEventListener("click", function (e) {
    formCont.classList.remove("hide")
    cardArea.classList.add("hide")

})






