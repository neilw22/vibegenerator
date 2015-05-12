$(document).ready(function(){

SC.initialize({
    client_id: "2dd7525162f8961f25c2b860f3fa3e25"
 	});


$('#play').click(function(event) {
	$.getJSON("https://api.soundcloud.com/tracks/204620167.json?client_id=2dd7525162f8961f25c2b860f3fa3e25", function(data){
	console.log(data.stream_url);
	soundManager.createSound({
  		id: 'mySound',
  		url: data.stream_url + ".json?client_id=2dd7525162f8961f25c2b860f3fa3e25",
  		autoLoad: true,
  		autoPlay: true,
  		volume: 50
		});
	})


	
});

$('#next-track').click(function(event){

	$.getJSON("https://api.soundcloud.com/tracks.json?client_id=2dd7525162f8961f25c2b860f3fa3e25", function(data){
		  	console.log(data[0].id);
		  	var newTrack = (data[0].stream_url);
		soundManager.createSound({
  		id: 'mySound',
  		url: newTrack + ".json?client_id=2dd7525162f8961f25c2b860f3fa3e25",
  		autoLoad: true,
  		autoPlay: true,
  		volume: 50
		});
	});

});




});
