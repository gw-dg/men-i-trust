//let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

if(localStorage.getItem("count")) {
    count = JSON.parse(localStorage.getItem("count"));
}

function increment() {
    count += 1;
    localStorage.setItem("count", JSON.stringify(count));
    countEl.textContent = count + " Times hearted ❤️";
}

/*function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}*/
