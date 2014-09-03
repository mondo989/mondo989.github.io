



// Randomizer
var randomNumGen = Math.floor((Math.random() * 10) + 1);

    if ( randomNumGen <= 5) {
        document.getElementById("cats").style.display = "none";
    } else {
        document.getElementById("writings").style.display = "none";
    }


  $(".refresh").hide();


//  Getting the dragover to work..

$(document).bind('drop dragover dragstart addedfile', function () {
         $(".refresh").show("slow");
         $(".col-sm-6 > .blankdiv").show("slow");
         $(".dowork").show("slow");
       });



//The . click to create an anon function... 

 $( "#whole-uploader" ).on( "click", function (){
                
                $(".col-sm-6 > .blankdiv").show("slow");
                $(".dowork").show("slow");
                $(".refresh").show("slow");
       });


