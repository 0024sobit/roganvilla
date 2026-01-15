document.getElementById("availabilityform").addEventListener("submit", function(e) {
    e.preventDefault();

    let checkin = document.getElementById("checkin_date").value.split(",")[0];
    let checkout = document.getElementById("checkout_date").value.split(",")[0];
    let adults = document.getElementById("adults_select").value;
    let children = document.getElementById("children_select").value;

    let message =
        "Hello, I would like to check availability:%0A" +
        "Check-in: " + checkin + "%0A" +
        "Check-out: " + checkout + "%0A" +
        "Adults: " + adults + "%0A" +
        "Children: " + children;

    let whatsappNumber = "919820976111"; // include country code (91)

    let whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + message;

    window.open(whatsappURL, "_blank");
});
