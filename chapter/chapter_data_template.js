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

    var chapter_info = document.getElementById('chapter-info');
    chapter_info.innerHTML = "<p>V této kapitole se dozvíte, co je to Rust a jak funguje.</p>";
})
();
