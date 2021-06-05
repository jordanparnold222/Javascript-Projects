//COUNTDOWN PROGRAM
function countdown()    {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);

        if (seconds == -1){
            alert("Time is up!");
        }
    }
    tick();
}

//SLIDESHOW FUNCTIONS

var slideIndex = 1;

showSlides(slideIndex);

//NEXT-PREVIOUS CONTROLS
function plusSlides(n)  {
    
    showSlides(slideIndex += n)

}

//THUMBNAIL IMAGE CONTROLS
function showSlides(n)  {

    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length)  {slideIndex = 1}

    if (n < 1)  {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}