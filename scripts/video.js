// document.addEventListener('DOMContentLoaded', insertVideo);

// V budoucnu se insertVideo() a loadVideo() spojí do jedné funkce
// a bude se volat při načtení stránky (např. z localStorage/DB) nebo
// při kliknutí na kapitolu v seznamu
// nebo taky ne :)
let video = document.querySelector('video');

function loadVideo(chapter) {
    const videoFile = `chapter/${chapter}/video.mp4`;
    console.log(`Loading video: ${videoFile}`);

    const source = document.getElementById('video-source');

    source.src = videoFile;
    source.type = "video/mp4";

    document.getElementById('video').load();
}