document.addEventListener("DOMContentLoaded", function() {
    const popularItems = document.querySelector('#popular-items__container'),
    hoverItemClass = 'popular-item';
    let timer = null;



    popularItems.addEventListener('mouseover', mouseOverAndOutCardHandler);
    document.addEventListener("mouseover", checkHoverCardsHandler);
    popularItems.addEventListener('mouseout', mouseOverAndOutCardHandler);
    // popularItems.addEventListener('click', clickCardCardHandler);

/* Event Handlers */
    function mouseOverAndOutCardHandler(evt) {
        const hoveredItem = evt.target.closest('.'+ hoverItemClass);
        if(hoveredItem !== undefined && hoveredItem !== null) {
                  switch (evt.type) {
                    case 'mouseover':
                        if(evt.target.closest('.popular-items') !== null) {
                            if(hoveredItem.classList.contains('hover-card')){
                                clearTimeout(timer);
                                return;
                            }else{
                                resetAllHover();
                            } 
                        }
                        timer = setTimeout(function() {
                            hoveredItem.classList.add('current');
                            hoveredItem.classList.add('hover-card');
                        },500);
                        break;
                        case 'mouseout': 
                        clearTimeout(timer);
                        if(!hoveredItem.classList.contains('hover-card')){
                            clearTimeout(timer);
                            resetAllHover();

                        }

                        break;
                  }
        }
    }

    function clickCardCardHandler(evt){
        const hoveredItem = evt.target.closest('.'+ hoverItemClass);
        if(hoveredItem.classList.contains('hover-card')){
            hoveredItem.classList.remove('hover-card');
            hoveredItem.classList.remove('current');
    
        }
        else{
            hoveredItem.classList.add('hover-card');
            hoveredItem.classList.add('current');

        }

    }

    function checkHoverCardsHandler(evt){
        if(evt.target.closest('#popular-items__container') === null) {
            resetAllHover();
        }
    }



    function resetAllHover() {
     document.querySelectorAll('.hover-card').forEach(function(item){
        item.classList.remove('hover-card');
        item.classList.remove('current');
     });   
    }

});