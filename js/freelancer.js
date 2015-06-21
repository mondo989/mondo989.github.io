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
    $(".circle").addClass("circle-anim");
    $(".demo-row-2").show();
    $(".demo-row-3").show();
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













// This is for the canvas

// Dots and lines

// $(function(){
//   var canvas = document.querySelector('canvas'),
//       ctx = canvas.getContext('2d'),
//       color = '#cccccc';
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   canvas.style.display = 'block';
//   ctx.fillStyle = color;
//   ctx.lineWidth = .1;
//   ctx.strokeStyle = color;
//
//   var mousePosition = {
//     x: 30 * canvas.width / 100,
//     y: 30 * canvas.height / 100
//   };
//
//   var dots = {
//     nb: 150,
//     distance: 80,
//     d_radius: 150,
//     array: []
//   };
//
//   function Dot(){
//     this.x = Math.random() * canvas.width;
//     this.y = Math.random() * canvas.height;
//
//     this.vx = -.5 + Math.random();
//     this.vy = -.5 + Math.random();
//
//     this.radius = Math.random();
//   }
//
//   Dot.prototype = {
//     create: function(){
//       ctx.beginPath();
//       ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//       ctx.fill();
//     },
//
//     animate: function(){
//       for(i = 0; i < dots.nb; i++){
//
//         var dot = dots.array[i];
//
//         if(dot.y < 0 || dot.y > canvas.height){
//           dot.vx = dot.vx;
//           dot.vy = - dot.vy;
//         }
//         else if(dot.x < 0 || dot.x > canvas.width){
//           dot.vx = - dot.vx;
//           dot.vy = dot.vy;
//         }
//         dot.x += dot.vx;
//         dot.y += dot.vy;
//       }
//     },
//
//     line: function(){
//       for(i = 0; i < dots.nb; i++){
//         for(j = 0; j < dots.nb; j++){
//           i_dot = dots.array[i];
//           j_dot = dots.array[j];
//
//           if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
//             if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
//               ctx.beginPath();
//               ctx.moveTo(i_dot.x, i_dot.y);
//               ctx.lineTo(j_dot.x, j_dot.y);
//               ctx.stroke();
//               ctx.closePath();
//             }
//           }
//         }
//       }
//     }
//   };
//
//   function createDots(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for(i = 0; i < dots.nb; i++){
//       dots.array.push(new Dot());
//       dot = dots.array[i];
//
//       dot.create();
//     }
//
//     dot.line();
//     dot.animate();
//   }
//
//   $('canvas').on('mousemove mouseleave', function(e){
//     if(e.type == 'mousemove'){
//       mousePosition.x = e.pageX;
//       mousePosition.y = e.pageY;
//     }
//     if(e.type == 'mouseleave'){
//       mousePosition.x = canvas.width / 2;
//       mousePosition.y = canvas.height / 2;
//     }
//   });
//   setInterval(createDots, 1000/30);
// });
