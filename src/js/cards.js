document.addEventListener("DOMContentLoaded", function() {
    console.log(1);
    const popularItems = document.querySelector('#popular-items__container'),
    hoverItemClass = 'popular-item';

    popularItems.addEventListener('mouseover', mouseOverCardHandler);
    popularItems.addEventListener('mouseout', mouseOutCardHandler);

/* Event Handlers */
    function mouseOverCardHandler(evt) {
        console.log('mouseEnterCardHandler');
        const hoveredItem = evt.target.closest('.'+ hoverItemClass);
        if(hoveredItem !== undefined && hoveredItem !== null) {
            const popularInfoBlock = hoveredItem.querySelector('.popular-info'),
                  popularInfoDetailBlock = hoveredItem.querySelector('.popular-info__detail');
                  popularInfoBlock.classList.add('current');
                  popularInfoDetailBlock.classList.add('current');
        }
    }
    function mouseOutCardHandler(evt) {
        console.log("mouseLeaveCardHandler");
        const hoveredItem = evt.target.closest('.'+ hoverItemClass);
        if(hoveredItem !== undefined && hoveredItem !== null) {
            const popularInfoBlock = hoveredItem.querySelector('.popular-info'),
            popularInfoDetailBlock = hoveredItem.querySelector('.popular-info__detail');
            popularInfoBlock.classList.remove('current');
            popularInfoDetailBlock.classList.remove('current');

        }
    }

});