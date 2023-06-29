function toggleNavbar() {
    var navbar = document.getElementById('navbar-nav');
    navbar.classList.toggle('active');
    var navbarToggle = document.getElementsByClassName('navbar-toggle')[0];
    navbarToggle.classList.toggle('active');
    setTimeout(function () {
        navbar.classList.toggle('show');
    }, 10); // Add a small delay before toggling the 'show' class
}


document.addEventListener('DOMContentLoaded', function() {
    const slides = Array.from(document.querySelectorAll('.carousel-item'));
    const totalSlides = slides.length;
    let currentSlide = 0;
    const intervalTime = 3000; // Time between slide transitions (in milliseconds)
    let slideInterval = setInterval(nextSlide, intervalTime);
  
    function showSlide(index) {
      slides.forEach(function(slide) {
        slide.style.opacity = 0;
      });
  
      slides[index].style.opacity = 1;
      currentSlide = index;
    }
  
    function nextSlide() {
      currentSlide++;
      if (currentSlide >= totalSlides) {
        currentSlide = 0;
      }
      showSlide(currentSlide);
    }
  
    function previousSlide() {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
      }
      showSlide(currentSlide);
    }
  
    const nextButton = document.getElementById('carousel-next');
    const prevButton = document.getElementById('carousel-prev');
  
    nextButton.addEventListener('click', function() {
      nextSlide();
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    });
  
    prevButton.addEventListener('click', function() {
      previousSlide();
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    });
  
    // Define the URLs for each image
    const imageUrls = [
      '#first',
      '#2nd',
      '#3rd'
    ];
  
    // Add click event listeners to the image elements
    const imageElements = document.querySelectorAll('.carousel-item img');
    imageElements.forEach(function(element, index) {
      element.addEventListener('click', function() {
        // Redirect to the corresponding URL
        window.location.href = imageUrls[currentSlide];
      });
    });
  
    showSlide(currentSlide);
  });
  
  // for site loader 
