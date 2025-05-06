// document.addEventListener('DOMContentLoaded', insertVideo);

// V budoucnu se insertVideo() a loadVideo() spojí do jedné funkce
// a bude se volat při načtení stránky (např. z localStorage/DB) nebo
// při kliknutí na kapitolu v seznamu
// nebo taky ne :)


function insertVideo() {
    const videoElement = document.querySelector('video');

    const videoData = {
        src: "video/sample-video.mp4",
        type: "video/mp4"
    };

    source = document.getElementById('video-source');
    source.src = videoData.src;
    source.type = videoData.type;

    videoElement.load();
}

function loadVideo(chapter) {
    const videoFile = `video/${chapter}.mp4`;
    console.log(`Loading video: ${videoFile}`);

    const source = document.getElementById('video-source');

    source.src = videoFile;
    source.type = "video/mp4";

    document.getElementById('video').load();

}