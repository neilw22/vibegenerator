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
	var userTags = $('#tags').val();
	getRequest(userTags);

	// $.getJSON("https://api.soundcloud.com/tracks.json?client_id=2dd7525162f8961f25c2b860f3fa3e25", function(data){
	// 		$.each(data, function(i, tags){
	// 			console.log(tags.tag_list);
	// 		});
		  	// console.log(data[9].tag_list);
		  	// var newTrack = (data[0].stream_url);
		// soundManager.createSound({
  // 		id: 'mySound',
  // 		url: newTrack + ".json?client_id=2dd7525162f8961f25c2b860f3fa3e25",
  // 		autoLoad: true,
  // 		autoPlay: true,
  // 		volume: 50
		// });
	// });

});




});

function getRequest(searchTerm){

	var params = {
		client_id: '2dd7525162f8961f25c2b860f3fa3e25',
		tags: searchTerm,
	};
	url = "https://api.soundcloud.com/tracks.json?";
	$.getJSON(url, params, function(data){
			$.each(data, function(i, songId){
				console.log(songId.stream_url);
				playSound(songId.stream_url);
			});	
		});
	}

function playSound(streamId){
		soundManager.createSound({
  		id: 'mySound',
  		url: streamId + ".json?client_id=2dd7525162f8961f25c2b860f3fa3e25",
  		autoLoad: true,
  		autoPlay: true,
  		volume: 50
		});
		console.log(streamId);
	}