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
    src: 'ToldYouThat.m4a',
    cover: 'waterfall.gif'},
{
    src: 'Hardcore.m4a',
    cover: 'waterfall.gif'},
{
    src: 'heavylivin.m4a',
    cover: 'waterfall.gif'},
{
    src: 'http://www.kafelog.com/d/kafelog112.mp3',
    cover: 'waterfall.gif'}
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




