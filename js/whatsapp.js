
document.getElementById("availabilityform").addEventListener("submit", function(e) {
    e.preventDefault();

    let checkin = document.getElementById("checkin_date").value;
    let checkout = document.getElementById("checkout_date").value;
    let adults = document.getElementById("adults_select").value;
    let children = document.getElementById("children_select").value;

    let message =
        "Hello, I would like to check availability:%0A" +
        "Check-in: " + checkin + "%0A" +
        "Check-out: " + checkout + "%0A" +
        "Adults: " + adults + "%0A" +
        "Children: " + children;

    let whatsappNumber = "9656017532"; // your WhatsApp number

    let whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + message;

    window.open(whatsappURL, "_blank");
});

