let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.opacity = 1;
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function plusSlides(n) {
  slideIndex += n - 1;
  let slides = document.getElementsByClassName("mySlides");
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  slides[slideIndex].style.opacity = 1;
}
