
/* Navbar Closes and NOT opens whenever you click off screen, Thx StOvFlow
$(document).on('click',function(){
$('.navbar-collapse.in').collapse('hide');
}); */


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


$('.circle').on("click", function(){
    $(".demo-row-2").show();
});

$('#begin-contact').on("click", function (){
    $('#begin-contact').hide();
    $("#contact").show();
});

// This allows for the nav to be clicked and enabling the div that's hidden.
$('#nav-contact').on("click", function (){
     $("#contact").show();
     $('#begin-contact').hide();
});


// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});


//Scrolll button on bottom makes animation appear
$("#transform").on("click", function (){
    $('#mhead').hide();
    $('.head-circle').show();
    $('header').css({ background: '#000'});
     $('.name').css({color:'white'});
     $('.skills').css({color:'white'});
     $('.separator').css({background:'white'});
     $('.fa-code').css({color:'white'});
});

$("#af-logo").on("click", function (){
    $('.head-circle').addClass('foolish');
    $('header').css({ background: '#000' });
    $('.name').css({color:'white'});
    $('.skills').css({color:'white'});
    $('.separator').css({background:'white'});
    $('.fa-code').css({color:'white'});
});

 $(".head-circle").on("click", function () {
    $(".head-circle").removeClass("vanish");
     $('header').css({ background: '#000' });
     $('.name').css({color:'white'});
     $('.skills').css({color:'white'});
     $('.separator').css({background:'white'});
     $('.fa-code').css({color:'white'});
});

// The see more button clicked makes contact appear
$(".see-more-span").on("click", function () {
    $(".contact-button-span").show("slow");
    $('.see-more-span').hide ("fast") ;
});

$(".contact-button-span").on("click", function () {
     $("#contact").show("slow");
     $('#begin-contact').hide();
      $(".contact-button-span").hide();
      $(".circle").hide();
});

$(".btn-action").on("click", function () {
     $('.head-circle').addClass('tinUp');
});


// Randomizer that determines the color of background.. 
var randomNumGen = Math.floor((Math.random() * 15) + 1);

    if ( randomNumGen <= 2)  {
     $('header').css({ background: '#000' });
     $('.name').css({color:'white'});
     $('.skills').css({color:'white'});
     $('.separator').css({background:'white'});
     $('.fa-code').css({color:'white'});
    }
    else if ( randomNumGen <= 8)  {
     $('header').css({ background: 'white' });
     $( ".head-circle" ).removeClass( "entrance" ).addClass( "entrancec" );
     $('.name').css({color:'black'});
     $('.skills').css({color:'black'});
     $('.separator').css({background:'black'});
     $('.fa-code').css({color:'black'});
    }
    else if ( randomNumGen <= 1)  {
     $( ".head-circle" ).removeClass( "entrance" ).addClass( "entranceb" );
     $('.name').css({color:'black'});
     $('.skills').css({color:'black'});
     $('.separator').css({background:'black'});
     $('.fa-code').css({color:'black'});
    }



/*
// This allows the window to know when we reached a certain point
$(window).scroll(function() {
    if ($(window).scrollTop()  > $(window).height() / 2)
    {
        alert('You are in the middle of the page');
    }
});


function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
} */

/*
This is going to be for the sprite with main image.
$('.spritehead').sprite({fps: 29, no_of_frames: 3}).active().spRandom({
          top: 70,
          left: 100,
          right: -200,
          bottom: 340,
          speed: 4000,
          pause: 3000
      });

$('.spritehead').pan({fps: 30, speed: 2, dir: 'right'});

*/