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


const bar = document.getElementById('top-bar');
const scrollThreshold = 50;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    if (scrollTop > scrollThreshold) {
        bar.classList.add('visible');
    } else {
        bar.classList.remove('visible');
    }
});

document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('dropdown-menu').classList.toggle('show');
});

function fetchImages(year) {
    const folderPath = '../img/premio-marzani/' + year + '/slider/';
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const sliderContainer = document.querySelector('.slider-container');
    const slider = sliderContainer.querySelector('.slider');
    let files = [];
    //     fetch(folderPath, {
    //   headers: {
    //     Accept: 'application/json',
    //}
    //})
    //  .then(response => response.text())
    //.then(data => {
    //    const files = JSON.parse(data);
    if (year == '2024') {
        files = ['24070476-7c3c-4689-9f1f-140e89f36652.JPG', '312b9912-7cc1-4310-8d75-840ad0c17fcb.JPG', '623abd61-38e6-4c1d-a2f6-66b27290ec98.JPG', '654e82a3-6c58-402f-b01a-ff3d9d7bdbe0.JPG', '654e82a3-6c58-402f-b01a-ff3d9d7bdbe0[1].JPG', '7e057c7e-9b73-4772-b011-83b1656267b9.JPG', '8480535f-11ec-4a61-9d43-fe498151b50f.JPG', '86e63d09-21d0-4ce9-bc1a-c33b8c218b78.JPG', '8ca9e11b-15a5-4140-99f9-11b90e87333e.JPG', '9a01a342-6e95-44d2-a6bb-1cdfb9e0ff85.JPG', 'IMG_3964.jpg', 'IMG_3965.jpg', 'IMG_3966.jpg', 'IMG_3967.jpg', 'IMG_3970.jpg', 'IMG_3971.jpg', 'IMG_3972.jpg', 'IMG_3974.jpg', 'IMG_3975.jpg', 'b7063239-2111-4a39-89d1-a240a34c9d30.JPG', 'cf3cccac-519a-4fea-aac7-9059f0453d4b.JPG', 'df73e155-eee2-43e6-be10-560f1c994c49.JPG', 'e867b2f6-80f7-436a-b66f-5a0a08c9b4c2.JPG', 'fb1f0481-bf7a-49c8-ab91-2e09eca984fd.JPG']
    }
    else if (year == '2023') {
        files = ['000.PNG', '00106ed2-ad1c-4cbc-acaf-941410235b01.JPG', '05904deb-b48b-4973-a3f2-d779c09d7fce.JPG', '072504c6-074d-4559-ab7c-94076503d770.JPG', '09494aca-a8e7-4c09-973e-0d3e98f58f99.JPG', '0bfe3bc4-42a0-47f8-902b-8b1a97132317.JPG', '15c168c8-79c2-497b-a5c1-f5ebd9c30d58.JPG', '16366336-f69a-4dfd-be58-172161bbe1ba.JPG', '1a37814d-138c-4b51-baf3-c1592fde99c1.JPG', '1ca544bc-b8bb-40ec-9940-7d20492fb21c.JPG', '239159a8-b114-47e7-8c20-38f909bab688.JPG', '3f4d8689-70b9-41f5-861f-7061635b4aa4.JPG', '520cddfb-0cdb-4f15-994a-6c163669af12.JPG', '58a7cd7c-a307-4b6b-a0f6-d2caf7d64561.JPG', '59b100b9-92eb-4d7c-bb9c-1ed98d099fee.JPG', '5ad7b19e-5c84-41d3-a909-86c9682d229d.JPG', '6265bc0a-d164-4999-b516-0b1023da9c6e.JPG', '6327c190-a3b5-4215-a63b-ae14c29ba4da.JPG', '6d9c4928-f895-42b8-abfb-035a975439cf.JPG', '6e89d6c2-2463-4e0c-87f8-edaeb7b250d7.JPG', '722ce590-3e51-4f1b-8cd5-9afa17c9a3d6.JPG', '8a65dee9-28c8-4b27-b942-552f147d81ba.JPG', '8d9beaea-3131-49d4-98c8-5120f91bbd58.JPG', '918310c2-858c-4e86-b332-b597fcb621c6.JPG', 'IMG_2287.JPG', 'IMG_2492.jpg', 'IMG_2497.jpg', 'IMG_2498.jpg', 'IMG_2504.jpg', 'IMG_2505.jpg', 'a03af5c7-d981-4675-a829-f1f6f85f374f.JPG', 'a097cbf9-31b2-49b0-a1b4-0283219832d0.JPG', 'af682b5e-638e-4b28-bc0b-b05bd304a0a9.JPG', 'b31e96be-2dc0-4e65-8a0d-e6904114c4c5.JPG', 'b5deaab6-8277-4b3f-9944-db8f262a0c9e.JPG', 'ba55b264-a6f9-491f-835b-59c48222d5aa.JPG', 'bc95b856-3f38-455f-873c-4ee22c1d9d26.JPG', 'cd0f789f-f41b-4ba0-93da-2faabeab1dfa.JPG', 'd42d2da4-7026-4dae-9838-4c8a6120723f.JPG', 'd840f7b8-5cd0-449f-b5fb-fae3b465ec4f.JPG', 'dca5aeae-d6b0-4e8c-9f5d-c7e6cca32e47.JPG', 'e3a7e8fe-6806-4fa9-9ce6-7997ddc4d2fe.JPG', 'e94286cc-611f-405b-9b6a-5e92921f5ffd.JPG', 'ebc9ad0c-b957-4bac-a6e1-faf2f5407e79.JPG', 'ecdc5a01-746b-4b13-95c0-9374f8f55fd3.JPG', 'ed06967c-0cfb-4de1-8f00-c2deaef031c0.JPG', 'f0f93a3f-2341-42b4-85af-ed3ecc7a7b67.JPG', 'f2982ee4-4dae-4d8b-ae7c-31e86d96455f.JPG', 'fca75222-87bf-4805-b89e-dde490f1425c.JPG', 'fcd2a824-59ab-4230-a0c0-3f28959808e8.JPG'];
    }
    else if (year === '2008') {
        files = ['IMG_20250206_0001.jpg', 'IMG_20250206_0002.jpg', 'IMG_20250206_0004.jpg', 'IMG_20250206_0005.jpg', 'IMG_20250206_0006.jpg', 'IMG_20250206_0007.jpg', 'IMG_20250206_0008.jpg', 'IMG_20250206_0009.jpg', 'IMG_20250206_0010.jpg', 'IMG_20250206_0011.jpg'];
    }
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
        const navLink = document.createElement('a');
        navLink.href = `#slide-${index + 1}`;
        sliderNav.appendChild(navLink);
    });
}
//});


const url = new URL(window.location.href);
const year = url.pathname.split('-').pop().split('.')[0];

fetchImages(year);


