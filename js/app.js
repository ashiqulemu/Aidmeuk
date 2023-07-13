
var myCarousel = document.querySelector('#carouselExampleFade')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 4000,
  wrap: true
})


function catchAmount(event){ 
   let donate = document.getElementById("donate").innerHTML = "£"+ event.target.value;
   let prodeccingfee =  document.getElementById("prodeccingfee").value = event.target.value*2/100;
   document.getElementById("process").innerHTML  = '£'+ prodeccingfee; 
}

 