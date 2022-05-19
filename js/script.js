const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockId = anchor.getAttribute('href');
    document.querySelector('' + blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  })
}

// Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



// Test
const projects = document.getElementsByClassName('image-slider__slide');
const container = document.querySelector('main');

for (let project of projects) {

  project.addEventListener('click', function(e) {
    
    const position = this.getBoundingClientRect();
    const heightWidth = this.getBoundingClientRect();

    const el = this.querySelector('.content');

    
    const cloneEl = el.cloneNode(true);
    const caption = cloneEl.querySelector('.caption');

    var closeBtn = document.createElement('div');
    closeBtn.innerHTML = '<button type="button" class="close">Close</buuton>';

    caption.appendChild(closeBtn);




    // console.log(heightWidth)
    
    
    cloneEl.style.position = 'absolute';
    cloneEl.style.top = position.top + 'px';
    cloneEl.style.left = position.left + 'px';
    // cloneEl.style.left = '0px';
    // cloneEl.style.width = heightWidth.width + 'px';
    cloneEl.style.width = '100%';
    cloneEl.style.height = heightWidth.height + 'px';
    cloneEl.style.display = 'grid';
    
    
    
    // cloneEl.classList.add('clone');
    container.appendChild(cloneEl);
    
    function animate() {
      cloneEl.style.left =  '0px';
      cloneEl.style.gridTemplateRows = heightWidth.height + 'px';
      cloneEl.style.gridTemplateColumns = heightWidth.width + 'px 1fr';
      // cloneEl.style.gridTemplate = heightWidth.height + 'px' + '/' + heightWidth.width + 'px' + '1fr';
      }

      function animate2() {
        caption.style.transform = 'translateY(0)';
      }

      setTimeout(animate2, 300);
      
      setTimeout(animate, 0.1);
      
    // container.appendChild(cloneEl);


    document.querySelector('.close').addEventListener('click', () => {
 
      caption.style.transform = 'translateY(-200%)';
      function animate4() {
        cloneEl.style.left =  position.left + 'px';
      }

      setTimeout(animate4, 300)

      function animate3() {
      container.removeChild(cloneEl);

      }

      setTimeout(animate3, 1200);

    })


  })

  


}

