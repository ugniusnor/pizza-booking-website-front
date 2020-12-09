function carousel () {
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        dots: '#dots',
        type:"slider",
        draggable: true,
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
      });
   
   
   }
   export default carousel;