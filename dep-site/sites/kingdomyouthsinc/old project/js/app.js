

$("#scroll-detector").bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
         $(".messages").show("fast");
         $(".content-box").show("slow");
         console.log('Scroll down');
         $(".notifications").hide("fast");
             }
    else {
         $(".notifications").show("fast");
         $(".content-box").show("slow");
         console.log('Scroll up');
         $(".messages").hide("fast");
    }
});



 $(".fb").on( "click", function (){
   $(".fb-blue-row").hide("fast");
    $(".bottom-left").hide("slow");
    $(".up-right").hide("slow");
    $(".up-left").hide("slow");

 });

 $(".white-boarder").on( "click", function (){
   $(".fb-blue-row").hide("fast");
    $(".bottom-left").show("slow");
    $(".up-right").show("slow");
    $(".up-left").show("slow");
    $(".feedbox").hide("slow");
 });

$("#messages").on( "click", function (){
   $(".messages").show("fast");
   $(".content-box").show("slow");
});





 $(".main-container").on("click", function (){
    $(".content-box").hide("slow");
     $(".fb-blue-row").show("fast");
      $(".up-right").hide("slow");
    $(".up-left").hide("slow");
     $(".bottom-left").hide("fast");
      $(".bottom-right").show("fast");
     $(".feedbox").show("slow");
 });



$("#notifications").on( "click", function (){
     $(".notifications").show("fast");
         $(".content-box").show("slow");

         $(".messages").hide("fast");
$(".feedbox").hide("slow");


});

