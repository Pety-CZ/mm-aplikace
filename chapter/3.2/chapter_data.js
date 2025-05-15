(function(){
    const has_video = true;
    const questions = [
        [false,
            65,
            "<p>Co se stane, pokud nastavím proměnné hodnotu, která je mimo rozsah datového typu?</p><ul><li><input type='radio' name='q1' value='a'> A) nic</li><li><input type='radio' name='q1' value='b'> B) kompilátor mi vynadá</li></ul>",
            "c"
        ],
        [false,
            152,
            "<p>Jaké závorky používá pole?</p><ul><li><input type='radio' name='q2' value='a'> A) kulaté</li><li><input type='radio' name='q2' value='b'> B) chlupaté</li></ul>",
            "b"
        ],
        [false,
            260,
            "<p>Jak se nazývá hlavní funkce programu?</p><ul><li><input type='radio' name='q3' value='a'> A) pain</li><li><input type='radio' name='q3' value='b'> B) bane</li><li><input type='radio' name='q3' value='c'> C) rain</li>><li><input type='radio' name='q3' value='d'> D) main</li></ul>",
            "d"
        ],
        [false,
            163,
            "<p>Kolik datových typů můžu uložit do jednoho pole?</p><ul><li><input type='radio' name='q4' value='a'> A) 1</li><li><input type='radio' name='q4' value='b'> B) 2</li><li><input type='radio' name='q4' value='c'> C) nespočet</li><li><input type='radio' name='q4' value='d'> D) žádný</li></ul>",
            "a"
        ],
        [false,
            332,
            "<p><strong>Doplňte: </strong>Konstanty se pojmenovávají pomocí ______ písmen.</p><ul><li><input type='radio' name='q5' value='a'> A) malých</li><li><input type='radio' name='q5' value='b'> B) velkých</li><li><input type='radio' name='q5' value='c'> C) střídajících</li><li></ul>",
            "b"
        ]
    ];
    window.getQuestions = () => questions;
    const chapter_info = document.getElementById('chapter-info');
    chapter_info.innerHTML = "<p>Navázání na předchozí kapitolu o proměnných, nově přibyde deklarování proměnných s přiřazeným datovým typem.</p>";

    

    const info = document.getElementById('extra-info');
    info.innerHTML = "Oficiální dokumentace: <a href='https://doc.rust-lang.org/book/ch03-02-data-types.html' target='_blank'>https://doc.rust-lang.org/book/ch03-02-data-types.html</a>";









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


