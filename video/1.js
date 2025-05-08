(function(){
    console.log("1.js loaded");

    const questions = [
        [false,
            1,
            "<p>Je Rust kompilovaný jazyk?</p><ul><li><input type='radio' name='q1' value='a'> A) ANO</li><li><input type='radio' name='q1' value='b'> B) NE</li></ul>",
            "a"
        ],
        [false,
            5,
            "<p>Je Rust interpretovaný jazyk?</p><ul><li><input type='radio' name='q2' value='a'> A) ANO</li><li><input type='radio' name='q2' value='b'> B) NE</li></ul>",
            "b"
        ],
    ];
    window.getQuestions = () => questions;
})
();


