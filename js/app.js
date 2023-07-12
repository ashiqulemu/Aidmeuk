
var myCarousel = document.querySelector('#carouselExampleFade')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 4000,
  wrap: true
})


function catchAmount(event){
  console.log(event.target.value)
  document.getElementById("donate").innerHTML = "$"+ event.target.value
}

function onchange(event){
  console.log(event);
}