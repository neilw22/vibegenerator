$(document).ready(function(){
//soundmanager load
// loadJS('soundmanager2.js', function() {
//   soundManager.setup({
//     url: '../swf/',
//     onready: function() {
//       // good to go!
//       // soundManager.createSound(...), etc.
//     }
//   });
// });
	// var result = $.ajax({
	// 	url: "https://api.soundcloud.com/tracks",
	// 	data: request,
	// 	dataType: "jsonp",
	// 	type: "GET",
	// 	})

$('#play').click(function(event) {
	$.getJSON("http://api.soundcloud.com/tracks/204620167.json?client_id=2dd7525162f8961f25c2b860f3fa3e25", function(data){
	console.log(data.stream_url);
	soundManager.createSound({
  		id: 'mySound',
  		url: data.stream_url + ".json?client_id=2dd7525162f8961f25c2b860f3fa3e25",
  		autoLoad: true,
  		autoPlay: true,
  		volume: 50
});
	})

	// SC.stream("/tracks/204620167", function(sound){
 //  	sound.play();
	// });

// soundManager.createSound({
//   id: 'mySound',
//   url: "https://api.soundcloud.com/tracks/204620167/stream",
//   autoLoad: true,
//   autoPlay: true,
//   volume: 50
// });

	
});




});

// var getTrack = function(request) {

// };