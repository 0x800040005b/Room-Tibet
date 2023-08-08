import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";
const swiper = new Swiper('.popular-slider', {
    slidesPerView: 2,
    slidesPerGroup: 1,
    centeredSlides: true,
    initialSlide: 1,
    breakpoints: {
        1200: {
            slidesPerView: 3,

        },
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
            
        },
        576: {
            slidesPerView: 1,
        }
    }
/*     autoplay: {
        delay: 500,
    }
 */    

    


    
});
