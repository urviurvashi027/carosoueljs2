
var carousel = document.getElementById('carousel');
// console.log('carousel',carousel.querySelectorAll('li'));



  /* configuration */
 let width = 97; 
 let count = 1; 

 let list = carousel.querySelector('ul');
 let listElems = carousel.querySelectorAll('li');

 let position = 0;


 carousel.querySelector('.prev').onclick = function() {
    // shift left
    position += width * count;
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
  };

  carousel.querySelector('.next').onclick = function() {
    // shift right
    position -= width * count;
    console.log((listElems.length - count));
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
  };

