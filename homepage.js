var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // index of the first image 
const interval = 3000; // duration(speed) of the slide

function changeSlide(n) {
  for (var i = 0; i < imgs.length; i++) { // reset
    imgs[i].classList.remove('active');
    dots[i].classList.remove('active');
  }

  currentImg = n;

  imgs[currentImg].classList.add('active');
  dots[currentImg].classList.add('active');
}

function startSlideshow() {
  var timer = setInterval(function() {
    currentImg = (currentImg + 1) % imgs.length;
    changeSlide(currentImg);
  }, interval);
}

startSlideshow();
//Get all necessary elements
// const slider = document.querySelector('.slider');
// const slides = document.querySelectorAll('.slider img');
// const buttons = document.querySelectorAll('.buttons button');
// const description = document.querySelector('.description');

// let slideIndex = 0;

// // Set up event listeners for buttons
// buttons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     // Remove active class from all buttons
//     buttons.forEach(button => button.classList.remove('active'));

//     // Add active class to clicked button
//     button.classList.add('active');

//     // Set slide index to clicked button's index
//     slideIndex = index;

//     // Update slider
//     updateSlider();
//   });
// });

// // Set up event listener for slider navigation dots
// document.querySelectorAll('.dot').forEach((dot, index) => {
//   dot.addEventListener('click', () => {
//     slideIndex = index;
//     updateSlider();
//   });
// });

// // Function to update slider
// function updateSlider() {
//   // Remove active class from all slides
//   slides.forEach(slide => slide.classList.remove('active'));

//   // Add active class to current slide
//   slides[slideIndex].classList.add('active');

//   // Update description text
//   description.textContent = slides[slideIndex].getAttribute('data-description');

//   // Update active navigation dot
//   document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
//   document.querySelectorAll('.dot')[slideIndex].classList.add('active');
// }

// // Initialize slider
// updateSlider();

// // Set up automatic slider interval
// let sliderInterval = setInterval(() => {
//   slideIndex++;

//   if (slideIndex >= slides.length) {
//     slideIndex = 0;
//   }

//   updateSlider();
// }, 5000);

// // Pause slider interval when mouse is over slider
// slider.addEventListener('mouseover', () => {
//   clearInterval(sliderInterval);
// });

// // Resume slider interval when mouse leaves slider
// slider.addEventListener('mouseout', () => {
//   sliderInterval = setInterval(() => {
//     slideIndex++;

//     if (slideIndex >= slides.length) {
//       slideIndex = 0;
//     }

//     updateSlider();
//   }, 5000);
// });
