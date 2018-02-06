var totalElements = document.getElementById("carousel-counter--first").childElementCount;

window.onload = function () {
  document.getElementById("total-elements").innerHTML = totalElements;
  document.querySelector("#myCarousel-first #active-slide").innerHTML = "1";
};
function caruselPrev() {
  var currentSlide = parseInt(document.querySelector("#myCarousel-first li.active").getAttribute("data-slide-to"));
  if(currentSlide > 1) {
    currentSlide--;
  } else {
    currentSlide = totalElements;
  }
  document.querySelector("#myCarousel-first #active-slide").innerHTML  = currentSlide;
}

function caruselNext() {
  var currentSlide = parseInt(document.querySelector("#myCarousel-first li.active").getAttribute("data-slide-to"));
  if(currentSlide < totalElements) {
    currentSlide++;
  } else {
    currentSlide = 1;
  }
  document.querySelector("#myCarousel-first #active-slide").innerHTML  = currentSlide;
}

$('.carousel-second .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  
});