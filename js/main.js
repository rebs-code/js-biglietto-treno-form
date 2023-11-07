"use strict"

// generate button

const generateButton = document.getElementById("generate-button");

generateButton.addEventListener("click", function () {

    const name = document.getElementById("name").value;
    const distance = document.getElementById("distance").value;
    const age = document.getElementById("age").value;

    let tier;
    if (age == "minorenne") {
        tier = "Offerta Minori";
        document.getElementById("tier").innerText = tier; 
    } else if (age == "over65") {
        tier = "Offerta Over 65";
        document.getElementById("tier").innerText = tier; 
    } else {
        tier = "Biglietto Standard";
        document.getElementById("tier").innerText = tier; 
    };

    let carriageNum = String(Math.floor(Math.random() * 100000)).padStart(5, '0');
    document.getElementById("carriage").innerText = carriageNum;

    document.getElementById("passenger-name").innerText = name;



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
    document.getElementById("passenger-name").innerText = "";
    document.getElementById("tier").innerText = "";
    document.getElementById("carriage").innerText = "";
    document.getElementById("code").innerText = "";
    document.getElementById("price").innerText = "";
});

