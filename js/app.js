$(document).ready(function(){

$('.player-input').submit(function(event) {
	event.preventDefault();
	var userTags = $('#tags').val();

	soundManager.stop('mySound');
	soundManager.destroySound('mySound');

	getRequest(userTags);
	$('.player').addClass('faded');

	});

$('#next-track').click(function(event){
	event.preventDefault();
	soundManager.stop('mySound');
	soundManager.destroySound('mySound');
	playNextSound();
	});

$('body').keyup(function(event) {
	if (event.which == 9) {
		playNextSound();
	}
	});
$('#hidden-close').click(function(){
	$('.hidden').fadeOut();
	});

});

var songList = new Array();
var userList = new Array();
var titleList = new Array();


function getRequest(searchTerm) {
	songList = [];
	userList = [];
	titleList = [];
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
					userList.push(songId.user);
					titleList.push(songId.title);
				}
			});
			if (songList == 0) {
				$('.hidden').fadeIn();
				$('#tags').val('');
			} else {
			randNumb = Math.floor((Math.random() * (songList.length - 1 )) + 1);
			playSound(songList[randNumb]);
			$('.track-info').text(userList[randNumb] + " - ");
			$('.track-info').text(titleList[randNumb]);
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
	$('.track-info').text(userList[randNumb] + " - ");
	$('.track-info').text(titleList[randNumb]);
}

function randImage() {
	$.getJSON("http://www.splashbase.co/api/v1/images/random", "images_only=true", function(data){
		$('html').css('background-image', 'url(' + data.url + ')');
	})
}
