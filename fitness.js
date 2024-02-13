// let swipeindex = 0;
// swipeon();

// function swipeon(){
//     let i;
//     let swipes = document.getElementsByClassName("swipe");
//     let dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}    
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " active";
//     setTimeout(showSlides, 2500)
// }

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("sliding");
  let dots = document.getElementsByClassName("dot");
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
  setTimeout(showSlides, 2500); // Change image every 2 seconds
}



// let slideInde = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("sliding0");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideInde++;
//   if (slideInde > slides.length) {slideInde = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideInde-1].style.display = "block";  
//   dots[slideInde-1].className += " active";
//   setTimeout(showSlides, 2500); // Change image every 2 
// }


let slidingindex = 0;
showsSlidings();

function showsSlidings() {
  let i;
  let slide = document.getElementsByClassName("sliding0");
  let dots = document.getElementsByClassName("dot");
  for(i = 0; i < slide.length; i++){
    slide[i].style.display = "none";
  }
  // slidingindex=(slidingindex+1)%slide.length;
  slidingindex++;
  if(slidingindex >= slide.length) { slidingindex = 0 }
  for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace("active", "");
  }
  slide[ slidingindex].style.display = "block";
  dots[ slidingindex].className += " active";
  setTimeout(showsSlidings, 2500);
}

