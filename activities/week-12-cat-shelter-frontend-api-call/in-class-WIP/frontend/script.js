const apiUrl = 'http://localhost:3000';
const catListDiv = document.getElementById("catList")

async function getAllCats() {
    // get all cats:

    const endpoint = `${apiUrl}/cats`
    const response = await fetch(endpoint)
    const cats = await response.json() // array of cats

    // 0. clear out the contents of the catListDiv
    //    so that we don't duplicate entries if the user spams the button
    catListDiv.replaceChildren();
    // 1. iterate through our cats with a loop
    for (let i = 0; i < cats.length; i++) {
        const catDiv = document.createElement("div");
        catDiv.innerHTML = `<code>${JSON.stringify(cats[i])}</code>`;
        catListDiv.appendChild(catDiv);
    }
    // 2. for each cat in our list of cats:
    //  a. create catDiv
    //  b. populate catDiv with the cat object info
    //  c. append catDiv as a child of the catListDiv

    // get one cat:

    // let id = 1;
    // const endpoint = `${apiUrl}/cat/${id}`
    // const response = await fetch(endpoint)
    // const json = await response.json()
    // console.log("retrieved cat json:", json)
}

function addCat() {
    // Implement logic to call the API endpoint to add a cat
    // Use fetch or any AJAX library you prefer
    const catName = document.getElementById('catName').value;
    const catAge = document.getElementById('catAge').value;

    // Check if name and age are provided
    if (catName && catAge) {
        // Implement logic to call the API endpoint to add a cat
        // Use fetch or any AJAX library you prefer
    } else {
        alert('Please provide both name and age for the cat.');
    }
}

function updateCat() {
    // Implement logic to call the API endpoint to update a cat
    // Use fetch or any AJAX library you prefer
}

function adoptCat() {
    // Implement logic to call the API endpoint to remove a cat
    // Use fetch or any AJAX library you prefer
}