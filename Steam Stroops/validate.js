let email = document.getElementById("EMAIL")
let phone = document.getElementById("PHONE")

let city = document.getElementById("CITY")
let region = document.getElementById("REGION")
let school = document.getElementById("SCHOOL")

let name  = document.getElementById("NAME")
let submitBtn = document.getElementById("SUBMIT-BTN")

name.addEventListner('keyup', () =>{
    if(name.value.length>6) 
        submitBtn.style.color = "blue";
});

// Slider Code Start
var slideIndex = [];
showSlides();

function plusSlides(n) {
showDivs(slideIndex += n);
}
function showSlides() {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}    
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
setTimeout(showSlides, 3000); //3 seconds
}

//Slider code end