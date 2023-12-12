const checkbox = document.getElementById("checkbox");
const body = document.body;

setBackgroundColor();

checkbox.addEventListener("change", event => {
    console.log("value:", event.target.checked);
    localStorage.setItem('isItemChecked', checkbox.checked);
    setBackgroundColor();
})

function setBackgroundColor() {
    const isItemChecked = localStorage.getItem('isItemChecked') === "true";
    checkbox.checked = isItemChecked;

    if (checkbox.checked) body.classList.add("pink");
    else body.classList.remove("pink");
}