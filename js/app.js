$(document).ready(function(){

// SC.initialize({
//     client_id: "2dd7525162f8961f25c2b860f3fa3e25"
//  	});


$('#play').click(function(event) {
	event.preventDefault();
	var userTags = $('#tags').val();
	getRequest(userTags);
	randImage();

	
});

$('#next-track').click(function(event){
	soundManager.stop('mySound');
	soundManager.destroySound('mySound');

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
  		volume: 50,
  		onfinish: playNextSound
		});
	}

function playNextSound(){
	playSound(songList[randNumb]);
}

function randImage() {
	$.getJSON("http://www.splashbase.co/api/v1/images/random", "images_only=true", function(data){
		$('body').css('background-image', 'url(' + data.url + ')');
		console.log(data.url);
	})
}

