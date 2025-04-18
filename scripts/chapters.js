var chapters = [
    [1, "Úvod"],
    [1.1, "Úvod do programování"],
    [2, "Základy"],
    [3, "Pokročilé techniky"],
    [4, "Závěr"]
];


function insertChapters() {
    var chaptersList = document.getElementById('chapter-list');

    let chaptersData = chapters.map(item =>
        `<li onclick="setChapter(${item[0]})"><a > ${item[0]} - ${item[1]}</a></li>`).join('');

    console.log(chaptersData);
    chaptersList.innerHTML = chaptersData;
}


function loadChapter() {
    const chapter = localStorage.getItem('currentChapter');

    let found = false;
    chapters.forEach(element => {
        console.log(element[0]);
        if (element[0] == chapter){
            setChapter(chapter);
            found = true;
        }
    });
    if (!found) {
        console.log("No chapter found in localStorage.");
        setChapter(1);
    }
}
function setChapter(chapter) {
    console.log(`Loading chapter ${chapter} ...`);

    localStorage.setItem('currentChapter', chapter);
    console.log(`Chapter ${chapter} saved as currentChapter.`);

    let title = `${chapter} - ${chapters.find(item => item[0] == chapter)[1]}`;
    let chapterTitle = document.getElementById('chapter-title');
    chapterTitle.innerHTML = title;

    let video = "${chapter}.mp4";
    loadVideo(chapter);

}