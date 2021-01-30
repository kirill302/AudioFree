//slider
new Swiper('.product-slider', {

   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
});


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
)})