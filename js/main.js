(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });
    
    
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

    
    // Main carousel
    $(".carousel .owl-carousel").owlCarousel({
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        smartSpeed: 500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });

    // JavaScript for image transitions while scrolling
    const images = document.querySelectorAll('.about-img img');

    // Configuration for the Intersection Observer
    const observerConfig = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Adjust as needed, this defines when the transition should trigger
    };

    // Function to handle intersection changes
    function handleIntersect(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }

    // Create the Intersection Observer
    const observer = new IntersectionObserver(handleIntersect, observerConfig);

    // Add each image to the observer
    images.forEach(image => {
        observer.observe(image);
    });
    
    // Get a reference to the section header element
    const sectionHeader = document.querySelector('.section-header');

    // Function to check if an element is in the viewport
    function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    }

    // Function to handle the scroll event
    function handleScroll() {
    if (isElementInViewport(sectionHeader)) {
        sectionHeader.classList.add('animated'); // Add a class to trigger the animation
        window.removeEventListener('scroll', handleScroll); // Remove the event listener once the animation is triggered
    }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Get a reference to the heading element
    const animateHeading = document.querySelector('.animate-heading');

    // Function to check if an element is in the viewport
    function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    }

    // Function to handle the scroll event
    function handleScroll() {
    if (isElementInViewport(animateHeading)) {
        animateHeading.classList.add('animated'); // Add a class to trigger the animation
        window.removeEventListener('scroll', handleScroll); // Remove the event listener once the animation is triggered
    }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // JavaScript functions to add and remove the "pop-out" class
function addPopOutClass(element) {
    element.classList.add("pop-out");
}

function removePopOutClass(element) {
    element.classList.remove("pop-out");
}

// Get all col-md-4 elements and add event listeners
const colMd4Elements = document.querySelectorAll(".col-md-4");

colMd4Elements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        addPopOutClass(element);
    });

    element.addEventListener("mouseleave", () => {
        removePopOutClass(element);
    });
});

    // Get appointment button functioning 

    document.addEventListener("DOMContentLoaded", function () {
        const modal = document.getElementById("appointmentModal");
        const openModalButton = document.querySelector(".btn-custom");
        const closeModalButton = document.querySelector(".close");
        const appointmentForm = document.getElementById("appointmentForm");
        const confirmationMessage = document.getElementById("confirmationMessage");
      
        // Open the modal
        openModalButton.addEventListener("click", function () {
          modal.style.display = "block";
        });
      
        // Close the modal
        closeModalButton.addEventListener("click", function () {
          modal.style.display = "none";
        });
      
        // Handle form submission
        appointmentForm.addEventListener("submit", function (event) {
          event.preventDefault();
          
          // You can customize this part to handle the form data (e.g., send it to a server).
          // For now, we'll just show a confirmation message.
          const formData = new FormData(appointmentForm);
          const appointmentDetails = {
            date: formData.get("date"),
            time: formData.get("time"),
            location: formData.get("location"),
            email: formData.get("email"),
            contact: formData.get("contact"),
          };
      
          // Display confirmation message
          confirmationMessage.textContent = `Your appointment has been booked for ${appointmentDetails.date} at ${appointmentDetails.time} at ${appointmentDetails.location}. You can contact us at the given number for any queries.`;
      
          // Clear the form
          appointmentForm.reset();
        });
      });
          

    
    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Related post carousel
    $(".related-slider").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
})(jQuery);

emailjs.init("iZXB8-b73cTXlMOxT"); // Replace with your User ID from Email.js

        document.getElementById("contact-form").addEventListener("submit", function (event) {
            event.preventDefault();

            // Get the form values
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;
            var location = document.getElementById("location").value;
            var carType = document.getElementById("car-type").value;
            var package = document.getElementById("service-package").value;
            var date = document.getElementById("date").value;
            var time = document.getElementById("time").value;

            // Send the email
            emailjs.send("service_5c80c5y", "template_a9ewijd", {
                name: name,
                email: email,
                phone: phone,
                location: location,
                carType: carType,
                package: package,
                date: date,
                time: time,
            })
                .then(function (response) {
                    alert("Email sent successfully!");
                    document.getElementById("contact-form").reset(); // Clear the form
                })
                .catch(function (error) {
                    alert("Failed to send email. Please try again later.");
                });
        });

 // Initialize the Places Autocomplete service
 function initializePlacesAutocomplete() {
    var input = document.getElementById('location-input');
    var options = {
        types: ['geocode'], // Restrict results to addresses
    };
    var autocomplete = new google.maps.places.Autocomplete(input, options);
}

// Load the Places Autocomplete when the page loads
google.maps.event.addDomListener(window, 'load', initializePlacesAutocomplete)
