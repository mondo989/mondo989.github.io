jQuery(document).ready(function($) {

	$(".headroom").headroom({
		"tolerance": 20,
		"offset": 50,
		"classes": {
			"initial": "animated",
			"pinned": "slideDown",
			"unpinned": "slideUp"
		}
	});

});


$( "#learn-more" ).click(function() {
  
  $( "#learn-more" ).hide();
  $( "p.end-silence" ).show();
  $( ".silence-seperator" ).addClass('silence-seperator-anim');
  $( "p.end-silence" ).addClass( "font-anim" );

});

$( "#learn-more" ).click(function() {
$( ".silence-seperator" ).addClass('silence-seperator-anime');

});