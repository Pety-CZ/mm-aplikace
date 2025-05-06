const quizContainer = document.getElementById("quiz-container");

function loadQuiz(chapter) {
    const quiz_path = 'video/chapter_interactive.json';
    fetch(quiz_path)
        .then(response => response.json())
        .then(data => {
            const chapterData = data.find(c => c.chapter === chapter);
            if (!chapterData) {
                console.warn("No quiz data for chapter", chapter);
                return;
            }

            videoData = chapterData;
            displayedQuizzes.clear();

            const video = document.querySelector('video');
            video.addEventListener('timeupdate', onTimeUpdate);
        })
        .catch(error => console.error('Error loading quiz:', error));
}



function onTimeUpdate(){
    let video = document.querySelector('video');
    const currentTime = Math.floor(video.currentTime);
    videoData.video.quizzes.forEach((quiz, index) => {
        if (currentTime >= quiz.time && !displayedQuizzes.has(index)) {
            video.pause();
            quizContainer.innerHTML = quiz.quizHtml + `<button onclick="checkAnswers(${index})">Odeslat</button>`;
            quizContainer.style.display = 'block';
            displayedQuizzes.add(index);
        }
    });
}



function checkAnswers(index) {
    const quiz = videoData.quizzes[index];
    const correctAnswers = quiz.correctAnswers;
    let allCorrect = true;

    for (let q in correctAnswers) {
        const selected = document.querySelector(`input[name="${q}"]:checked`);
        if (!selected || selected.value !== correctAnswers[q]) {
            allCorrect = false;
        }
    }

    alert(allCorrect ? "Správně!" : "Špatně. Zkus to znovu.");
    if (allCorrect) {
        quizContainer.style.display = 'none';
        document.querySelector('video').play();
    }
}

