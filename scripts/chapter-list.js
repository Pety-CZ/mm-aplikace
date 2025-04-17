var chapters = [
    [1, "Úvod"],
    [1.1, "Úvod do programování"],
    [2, "Základy"],
    [3, "Pokročilé techniky"],
    [4, "Závěr"]
];

function insertChapters(){
    var chaptersList = document.getElementById('chapter-list');

    let chaptersData = chapters.map(item =>
        `<li onclick="loadChapter(${item[0]})"><a > ${item[0]} - ${item[1]}</a></li>`).join('');
    
    console.log(chaptersData);
    chaptersList.innerHTML = chaptersData;
}


function loadChapter(chapter){
    console.log(`Loading chapter ${chapter} ...`);

    let title = `${chapter} - ${chapters.find(item => item[0] === chapter)[1]}`;
    let chapterTitle = document.getElementById('chapter-title');
    chapterTitle.innerHTML = title;

    let videoElement = document.querySelector('video');
}