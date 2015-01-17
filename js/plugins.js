$(document).ready(function () {
    $(window).load(function () {

        "use strict";

        var $2columns = $('.portfolio-2');
        var $4columns = $('.portfolio-4');
        var $filter = $('.filter-portfolio');


        /* -----------------------------------------
         Integrate isotoope to 2 columns
         ----------------------------------------- */


        $2columns.isotope({
            filter: '*',
            layoutMode: 'fitRows',
            animationOptions: {
                duration: 750,
                easing: 'linear'
            }
        });


        $filter.find('a').click(function () {
            var selector = $(this).attr('data-filter');
            $2columns.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });


        $4columns.isotope({
            filter: '*',
            layoutMode: 'fitRows',
            animationOptions: {
                duration: 750,
                easing: 'linear'
            }
        });


        // Isotope Filter 
        $filter.find('a').click(function () {
            var selector = $(this).attr('data-filter');
            $4columns.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });
            return false;
        });


        $filter.find('a').click(function () {
            var currentOption = $(this).attr('data-filter');
            $filter.find('a').removeClass('current');
            $(this).addClass('current');
        });


    });

    $("#owl-demo").owlCarousel({
        autoPlay: false,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    });

    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });

    $('.link').magnificPopup({
        type: 'image',
        callbacks: {
            beforeOpen: function () {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        closeOnContentClick: true,
        midClick: true
    });


//toggle handler for accordian
    $(".accordion-toggle").click(function () {
        $(this).toggleClass("accordion-active");
    });


});


function onScrollInit(items, trigger) {
    items.each(function () {
        var osElement = $(this),
            osAnimationClass = osElement.attr('data-os-animation'),
            osAnimationDelay = osElement.attr('data-os-animation-delay'),
            onAnimationDuration = osElement.attr('data-os-animation-duration');

        osElement.css({
            '-webkit-animation-delay': osAnimationDelay,
            '-moz-animation-delay': osAnimationDelay,
            'animation-delay': osAnimationDelay,
            '-webkit-animation-duration': onAnimationDuration,
            'animation-duration': onAnimationDuration
        });

        var osTrigger = ( trigger ) ? trigger : osElement;

        osTrigger.waypoint(function () {
            osElement.addClass('animated').addClass(osAnimationClass);
        }, {
            triggerOnce: true,
            offset: '90%'
        });
    });
}

// only enable if not mobile
if (Modernizr.mq('only all and (min-width: 980px)')) {
    onScrollInit($('.os-animation'));
} else {
    $('.os-animation').addClass('animated');
}









