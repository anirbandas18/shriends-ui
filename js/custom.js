$(document).ready(function(){
new WOW().init();

    $(".responsive-btn").click(function(){
        $(".navigation").slideToggle("slow");
        // $(this).toggleClass("cross");
    });


$('#home').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
 });

 // for sticky header

    $(window).scroll(function(){
      var sticky = $('.headnav'),
          scroll = $(window).scrollTop();

      if (scroll >= 400) sticky.addClass('fixed');
      else sticky.removeClass('fixed');

    });

});

/* Smooth Scroll */
    $('.smoth-scroll a').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 50}, 1000);
                e.preventDefault();
     });

/* banner slider */

// $('.banner-slider').slick({
//   dots: false,
//   infinite: true,
//   speed: 1000,
//   autoplay: true,
//   autoplaySpeed: 1000,
//  });




$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('.nav-panel li a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.nav-panel a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav-panel li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

// $(document).resize(function{

// });