document.addEventListener('DOMContentLoaded', insertVideo);

function insertVideo() {
    const videoElement = document.querySelector('video');

    const videoData = {
        src: "video/sample-video.mp4",
        type: "video/mp4"
    };

    const source = document.createElement('source');
    source.src = videoData.src;
    source.type = videoData.type;

    videoElement.innerHTML = '';
    videoElement.appendChild(source);
    videoElement.load();
}