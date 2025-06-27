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

function fetchImages(year) {
    const folderPath = '../img/premio-marzani/' + year + '/slider/';
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const sliderContainer = document.querySelector('.slider-container');
    const slider = sliderContainer.querySelector('.slider');

    fetch(folderPath, {
        headers: {
            Accept: 'application/json'
        }
    })
        .then(response => response.text())
        .then(data => {
            const files = JSON.parse(data);
            const images = [];

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
        })
}

const url = new URL(window.location.href);
const year = url.pathname.split('-').pop().split('.')[0];

fetchImages(year);