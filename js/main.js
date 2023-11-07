"use strict"

// generate button

const generateButton = document.getElementById("generate-button");

generateButton.addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const distance = document.getElementById("distance").value;
    const age = document.getElementById("age").value;

    console.log("Nome:", name);
    console.log("Chilometri da Percorrere:", distance);
    console.log("Fascia età:", age);

});

// cancel button

const cancelButton = document.getElementById("cancel-button");

cancelButton.addEventListener("click", function () {
    document.getElementById("name").value = "";
    document.getElementById("distance").value = "";
    document.getElementById("age").selectedIndex = 0;
});

