
const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(function(card) {
    card.addEventListener("click", function() {
        card.classList.toggle("flipped");
    });
});
