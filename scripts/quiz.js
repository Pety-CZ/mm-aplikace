const quizContainer = document.getElementById("quiz-container");
let questions = [];


function setQuiz(chapter) {
    console.log(`Loading quiz for chapter ${chapter} ...`);
    // var questions = getQuestions();
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = "";

    questions = typeof getQuestions === 'function'
        ? getQuestions()
        : [];
    // console.log("Questions: " + questions);

}
function attachListener() {
    console.log("attachListener called");
    const video = document.querySelector('video');
    video.removeEventListener('timeupdate', timeUpdate);
    video.addEventListener('timeupdate', timeUpdate);
}
function timeUpdate() {
    console.log("timeUpdate called");
    const video = document.querySelector('video');
    const currentTime = Math.floor(video.currentTime);
    questions.forEach((question, index) => {
        if ( question[0] == false && currentTime >= question[1] ) {
            video.pause();
            loadQuizForChapter(index);
        }
    });
}
function loadQuizForChapter(index) {
    document.getElementById('quiz-container').innerHTML = questions[index][2] + `<button onclick="checkQuestion(${index})">Odeslat</button>`;
}
function checkQuestion(index) {
    let answer = document.querySelector(`input[name="q${index + 1}"]:checked`);

    let quiz = document.getElementById('quiz-container');
    loadQuizForChapter(index);
    if (answer && answer.value == questions[index][3]) {
        document.getElementById('video').play();
        quiz.innerHTML = "<p style='color: green;'>Správně!</p>" + quiz.innerHTML;
        questions[index][0] = true;
    } else {
        quiz.innerHTML = "<p style='color: red;'>Špatně!</p>" + quiz.innerHTML;
    }
}