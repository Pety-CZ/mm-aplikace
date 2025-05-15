(function(){
    const has_video = true;
    const questions = [
        [false,
            216,
            "<p>Jakým příkazem lze vytvořit nový projekt?</p><ul><li><input type='radio' name='q1' value='a'> A) cargo create projekt</li><li><input type='radio' name='q1' value='b'> B) cargo new projekt</li><li><input type='radio' name='q1' value='c'> C) cargo make projekt</li></ul>",
            "b"
        ],
        [false,
            251,
            "<p>Jakou přípony mají zrojové soubory jazyka Rust?</p><ul><li><input type='radio' name='q2' value='a'> A) .rs</li><li><input type='radio' name='q2' value='b'> B) .rust</li><li><input type='radio' name='q2' value='c'> C) .rst</li></ul>",
            "a"
        ],
        [false,
            260,
            "<p>Jak se nazývá hlavní funkce programu?</p><ul><li><input type='radio' name='q3' value='a'> A) pain</li><li><input type='radio' name='q3' value='b'> B) bane</li><li><input type='radio' name='q3' value='c'> C) rain</li><li><input type='radio' name='q3' value='d'> D) main</li></ul>",
            "d"
        ],
        [false,
            320,
            "<p>Jakým příkazem lze spustit program v projektu?</p><ul><li><input type='radio' name='q4' value='a'> A) cargo build</li><li><input type='radio' name='q4' value='b'> B) cargo make</li><li><input type='radio' name='q4' value='c'> C) cargo run</li></ul>",
            "c"
        ]
    ];
    window.getQuestions = () => questions;
    const chapter_info = document.getElementById('chapter-info');
    chapter_info.innerHTML = "<p>V kapitole je popsán postup instalace jazyka Rust, prostředí pro psaní zdrojového kódu a vytvoření jednoduchého projektu.</p>";

    











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


