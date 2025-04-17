var chapters = [
    [1, "Úvod"],
    [2, "Základy"],
    [3, "Pokročilé techniky"],
    [4, "Závěr"]
];

function insertChapters(){
    var chaptersList = document.getElementById('chapter-list');
    let chaptersData = chapters.map(item =>
        `<li><a href='chapter${item[0]}.html'>${item[0]} - ${item[1]}</a></li>`).join('');
    
    console.log(chaptersData);
    chaptersList.innerHTML = chaptersData;
}