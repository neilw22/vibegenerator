$(document).ready(function(){

$('.player-input').submit(function(event) {
	event.preventDefault();
	var userTags = $('#tags').val();

	soundManager.stop('mySound');
	soundManager.destroySound('mySound');

	getRequest(userTags);

});

$('#next-track').click(function(event){
	event.preventDefault();
	soundManager.stop('mySound');
	soundManager.destroySound('mySound');
	playNextSound();
});

});



var songList = new Array();

function getRequest(searchTerm) {
	songList = [];
	var randNumb = Math.floor((Math.random() * 199) + 1);
	var params = {
		client_id: '2dd7525162f8961f25c2b860f3fa3e25',
		genres: searchTerm,
		limit: 250
	};
	url = "https://api.soundcloud.com/tracks.json?";
	$.getJSON(url, params, function(data){
		
			$.each(data, function(i, songId){
				if (songId.streamable == true) {
					songList.push(songId.stream_url);
				}
			});
			if (songList == 0) {
				alert("Sorry we couldn't find that vibe, try another style");
				$('#tags').val('');
			} else {
			randNumb = Math.floor((Math.random() * (songList.length - 1 )) + 1);
			playSound(songList[randNumb]);
			console.log(randNumb);
			}
		});
	}

function playSound(streamId){
		soundManager.destroySound('mySound');
		soundManager.createSound({
  		id: 'mySound',
  		url: streamId + ".json?client_id=2dd7525162f8961f25c2b860f3fa3e25",
  		autoLoad: true,
  		autoPlay: true,
  		volume: 50,
  		onfinish: playNextSound
		});
		randImage();
	}

function playNextSound(){
	var randNumb = Math.floor((Math.random() * (songList.length - 1 )) + 1);
	playSound(songList[randNumb]);
	// console.log(randNumb);
}

function randImage() {
	$.getJSON("http://www.splashbase.co/api/v1/images/random", "images_only=true", function(data){
		$('html').css('background-image', 'url(' + data.url + ')');
	})
}
