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


function create_AppendCard(record) {

    const card = document.createElement("div");
    card.classList.add("info-card");

    card.innerHTML = `
    <h3>${record.name}</h3>
    <p>Email: ${record.email}</p>
    <p>Phone: ${record.number}</p>
    <p>Category: ${record.category}</p>
  `;

    cardContainer.appendChild(card);
}



form.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const number = inputs[2].value.trim();
    const category = document.querySelector('input[name="category"]:checked')?.value;


    let record = { name, email, number, category };
    if (!validateForm(record)) return;

    create_AppendCard(record);


    // save in local Storage
    let rec = JSON.parse(localStorage.getItem("records")) || [];
    rec.push({
        name,
        email,
        number,
        category
    });
    localStorage.setItem("records", JSON.stringify(rec))


    document.querySelector("#cancel").click();      // now cancel click listener run 

});



// FORM VALIDATION FUNCTION 

function validateForm(record) {

    let isValid = true;
    let errors = [];

    // Only letters and spaces, min 2 characters
    const nameRegex = /^[A-Za-z\s]{2,}$/;
    if (!nameRegex.test(record.name)) {
        isValid = false;
        errors.push("Enter a valid name (only letters, min 2 characters).");
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(record.email)) {
        isValid = false;
        errors.push("Enter a valid email address.");
    }

    // Phone Number: 10 digits, starts with [6-9]
    const numberRegex = /^[1-9]\d{9}$/;
    if (!numberRegex.test(record.number)) {
        isValid = false;
        errors.push("Enter a valid 10-digit phone number starting with 6-9.");
    }

    // Category Must be selected
    if (!record.category) {
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






