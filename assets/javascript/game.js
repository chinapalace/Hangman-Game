window.addEventListener('keydown',function(event){
	console.log(event)
});


// object constructor for Songs 
function Song(title,guesses,chars,song) {
	this.title = title;
	this.guesses = guesses;
	this.chars = chars;
	this.song = song;


}


// array for all Song objects
var songs = [
	new Song("Loose", 3,5, "assets/songs/Loose.mp3"),
	new Song("Dirt", 2, 4, "assets/songs/Dirt.mp3"),
	new Song("1970", 2, 4, "assets/songs/1970.mp3")
];

console.log(songs[0]);