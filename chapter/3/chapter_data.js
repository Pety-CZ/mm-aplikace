(function(){
    const has_video = true;
    const questions = [

        // slovo pro deklaraci proměnné, mut, zastínění
        [false,
            85,
            "<p>Jaké závorky se používají jako zástupný znak?</p><ul><li><input type='radio' name='q1' value='a'> A) ()</li><li><input type='radio' name='q1' value='b'> B) []</li><li><input type='radio' name='q1' value='c'> C) {}</li></ul>",
            "c"
        ],
        [false,
            163,
            "<p>Mohu jen tak změnit hodnotu proměnné?</p><ul><li><input type='radio' name='q2' value='a'> A) ANO</li><li><input type='radio' name='q2' value='b'> B) NE</li></ul>",
            "b"
        ],
        [false,
            204,
            "<p>Mohu po zastínění proměnné získat původní uloženou hodnotu?</p><ul><li><input type='radio' name='q3' value='a'> A) NE</li><li><input type='radio' name='q3' value='b'> B) ANO</li></ul>",
            "a"
        ]
    ];
    window.getQuestions = () => questions;
    const chapter_info = document.getElementById('chapter-info');
    chapter_info.innerHTML = "<p>Tato kapitola se zabývá základním deklarováním proměnných.</p>";

    const info = document.getElementById('extra-info');
    info.innerHTML = "Oficiální dokumentace: <a href='https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html' target='_blank'>https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html</a>";











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


