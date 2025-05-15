(function(){
    const has_video = true;
    const questions = [
        [false,
            65,
            "<p>Co představuje symbol '%'?</p><ul><li><input type='radio' name='q1' value='a'> A) celočíselné dělení</li><li><input type='radio' name='q1' value='b'> B) mocninu</li></ul>",
            "a"
        ],
        [false,
            178,
            "<p>Lze použít cyklus k projití všech prvků pole?</p><ul><li><input type='radio' name='q2' value='a'> A) NE</li><li><input type='radio' name='q2' value='b'> B) ANO</li><li><input type='radio' name='q2' value='c'> C) pouze všech prvků <i>K-tic</i></li></ul>",
            "b"
        ],
        [false,
            390,
            "<p>Vyberte valdiní ekvivalent zápisu <strong> x = x + 1</strong>:</p><ul><li><input type='radio' name='q3' value='a'> x=+1</li><li><input type='radio' name='q3' value='b'> x+1</li><li><input type='radio' name='q3' value='c'> x+=1</li><li><input type='radio' name='q3' value='d'> +1=x</li></ul>",
            "c"
        ]
    ];
    window.getQuestions = () => questions;
    const chapter_info = document.getElementById('chapter-info');
    chapter_info.innerHTML = "<p>Kapitola o řízení toku programu. V lekci je popsána práce s podmínkou a cykly.</p>";
    
    const info = document.getElementById('extra-info');
    info.innerHTML = "Oficiální dokumentace: <a href='https://doc.rust-lang.org/book/ch03-05-control-flow.html' target='_blank'>https://doc.rust-lang.org/book/ch03-05-control-flow.html</a>";
    











    const video_container = document.getElementById('video-container');

    if (has_video) {
        video_container.hidden = false;
        video_container.style.display = "block";
    } else {
        video_container.hidden = true;
        video_container.style.display = "none";
    }

    if (!questions) {
        const quiz_container = document.getElementById('quiz-container');
        quiz_container.hidden = true;
        quiz_container.style.display = "none";
    }
    else {
        const quiz_container = document.getElementById('quiz-container');
        quiz_container.hidden = false;
        quiz_container.style.display = "block";
    }
})
();


