var chapters = [
    [0, "Předpoklady"],
    [1, "Úvod"],
    [2, "Nastavení programovacího prostředí"],
    [3, "Proměnné"],
    [3.1, "Datové typy - teorie"],
    [3.2, "Datové typy - praxe"],
    [4, "Řízení toku programu"]
];


function insertChapters() {
    var chaptersList = document.getElementById('chapter-list');
    
    let chaptersData = chapters.map(item =>
        `<li onclick="setChapter(${item[0]})"><a > ${item[0]} - ${item[1]}</a></li>`).join('');
        
    // console.log(chaptersData);
    chaptersList.innerHTML = chaptersData;
}


function loadChapter() {
    const chapter = localStorage.getItem('currentChapter');
    
    let found = false;
    chapters.forEach(element => {
        if (element[0] == chapter){
            setChapter(chapter);
            found = true;
        }
    });
    if (!found) {
        console.log("No chapter found in localStorage.");
        setChapter(0);
    }
    
    document.getElementById('quiz-container').classList.remove('active');
    // hideQuiz();
}
function setChapter(chapter) {
    console.log(`Loading chapter ${chapter} ...`);

    localStorage.setItem('currentChapter', chapter);
    console.log(`Chapter ${chapter} saved as currentChapter.`);
    
    let title = `${chapter} - ${chapters.find(item => item[0] == chapter)[1]}`;
    let chapterTitle = document.getElementById('chapter-title');
    chapterTitle.innerHTML = title;

    let info = document.getElementById('extra-info');
    info.innerHTML = "";
    
    loadVideo(chapter);
    
    loadQuiz(chapter);
}

let currentTimeUpdateHandler = null;


function loadQuiz(chapterId) {
    console.log(`NEW Loading quiz for chapter ${chapterId} ...`);
    
    const quizContainer = document.getElementById('quiz-container');
    // quizContainer.innerHTML = "";
    let quiz = document.getElementById('quiz');
    let quiz_result = document.getElementById('quiz-result');
    quiz.innerHTML = "";
    quiz_result.innerHTML = "";
    
    const videoElement = document.querySelector('video');
    
    if (document.getElementById('video-quiz')) document.getElementById('video-quiz').remove();

    const script = document.createElement('script');
    script.id = 'video-quiz';
    // script.src = "chapter/" + chapterId + "/chapter_date.js";
    script.src = `chapter/${chapterId}/chapter_data.js?t=${Date.now()}`;   // cache‑buster
    
    
    script.onload = () => {
        console.log(`${script.src} loaded`);
        if (typeof setQuiz === 'function') setQuiz(chapterId);
        if (typeof attachListener === 'function') attachListener();
    };
    script.onerror = () => {
        console.error(`Failed to load ${script.src}`);
    };
    
    document.body.appendChild(script);
}

