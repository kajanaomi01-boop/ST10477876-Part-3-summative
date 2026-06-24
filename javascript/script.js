let slideIndex =1;
showSlides(slideIndex);

//Next or previous controls
function plusslides(n)
{
    showSlides(slideIndex += n);
}

//Thumbnail image control
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1; }
    if (n < 1) {slideIndex = slides.length; }
    //hide all slides
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //remove "active" from all dots
    for(1 = 0; 1 < dots.length; 1++) {
        dots[i].classList.remove("active");
    }
    //show current slide
    slides[slideIndex - 1].Style.display = "block";
    //add "active" to the current dot
    dots[slideIndex - 1].classList.add("active")

    function nextSlide(){
        console.log("clicked");
    }
}
