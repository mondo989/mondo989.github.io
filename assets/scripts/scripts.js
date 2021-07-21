// Intersection Observer
const images = document.querySelectorAll('.section__animate');
observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.intersectionRatio > 0) {
			entry.target.classList.add('animated');
		}
	});
});
images.forEach(image => {
	observer.observe(image);
});
	
// Init Parallax JS
		// Removing Not planning to use ParallaxJs

		// function callNewScene() {
		// 	var scene = document.querySelector('.scene');
		// 	var parallaxInstance = new Parallax(scene, {
		// 	});
		// }
		// callNewScene();


// SVGMOJI
// SVGMOJI
// SVGMOJI

const svgMoji = document.querySelector(".emoji__smiley-face");

var updateSVGMoji = function() {
	svgMoji.classList.add("emoji-new-emoji");
	PrefixedEvent(svgMoji, "AnimationEnd", callRandomSvgMoji(), false);
	console.log("toggled emoji complete");
}

var callRandomSvgMoji = function() {
	if (svgMoji.classList.length >= 1) {
		svgMoji.classList = "emoji__smiley-face";
		console.log("extra classes removed")
	}

	getRandomSVGMoji();
	// console.log("getRandomNumber function fired ");
}

var getRandomSVGMoji = function() {
	function randomize() {
		var randomNumber = Math.floor(Math.random() * 4);
			if (randomNumber === 0 && svgMoji.className !== "emoji__smiley-face emoji-new-emoji") svgMoji.classList.add("wink"), console.log("Anim 1 - smile face wink eyes yTranslate anim ");
			else if (randomNumber === 1 && svgMoji.className !== "emoji__smiley-face emoji-new-emoji") svgMoji.classList.add("wow-spin"), console.log("Anim 2 - O face swirly eyes shake anim");
			else if (randomNumber === 2 && svgMoji.className !== "emoji__smiley-face emoji-new-emoji") svgMoji.classList.add("lips-shake"), console.log("Anim 3 - kiss face raised eyes yTranslate anim");
			else if (randomNumber === 3 && svgMoji.className !== "emoji__smiley-face emoji-new-emoji") svgMoji.classList.add("sleepy-face"), console.log("Anim 4 - smile face raised eyebrows  Y translate");
		else randomize()
	}
	randomize();
}

// https://www.sitepoint.com/css3-animation-javascript-event-handlers/
var pfx = ["webkit", "moz", "MS", "o", ""];

function PrefixedEvent(element, type, callback) {
	for (var p = 0; p < pfx.length; p++) {
		if (!pfx[p]) type = type.toLowerCase();
		element.addEventListener(pfx[p]+type, callback, false);
	}
}


// SEAGULLS
// SEAGULLS
// SEAGULLS
// SEAGULLS
// SEAGULLS

// document.querySelector(".hero__image--seagull-four").addEventListener('animationend', function(){
// 	console.log("Boo");
// 	callNewScene();
// });

// document.querySelector(".hero__image--seagull-four").addEventListener('animationend', function(){
// 	console.log("Boo");
// 	callNewScene();
// });

// document.getElementById("hero").addEventListener("transitionend", myEndFunction);
function myEndFunction() {
	// this.innerHTML = "Transition event ended";
	console.log("enedded");
}

// Update to get seagulls on a random Animation duration time 
// var randomSeagullsFly = function() {
// 	var seagullDuration = document.getElementsByClassName("hero__image--seagull").classList.add("mystles");
// 	console.log(seagullDuration[0]);
// }

// randomSeagullsFly()

		