document.addEventListener('DOMContentLoaded', function () {
    generateRecommendation();
});

function generateRecommendation() {
    const recommendations = [
        "CURRENT: Tom Holland Pregnant",
        "HISTORY: Founding Fathers rolling in the grave?",
        "EXPLORE: Delusional girl thinks she won the lottery",
        "CURRENT: My Little Pony is real",
        "HISTORY: Pythagoras Canceled?",
        "HISTORY: Isaac Newton Canceled?",
        "CURRENT: Earth is flat",
        "CURRENT: How to act against inflation",
    ];

    const randomIndex = Math.floor(Math.random() * recommendations.length);
    const recommendationText = document.getElementById('recommendationText');
    recommendationText.textContent = recommendations[randomIndex];
}


//have the mouse position trigger the scrolling

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".container").forEach(function (container) {
    var scrollingText = container.querySelector(".scrolling-text");

    container.addEventListener("mouseenter", function () {
      scrollingText.classList.add("scrolling-active");
    });

    container.addEventListener("mouseleave", function () {
      scrollingText.classList.remove("scrolling-active");
    });
  });
});



