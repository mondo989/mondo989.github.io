
// Intersection Observer
const images = document.querySelectorAll('.section__animate');
observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.intersectionRatio > 0) {
			entry.target.classList.add('animated');
		} else {
			//				entry.target.classList.remove('section__animate');
			//				entry.target.toggleClass('animated');
		}
	});
});
images.forEach(image => {
	observer.observe(image);
});
	

// Parallax JS Scenes
function callNewScene() {
	var scene = document.querySelector('.scene');
	var parallaxInstance = new Parallax(scene, {
	});
}
callNewScene();




// SVGMOJI
// SVGMOJI
// SVGMOJI
// SVGMOJI

const vectorFace = document.querySelector(".emoji__smiley-face");

var updateSVGMoji = function() {
	PrefixedEvent(vectorFace, "AnimationEnd", callRandomSvgMoji(), false);
	vectorFace.classList.add("emoji-new-emoji");
	console.log("toggled emoji complete");
}

var callRandomSvgMoji = function() {

	if (vectorFace.classList.length >= 2) {
		vectorFace.classList = "emoji__smiley-face";
		console.log("extra classes removed")
	}

	getRandomSVGMoji();
	console.log("getRandomNumber function fired ");
}

var getRandomSVGMoji = function() {
	function randomize() {
		var randomNumber = Math.floor(Math.random() * 3);
			if (randomNumber === 0 && vectorFace.className !== "emoji__smiley-face emoji-new-emoji") vectorFace.classList.add("wink");
			else if (randomNumber === 1 && vectorFace.className !== "emoji__smiley-face emoji-new-emoji") vectorFace.classList.add("wow-spin");
			else if (randomNumber === 2 && vectorFace.className !== "emoji__smiley-face emoji-new-emoji") vectorFace.classList.add("smile");
			else if (randomNumber === 3 && vectorFace.className !== "emoji__smiley-face emoji-new-emoji") vectorFace.classList.add("right");
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

		