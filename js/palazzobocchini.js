(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    function setCurrentDayFormatted() {
        var currentDayFormatted = new Date().toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        document.getElementById("current-date-formatted").innerHTML = currentDayFormatted;
    }
    setCurrentDayFormatted();

    function setCurrentDay() {
        var currentDayFormatted = new Date().toLocaleString('en-US', {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
        currentDayFormatted = currentDayFormatted.replace(',', '.');
        document.getElementById("current-date").innerHTML = currentDayFormatted;
    }
    setCurrentDay();
})(jQuery);

let currentSlide = 0;
let images = []; 

function fetchImages() {
    const folderPath = 'js/manifesti/manifesti_palazzo_bocchini/';
    console.log('folderPath', folderPath);
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const sliderContainer = document.querySelector('.slider-container');
    const slider = sliderContainer.querySelector('.slider-vertical');

   //     fetch(folderPath, {
     //   headers: {
       //     Accept: 'application/json',
        //}
    //})
      //  .then(response => response.text())
        //.then(data => {
           // const files = JSON.parse(data);

            const files = ['1.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg']
            images = [];
            files.forEach((file, index) => {
                const filePath = folderPath + file;
                const fileExtension = file.split('.').pop().toLowerCase();
                if (imageExtensions.includes(fileExtension)) {
                    const img = document.createElement('img');
                    img.src = filePath;
                    img.id = `slide-${index + 1}`;
                    images.push(img);
                    slider.appendChild(img);
                }
            });

            // Create navigation links for each image
            const sliderNav = sliderContainer.querySelector('.slider-nav');
            images.forEach((img, index) => {
                console.log('img', images);
                const navLink = document.createElement('a');
                navLink.href = `#slide-${index + 1}`;
                sliderNav.appendChild(navLink);
            });
        }
    //)}

fetchImages();


function updateSlide() {
  const images = document.querySelectorAll('.slider-vertical img');
  images.forEach((img, index) => {
    if (index === currentSlide) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}

function previousSlide() {
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  updateSlide();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % images.length;
  updateSlide();
}

const slider = document.querySelector('.slider-vertical');

slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

slider.addEventListener('touchend', () => {
  if (endX - startX > 50) { // swipe right
    previousSlide();
  } else if (endX - startX < -50) { // swipe left
    nextSlide();
  }
});