const video = document.querySelector('video');

let quizTime = 5;

let questions = [
    "<p>Je Rust kompilovaný jazyk?</p><ul><li><input type='radio' name='q1' value='a'> A) ANO</li><li><input type='radio' name='q1' value='b'> B) NE</li></ul>"

];

function onTimeUpdate() {
    let video = document.querySelector('video');
    const currentTime = Math.floor(video.currentTime);
    videoData.video.quizzes.forEach((quiz, index) => {
        if (currentTime >= quizTime) {
            video.pause();
            quizContainer.innerHTML = questions[0] + `<button onclick="checkAnswers(${index})">Odeslat</button>`;
            quizContainer.style.display = 'block';
            displayedQuizzes.add(index);
        }
    });
}