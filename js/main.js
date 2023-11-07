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
    //generate a random carriage number
    let carriageNum = Math.floor(Math.random() * 10 + 1);
    document.getElementById("carriage").innerText = carriageNum;
    //generate a random number for the code
    let codeNum = String(Math.floor(Math.random() * 100000)).padStart(5, '0');
    document.getElementById("code").innerText = codeNum;
    //insert passenger name on ticket
    document.getElementById("passenger-name").innerText = name;
    //calculate ticket price
    const priceKm = 0.21;
    const totalTicketPrice = distance * priceKm;
    //apply discount if needed
    let discount = 0;
    if (age =="minorenne") {
        discount = totalTicketPrice * 0.20;
    } else if (age == "over65") {
        discount = totalTicketPrice * 0.40;
    };
    //calculate final price with discount
    const finalTicketPrice = totalTicketPrice - discount;
    //insert price on ticket
    document.getElementById("price").innerText = `€${finalTicketPrice.toFixed(2)}`;
    //show ticket title
    const ticketTitle = document.getElementById("ticket-title");
    ticketTitle.classList.remove("hidden");
    //show ticket
    const ticket = document.getElementById("ticket-info");
    ticket.classList.remove("hidden");
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
    //hide ticket title
    const ticketTitle = document.getElementById("ticket-title");
    ticketTitle.classList.add("hidden");
    //hide ticket
    const ticket = document.getElementById("ticket-info");
    ticket.classList.add("hidden");
});

