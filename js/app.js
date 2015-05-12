$(document).ready(function(){

// SC.initialize({
//     client_id: "2dd7525162f8961f25c2b860f3fa3e25"
//  	});


$('#play').click(function(event) {
	event.preventDefault();
	var userTags = $('#tags').val();
	getRequest(userTags);


	// $.getJSON("https://api.soundcloud.com/tracks/204620167.json?client_id=2dd7525162f8961f25c2b860f3fa3e25", function(data){
	// console.log(data.stream_url);
	// soundManager.createSound({
 //  		id: 'mySound',
 //  		url: data.stream_url + ".json?client_id=2dd7525162f8961f25c2b860f3fa3e25",
 //  		autoLoad: true,
 //  		autoPlay: true,
 //  		volume: 50
	// 	});
	// })


	
});

$('#next-track').click(function(event){
		event.preventDefault();

	soundManager.stop('mySound');
	soundManager.destroySound('mySound');
	// var userTags = $('#tags').val();
	// getRequest(userTags);

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
	var songList = new Array();
	var randNumb = Math.floor((Math.random() * 49) + 1);
	var params = {
		client_id: '2dd7525162f8961f25c2b860f3fa3e25',
		genres: searchTerm,
	};
	url = "https://api.soundcloud.com/tracks.json?";
	$.getJSON(url, params, function(data){
			$.each(data, function(i, songId){
				songList.push(songId.stream_url);
			});	
			console.log(songList[randNumb]);
			playSound(songList[randNumb]);
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