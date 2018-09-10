var interval = undefined;
$(document).ready(function () {
    interval = setInterval(getNext, 10000000); // milliseconds
    $('.console-forward').on('click', getNext);
    $('.console-back').on('click', getPrev);
});

function getNext() {
    var $curr = $('.slideshow img:visible'),
        $next = ($curr.next().length) ? $curr.next() : $('.slideshow img').first();

    transition($curr, $next);
}

function getPrev() {
    var $curr = $('.slideshow img:visible'),
        $next = ($curr.prev().length) ? $curr.prev() : $('.slideshow img').last();
    transition($curr, $next);
}

function transition($curr, $next) {
    clearInterval(interval);

    $next.css('z-index', 2).fadeIn('slow', function () {
        $curr.hide().css('z-index', 0);
        $next.css('z-index', 1);
    });
}

var tracklist = [
    {
    src: 'heavylivin.m4a',
    cover: 'http://www.tunohastenidoinfancia.com/wp-content/uploads/2012/04/quantum-leap_Final-233x300.jpg'},
{
    src: 'http://feedproxy.google.com/~r/droidcast/~5/WYL0gD1VwXQ/56-droidcast-android-galaxy-siii-noticias-correos_md_1209538_1.mp3',
    cover: 'http://www.droidcast.es/wp-content/uploads/2012/01/top-post-podcast.jpg'},
{
    src: 'http://www.arcadiagamers.com/elclubvintage/ECV66_25may.mp3',
    cover: 'waterfall.gif'},
{
    src: 'http://www.kafelog.com/d/kafelog112.mp3',
    cover: 'http://www.kafelog.com/wp-content/themes/yoko/images/headers/logoS.jpg'}
];

var player = false;
var track = 1;
var lastTrack = -1;

var play = function() {
    if (lastTrack != track) {
        player.src = tracklist[track - 1].src;
    }

    lastTrack = track;

    if (player.paused) {
        player.play();
    }
};

$(document).ready(function() {
    player = document.createElement('audio');

    $('a.player-control').click(function(event) {
        event.preventDefault();
    });

    $('#play').click(function() {
        play();
    });

    $('#pause').click(function() {
        if (!player.paused) {
            player.pause();
        }
    });

    $('#next').click(function() {
        track++;

        if (track > tracklist.length) {
            track = 1;
        }

        play();
    });

    $('#prev').click(function() {
        track--;

        if (track < 1) {
            track = tracklist.length;
        }

        play();
    });
});




// var currentAudio = 0;
// var audioClasses = [ 'barbiehorse.mp3', 'powerbeauty.mp3', 'groove.m4a', 'beautiful.m4a', 'elevator.m4a', 'perfectbody.mp3'];
// var songs = []

// function prevAudio() {
// 	songs[currentAudio].pause();
// 	currentAudio -=1;
// 	if (currentAudio < 0) currentAudio = audioClasses.length -1;
// 	setAudio();
// }

// function nextAudio() {
// 	songs[currentAudio].pause();
// 	currentAudio += 1;
// 	if (currentAudio >= audioClasses.length) currentAudio = 0;
// 	setAudio();
// }

// function setAudio() {
// 		songs[currentAudio].play();


// }

// // generating audio elements for all songs
// for (var i =0; i < audioClasses.length; ++i) {
// 	var currentSong = audioClasses[i]
// 	var audio = new Audio();
// 	audio.src= currentSong
// 	songs.push(audio)
// }

// setAudio();

// $('.console-playback').click(function() {
// 	handlemessage({
// 	  sender: 'suhhh',
// 	  type: 'raw',
// 	  value: 8
// 	});
// });
// $('.console-playforward').click(function() {
// 	handlemessage({
// 	  sender: 'suhhh',
// 	  type: 'raw',
// 	  value: 10
// 	});
// });

// function handlemessage(data) {

// 	if (data.value == 0) {
// 		prevBg();

// 	} else if (data.value == 8) {
// 		prevAudio();
// 	} else if (data.value == 9) {
// 		prevAudio();
// 	} else if (data.value == 10) {
// 		nextAudio();
// 	} else if (data.value == 11) {
// 		nextAudio();
// 	} else if (data.value == 12) {
// 		nextAudio();
// 	}
// }