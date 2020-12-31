
$(document).ready(function () {
    // skill-progressbar
   $('.html').rProgressbar({
       percentage: 95
    });
     $('.css').rProgressbar({
       percentage: 90
     });
     $('.javascript').rProgressbar({
       percentage: 60
    });
     $('.jquery').rProgressbar({
       percentage: 90
    });
     $('.php').rProgressbar({
       percentage: 50
     });
      // best-seller-owl-slider-active------
    $('.testimonial-wrapper').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            dots:false
        },
        600:{
            items:1,
            nav: true,
            dots:false
        },
        1000:{
            items:2,
            nav:true,
            loop: false,
            dots:false
        },
          1200:{
            items:2,
            nav:true,
            loop: false,
            dots: false,
            pagination: false
        }
    }
    });
    // counter-area------------------
    $('.happy-client').jQuerySimpleCounter({

        // start number
        start:  0,

        // end number
        end:    55,

        // easing effect
        easing: 'swing',

        // duration time in ms
        duration: 800,

        // callback function
        complete: ''

    });
     // counter-area------------------
    $('.project-com').jQuerySimpleCounter({

        // start number
        start:  0,

        // end number
        end:    33,

        // easing effect
        easing: 'swing',

        // duration time in ms
        duration: 800,

        // callback function
        complete: ''

    });
     // counter-area------------------
    $('.award').jQuerySimpleCounter({

        // start number
        start:  0,

        // end number
        end:    15,

        // easing effect
        easing: 'swing',

        // duration time in ms
        duration: 800,

        // callback function
        complete: ''

    });
    // counter-area------------------
    $('.coffee-cup').jQuerySimpleCounter({

        // start number
        start:  0,

        // end number
        end:    25,

        // easing effect
        easing: 'swing',

        // duration time in ms
        duration: 800,

        // callback function
        complete: ''

    });
    // apply-button-scroll------
    $('.down-indicator').click(function () {  
        $("html").animate({
            scrollTop: 1100}, 1000);
    });
    // scroll-nav-activation--------
    $('#custom-nav').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
});
    // Filter Gallery
    $('.itm-list').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.single-item').show('1000');
        }
        else {
            $('.single-item').not('.' + value).hide('1000');
            $('.single-item').filter('.' + value).show('1000');
        }
    });
    $('.itm-list').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // sticky-header
    // $("header").sticky({
    //     topSpacing: 0,
    //     // bottomSpacing:400
    // });
    //  if ($(window).height() < 575) {
    //      $(".sticky-header").unstick();
    // }
    // owl-carousel-activation
   // Hero-image-slider-area start----
    var heroSlider = $('.heroSlide');
    
    heroSlider.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots:false
    });
    // owl-carousel-caption-animation
    heroSlider.on('changed.owl.carousel', function (event) {
        var item = event.item.index - 2;
        $('.single-left h2,b,span,a').removeClass('animate__animated animate__fadeInDown');
        $('.owl-item').not('.cloned').eq(item).find('.single-left h2,b,span,a').addClass('animate__animated animate__fadeInDown');
         $('.single-right img').removeClass('animate__animated animate__backInUp');
        $('.owl-item').not('.cloned').eq(item).find('.single-right img').addClass('animate__animated animate__backInUp');
    });
    // Hero-image-slider-area end----
  
// owl-carousel-dots-into-number
  $('.owl-dot').each(function(){
  $(this).children('span').text($(this).index()+1);
   });  
       // sticky nav-area-start
    $(window).scroll(function () {
        var topPosition = $(document).scrollTop();
        if (topPosition > 50) {
            $('#header').addClass("fixedNav");
        }
        else {
            $('#header').removeClass("fixedNav");
        }
    });
  
     // Recently-owl-slider-active------
    $('.reviews-wrapper').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
            nav: true,
            dots:false
        },
        600:{
            items:1,
            nav: false,
            dots:false
        },
        1000:{
            items:1,
            nav:true,
            loop: false,
            dots:false
        }
    }
});
     // single-product-view-owl-slider-active------
    $('.single-product-view-slider-wrapper').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            dots:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop: false,
            dots:true
        }
    }
});
//tooltip activation
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $('.toggleBtn').click(function () {
        $('.searchbar-collapse-top').toggleClass('d-none');
        $('#sbar-show').toggleClass('d-none');
        $('#sbarClose').toggleClass('d-none');
    });

    



    // filter-gallery-activation
    // As A jQuery Plugin -->
    // responsive-navbar-toggle----------------------
    // $('.threebarBtn').click(function () {
    //     $('.nav-header').toggleClass('displayNav');
    // });


    // // top-scroll-button-active---------------------
    // $(window).scroll(function () {
    //     if ($(window).scrollTop() > 200) {
    //         $(".scroll-top-indicator").fadeIn();
            
    //     }
    //     else {
    //         $(".scroll-top-indicator").fadeOut();
    //     }
    // });
    // parallax-------------
    // $('.parallax-window').parallax({
    //     imageSrc: 'assets/img/bg/1.jpg',

    // });
    //   $('.client-bg').parallax({
    //     imageSrc: 'assets/img/bg/2.jpg',

    // });
    // $(".scroll-top-indicator").click(function () {
    //     $("html").animate({ scrollTop: 0 },2000);
    // });
    // Filter Gallery---------------
    // $('.itm-list').click(function () {
    //     const value = $(this).attr('data-filter');
    //     if (value == 'all') {
    //         $('.single-room-wrapper').show('1000');
    //     }
    //     else {
    //         $('.single-room-wrapper').not('.' + value).hide('1000');
    //         $('.single-room-wrapper').filter('.' + value).show('1000');
    //     }
    // });
    // $('.itm-list').click(function () {
    //     $(this).addClass('active').siblings().removeClass('active');
    // });
    // previous-date-disable---------------------
    // var dateToday = new Date();    
    // $(function () {
    //     $("#date").datepicker({ 
    //         minDate: dateToday 
    //     });
    // });
    // preloader-activation------------------------
    $('.preloader').css('display', 'none');
    // nivo-slider-activation
    // $('#slider').nivoSlider();
    
});

