var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;


function divDetector () {
   EventEmitter.call(this);
}

inherits(divDetector, EventEmitter);

divDetector.prototype.iKnow = function() {
   var imHere = document.getElementById("uppic");

         if (imHere !== true){
               this.emit('bringOutNewDiv');
         }
};