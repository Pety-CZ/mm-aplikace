(function (){
    var questions = [
        [false,
            2,
            "<p>NE?</p><ul><li><input type='radio' name='q1' value='a'> A) ANO</li><li><input type='radio' name='q1' value='b'> B) NE</li></ul>",
            "b"
        ],
        [false,
            4,
            "<p>ANO?</p><ul><li><input type='radio' name='q2' value='a'> A) ANO</li><li><input type='radio' name='q2' value='b'> B) NE</li></ul>",
            "a"
        ],
    ];

    window.getQuestions = () => questions;
})
();