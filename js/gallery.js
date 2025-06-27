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


    // Main News carousel
    $(".main-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        center: true,
    });


    // Tranding carousel
    $(".tranding-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ]
    });


    // Carousel item 1
    $(".carousel-item-1").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });

    // Carousel item 2
    $(".carousel-item-2").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });


    // Carousel item 3
    $(".carousel-item-3").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Carousel item 4
    $(".carousel-item-4").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
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


// --------------------GALLERY--------------------

// Get the container element for the gallery
const galleryContainer = document.getElementById('portfolio-all');

// Define the years and their corresponding class names
const years = [
  { year: 2024, className: 'filter-people' },
  { year: 2023, className: 'filter-resturant' },
  { year: 2008, className: 'filter-chefs' },
];

// Function to generate the HTML for a gallery item
function generateGalleryItem(year, className, imageNumber) {
  return `
    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 portfolio-item ${className}">
      <div class="portfolio--img">
        <img src="assets/gallery/${year}/${imageNumber}.JPG" alt="${year}">
        <div class="portfolio--hover">
          <div class="portfolio--action">
            <div class="pos-vertical-center">
              <div class="portfolio--zoom">
                <a class="img-gallery-item" href="assets/gallery/${year}/${imageNumber}.JPG" title="${year}"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function getImageCount(year) {
    if (year === 2024) { return 23; }
    else if (year === 2023) { return 48; }
    else if (year === 2008) { return 10; }
    else    { return undefined; }
  }

// Function to generate the HTML for the gallery
function generateGallery() {
    const galleryHtml = [];
    years.forEach((year) => {
      console.log('year', year);
      const imageCount = getImageCount(year.year);
      if (imageCount === undefined) {
        console.error('getImageCount is not implemented');
        return;
      }
      for (let i = 1; i <= imageCount; i++) {
        const imageNumber = i;
        galleryHtml.push(generateGalleryItem(year.year, year.className, imageNumber));
        console.log('galleryHtml', galleryHtml);
      }
    });
    galleryContainer.innerHTML = galleryHtml.join('');
  }

// Call the generateGallery function to generate the gallery
generateGallery();