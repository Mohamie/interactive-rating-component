document.addEventListener("DOMContentLoaded", function(){
    const ratingNumbers = document.querySelectorAll(".rating--number");
    const submitButton = document.querySelector(".submit_btn");
    let selectedRating = null;


    ratingNumbers.forEach(number => number.addEventListener("click", onRatingNumberClick));

    submitButton.addEventListener("click", onRatingSubmit);

    function onRatingNumberClick(event){
        //remove prev rating
        if(selectedRating) selectedRating.classList.remove("active");

        const element = event.target;

        element.classList.add("active");
        selectedRating = element;
    }

    function onRatingSubmit(){
        if(!selectedRating) return;

        const cardRating = document.querySelector(".card");
        const cardThankYou = document.querySelector(".card--thank-you");
        cardRating.remove();
        cardThankYou.style.display = "flex";

        cardThankYou.querySelector(".selected_rating span").innerHTML = selectedRating.getAttribute("data-rating");
    }
});