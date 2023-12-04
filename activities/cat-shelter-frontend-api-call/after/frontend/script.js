const apiUrl = 'http://localhost:3000'; // Replace with your actual API base URL
const catList = document.getElementById("catList");

async function getAllCats() {
    const response = await fetch(`${apiUrl}/cats`)
    const cats = await response.json();
    console.log("cats", cats);
    catList.innerHTML = "";
    for (cat of cats) {
        const catDiv = document.createElement("div");
        catDiv.innerHTML = `<code>${JSON.stringify(cat)}</code>`
        catList.appendChild(catDiv);
    }
    // Implement logic to call the API endpoint to get all cats
    // Use fetch or any AJAX library you prefer
}

async function addCat() {
    // Implement logic to call the API endpoint to add a cat
    // Use fetch or any AJAX library you prefer
    const name = document.getElementById('catName').value;
    const age = document.getElementById('catAge').value;

    // Check if name and age are provided
    if (catName && catAge) {
        // Implement logic to call the API endpoint to add a cat
        // Use fetch or any AJAX library you prefer
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, age })
        };
        const response = await fetch(`${apiUrl}/cat`, requestOptions);
        const { message, cats } = await response.json();

        alert(message);
        catList.innerHTML = "";
        for (cat of cats) {
            const catDiv = document.createElement("div");
            catDiv.innerHTML = `<code>${JSON.stringify(cat)}</code>`
            catList.appendChild(catDiv);
        }

    } else {
        alert('Please provide both name and age for the cat.');
    }
}

async function updateCat() {
    // Implement logic to call the API endpoint to update a cat
    // Use fetch or any AJAX library you prefer

    const id = document.getElementById('updateCatId').value;
    const name = document.getElementById('updatedCatName').value;
    const age = document.getElementById('updatedCatAge').value;

    // Check if all fields are provided
    if (updateCatId && updatedCatName && updatedCatAge) {
        // Implement logic to call the API endpoint to update a cat
        // Use fetch or any AJAX library you prefer
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, name, age })
        };
        const response = await fetch(`${apiUrl}/cat`, requestOptions);
        const { message, cats } = await response.json();

        alert(message);
        catList.innerHTML = "";
        for (cat of cats) {
            const catDiv = document.createElement("div");
            catDiv.innerHTML = `<code>${JSON.stringify(cat)}</code>`
            catList.appendChild(catDiv);
        }
    } else {
        alert('Please provide Cat ID, Updated Name, and Updated Age.');
    }
}

async function adoptCat() {
    // Implement logic to call the API endpoint to remove a cat
    // Use fetch or any AJAX library you prefer
    const id = document.getElementById('deleteCatId').value;

    // Check if Cat ID is provided
    if (deleteCatId) {
        // Implement logic to call the API endpoint to delete a cat by ID
        // Use fetch or any AJAX library you prefer
        const requestOptions = {
            method: 'DElETE',
            headers: { 'Content-Type': 'application/json' },
        };
        const response = await fetch(`${apiUrl}/cat/${id}`, requestOptions);
        const { message, cats } = await response.json();

        alert(message);
        catList.innerHTML = "";
        for (cat of cats) {
            const catDiv = document.createElement("div");
            catDiv.innerHTML = `<code>${JSON.stringify(cat)}</code>`
            catList.appendChild(catDiv);
        }
    } else {
        alert('Please provide Cat ID for deletion.');
    }
}