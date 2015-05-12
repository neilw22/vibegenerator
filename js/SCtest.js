
function playTrack(tags){
	SC.get('/tracks'), {
		tag_list: tags
	}, function(tracks) {
		var random = Math.floor(Math.random() * 49);
		// SC.oEmbed(tracks[random].uri, { auto_play: true}, document.getElementById('target'));
		soundManager.createSound({
  		id: 'mySound',
  		url: data.stream_url,
  		autoLoad: true,
  		autoPlay: true,
  		volume: 50
	});
}

window.onload = function() {
	SC.initialize({
		client_id: '2dd7525162f8961f25c2b860f3fa3e25'
	});

	$('#next-track').click(function(){
		var lookup = $("#tags").val();
		playTrack(lookup);

	});


};