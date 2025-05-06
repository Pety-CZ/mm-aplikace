const video = document.querySelector('video');

let questions = [
    [false,
        5,
        "<p>Je Rust kompilovaný jazyk?</p><ul><li><input type='radio' name='q1' value='a'> A) ANO</li><li><input type='radio' name='q1' value='b'> B) NE</li></ul>",
        "a"
    ],
    [false,
        10,
        "<p>Je Rust interpretovaný jazyk?</p><ul><li><input type='radio' name='q2' value='a'> A) ANO</li><li><input type='radio' name='q2' value='b'> B) NE</li></ul>",
        "b"
    ],
];


function loadQuizForChapter(index) {
    document.getElementById('quiz-container').innerHTML = questions[index][2] + `<button onclick="checkQuiz(${index})">Odeslat</button>`;
}

function checkQuiz(index) {
    let answer = document.querySelector(`input[name="q${index + 1}"]:checked`);

    if (answer && answer.value == questions[index][3]) {
        document.getElementById('video').play();
        
        let quiz = document.getElementById('quiz-container');
        quiz.innerHTML = "<p style='color: green;'>Správně!</p>" + quiz.innerHTML;
        questions[index][0] = true;
    } else {
        alert("Špatně, zkus to znovu.");
        
    }
}

video.addEventListener('timeupdate', () => {

    questions.forEach((question, index) => {
        if (video.currentTime >= question[1] && question[0] == false) {
            video.pause();
            loadQuizForChapter(index);           
        }
    });
});