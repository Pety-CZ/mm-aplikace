(function (){
    var questions = [
        /*
        [bool,		// flag if question was succesfuly answered
            int,    // time in seconds when the question should be asked
            string, // quiz HTML
    		string  // correct answer
        ],
        */
        [false,
			2,
            "<p>NE?</p><ul><li><input type='radio' name='q1' value='a'> A) ANO</li><li><input type='radio' name='q1' value='b'> B) NE</li></ul>", // quiz HTML
            "b"
        ],
        [false,
            4,
            "<p>ANO?</p><ul><li><input type='radio' name='q2' value='a'> A) ANO</li><li><input type='radio' name='q2' value='b'> B) NE</li></ul>",
            "a"
        ],
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