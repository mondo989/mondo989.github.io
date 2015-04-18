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


  $('.circle').on("click", function() {
    $(".demo-row-2").show();
  });

  $('#begin-contact').on("click", function() {
    $('#begin-contact').hide();
    $("#contact").show();
  });

  // This allows for the nav to be clicked and enabling the div that's hidden.
  $('#nav-contact').on("click", function() {
    $("#contact").show();
    $('#begin-contact').hide();
  });


  // Floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });






  //Scrolll button on bottom makes animation appear
  $("#transform").on("click", function() {
    $('#mhead').hide();
    $('.head-circle').show();
    $('header').css({
      background: '#000'
    });
    $('.name').css({
      color: 'white'
    });
    $('.skills').css({
      color: 'white'
    });
    $('.separator').css({
      background: 'white'
    });
    $('.fa-code').css({
      color: 'white'
    });
  });

  $("#af-logo").on("click", function() {
    $('.head-circle').addClass('foolish');
    $('header').css({
      background: '#000'
    });
    $('.name').css({
      color: 'white'
    });
    $('.skills').css({
      color: 'white'
    });
    $('.separator').css({
      background: 'white'
    });
    $('.fa-code').css({
      color: 'white'
    });
  });

  //  $(".head-circle").on("click", function () {
  //      $('header').css({ background: '#000' });
  //      $('.name').css({color:'white'});
  //      $('.skills').css({color:'white'});
  //      $('.separator').css({background:'white'});
  //      $('.fa-code').css({color:'white'});

  // });








  // $("#mhead").on("click", function () {
  //     $('#mhead').removeClass("head-circle");
  //     $('#mhead').addClass("entranceb");
  //     $('#mhead').removeClass("entranceb");
  //     $('#mhead').addClass("entranceb");

  // });


  // This is for clicking the main circle


  $("#mhead").click(function() {
    // $(this).removeClass("entrance");
    function randomize() {
      var rand = Math.floor(Math.random() * 3),
        body = $("body")[0]
      if (rand === 0 && body.className !== "index light") body.className = "index light"
      else if (rand === 1 && body.className !== "index dark") body.className = "index dark"
      else if (rand === 2 && body.className !== "index weird") body.className = "index weird"
      else randomize()
    }

    randomize()
  });



  // body.className = (rand===0 ? "index light" : (rand===1 ? "index dark" : "index weird"))


  //         $('header').css({ background: '#000' });
  //         $('.name').css({color:'white'});
  //         $('.skills').css({color:'white'});
  //         $('.separator').css({background:'white'});
  //         $('.fa-code').css({color:'white'});
  //         }, function() {
  //          $('header').css({ background: 'red' });
  //         $('.name').css({color:'white'});
  //         $('.skills').css({color:'white'});
  //         $('.separator').css({background:'white'});
  //         $('.fa-code').css({color:'white'});
  // });

  //     $(this).removeClass("ui-icon-minusthick");
  //     $(this).addClass("ui-icon-plusthick");
  //     $(this).parents(".portlet:first").find(".portlet-content").toggle();
  // }, function() {
  //     $(this).removeClass("ui-icon-plusthick");
  //     $(this).addClass("ui-icon-minusthick");
  //     $(this).parents(".portlet:first").find(".portlet-content").toggle();
  // });



  // The see more button clicked makes contact appear
  $(".see-more-span").on("click", function() {
    $(".contact-button-span").show("slow");
    $('.see-more-span').hide("fast");
  });

  $(".contact-button-span").on("click", function() {
    $("#contact").show("slow");
    $('#begin-contact').hide();
    $(".contact-button-span").hide();
    $(".circle").hide();
  });

  $(".btn-action").on("click", function() {
    $('.head-circle').addClass('tinUp');
  });


  // Randomizer that determines the color of background.. 
  var randomNumGen = Math.floor((Math.random() * 10) + 1);

  if (randomNumGen >= 5) {
    $('header').css({
      background: '#000'
    });
    $(".head-circle").addClass("entrancec");
    $('.name').css({
      color: 'white'
    });
    $('.skills').css({
      color: 'white'
    });
    $('.separator').css({
      background: 'white'
    });
    $('.fa-code').css({
      color: 'white'
    });
  } else if (randomNumGen <= 5) {
    $('header').css({
      background: 'white'
    });
    $(".head-circle").addClass("entrancec");
    $('.name').css({
      color: 'black'
    });
    $('.skills').css({
      color: 'black'
    });
    $('.separator').css({
      background: 'black'
    });
    $('.fa-code').css({
      color: 'black'
    });
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
});