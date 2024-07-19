document.addEventListener("DOMContentLoaded",function(){
    const burger = document.querySelector('#burger'),
          navList = document.querySelector('#nav-list'),
          overlay = document.querySelector('#overlay'),
          lastLineBurger = document.querySelector('.line-3');
    if(issetItem(burger)){

        burger.addEventListener('click',openAndCloseMenu);

    }



          function openAndCloseMenu(e){
            if(issetItem(overlay)){
                overlay.classList.toggle('active');
                navList.classList.toggle('active');
                burger.classList.toggle('clicked-js');
                if(navList.classList.contains('active')){
                  document.body.classList.add('lock');
                }else{
                  document.body.classList.remove('lock');

                }
                makeCloseButtonFromBurger();
            }
          }


          function issetItem(item){
            if(item !== null && item !== undefined) return true;
            return  false;
          }


          function makeCloseButtonFromBurger(){
            if(burger.classList.contains('clicked-js')) {
                lastLineBurger.style.display = 'none';
            }else{
                lastLineBurger.style.display = 'block';

            }
          }
});