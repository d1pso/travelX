const mobileNavBtn = document.querySelector('[data-burger-btn-open]');
const mobileNavMenu = document.querySelector('[data-burger-menu]');
const mobileNavBtnClose = document.querySelector('[data-burger-btn-close]');
const mobileNavOverlay = document.querySelector('.header__mobile-nav-overlay');
const swiper = new Swiper('.swiper', {
      loop: true,

      speed: '1000',

      parallax: true,

      navigation: {
            nextEl: '#arrowNext',
            prevEl: '#arrowPrev',
      },
      pagination: {
            el: '.header__slider-controls-count',
            type: 'fraction',
      },
      scrollbar: {
            el: '.swiper-scrollbar',
      },

})

mobileNavBtn.addEventListener('click', function() {
      mobileNavMenu.classList.add('header__mobile-nav--active');
      document.body.classList.add('no-scroll')
      mobileNavOverlay.classList.add('header__mobile-nav-overlay--active')
})
mobileNavBtnClose.addEventListener('click', function() {
      mobileNavMenu.classList.remove('header__mobile-nav--active');
      document.body.classList.remove('no-scroll')
      mobileNavOverlay.classList.remove('header__mobile-nav-overlay--active')
})
