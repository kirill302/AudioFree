//slider
new Swiper('.product-slider', {

   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
});


function obn(command) {
   location = location;

   command();
}


// rating

const ratings = document.querySelectorAll('.rating');



ratings.forEach(rating => {

   let stars = rating.children;

   let starsActive = parseInt(rating.getAttribute('data-rating'));

   for (let i = 0; i < starsActive; i++) {
      stars[i].classList.add('active');
   }
});

// icons 'produc-card'

document.querySelectorAll('.shares__icons > span').forEach(item => {
   item.addEventListener('click', () => { 
      item.classList.toggle('active');
   })
})


// tab

const tabBtns = document.querySelectorAll('.tab-btn__item');
const tabContents = document.querySelectorAll('.tab-content__item');
let id;
let mYcontent;

tabBtns.forEach(item => {
   item.addEventListener('click', () => {
      id = item.getAttribute('data-tab');
      mYcontent = document.getElementById(id);

      tabBtns.forEach(item => {
         item.classList.remove('active');
      });
      tabContents.forEach(item => {
         item.classList.remove('active')
      })

      item.classList.add('active');

      
      mYcontent.classList.add('active');
   }
)});



const status = document.querySelectorAll('.shares__status');
let bolStatus;

status.forEach(item => {
   bolStatus = Boolean(parseInt(item.getAttribute('data-status')));

   if (bolStatus) {
      item.classList.remove('status-false');
   } else {
      item.classList.add('status-false');
   }
})




const search = document.querySelector('.header__search');
const headerMain = document.querySelector('.header__main');

window.addEventListener('resize', () => {
   const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);


   if (width <= 521) {
      search.addEventListener('click', () => {
         search.classList.toggle('search-active');
         headerMain.classList.toggle('search-active');
      })
   } else {
      search.classList.remove('search-active');
      headerMain.classList.remove('search-active');
   }
})

let burger = document.querySelector('.header__burger');
// let body = document.body;
let nav =  document.querySelector('.header__navDown');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   nav.classList.toggle('burger-active');
});