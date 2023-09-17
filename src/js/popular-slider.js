
document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.popular-slider', {
        slidesPerView: 3, 
        spaceBetween: 10,   
        breakpoints: {
            991: {
                slidesPerView:3,
                spaceBetween: 20,
                centeredSlides: false,
        
            },
            752: {
              slidesPerView: 2,
                slidesPerGroup: 1,
                centeredSlides: false,
            },
            687: {
                slidesPerView:2,
                slidesPerGroup:1,
            },
            475: {
                slidesPerView:1,
                slidesPerGroup:1,
                centeredSlides: true,
                centeredSlidesBounds: true,
                spaceBetween: 30,
            },

            320: {
                slidesPerView:1,
                SlidesPerGroup:1,
                spaceBetween: 70,

            }
        }
    })  
    
});
