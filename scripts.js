let array;
let inputValue;

if (JSON.parse(localStorage.getItem('value')) === null) {   // if local storage is null declare empty array
    array = [];
} else {                                                    // if local storage has data store it in array
    array = JSON.parse(localStorage.getItem('value'));
}

let input = document.getElementById("input");

let elDivo = document.getElementById('elDivo');

if (input) {
    input.addEventListener("keydown", function (e) {
        if (e.code === "Enter") { 
            clickFunction();
        }
    });
}

function clickFunction() {
    if (input.value) {
        inputValue = input.value;
        array.push(inputValue);

        localStorage.setItem('value', JSON.stringify(array)); // stringify array to local storage
    }
}

window.onload = (event) => {
    if (elDivo && JSON.parse(localStorage.getItem('value'))) {
        
        array = JSON.parse(localStorage.getItem('value')); // parse array from local storage

        for (let i = 0; i < array.length; i++) {
            let data = array[i];
            elDivo.innerHTML += `
                                <div class="div-data">
                                <p>${data}</p>
                                <button class="delete-button" id="div${i}" onclick="deleteDiv(${i})">Delete</button>
                                </div>
                                `
        }
    }
}

function deleteDiv(i) {
    let child = document.getElementById('div' + i)  ;
    child.parentElement.remove();
    array.splice(i, 1);
    localStorage.clear();
    localStorage.setItem('value', JSON.stringify(array));
}
